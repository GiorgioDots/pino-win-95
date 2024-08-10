import { Injectable, Type } from '@angular/core';
import { DesktopElement } from '../desktop-element/desktop-element.component';

@Injectable({
  providedIn: 'root',
})
export class DialogService {
  currentDialogs: DialogData[] = [];

  minimizedDialogs: DialogData[] = [];

  activeDialog?: string;

  constructor() {}

  open(
    component: Type<any>,
    inputs: Record<string, unknown>,
    checkSameComponent = false
  ) {
    let alreadyOpened = this.currentDialogs.find(
      (k) => k.desktopElement == (inputs['desktopElement'] as DesktopElement)
    );
    if (alreadyOpened) {
      this.setActive(alreadyOpened.id);
      return;
    }
    if(checkSameComponent){
      alreadyOpened = this.currentDialogs.find(k => k.component == component);
      if(alreadyOpened){
        this.close(alreadyOpened.id);
      }
    }
    const id = this.currentDialogs.length.toString();
    inputs['_dia_id'] = id;
    this.currentDialogs.push({
      component: component,
      inputs: inputs,
      id: id,
      desktopElement: inputs['desktopElement'] as DesktopElement,
    });
    this.setActive(id);
  }

  close(_dia_id: string) {
    this.currentDialogs = this.currentDialogs.filter((k) => k.id != _dia_id);
  }

  minimize(id: string) {
    let dia = this.currentDialogs.find((k) => k.id == id);
    if (dia != undefined) this.minimizedDialogs.push(dia);
    if (this.activeDialog == id) {
      this.activeDialog = undefined;
    }
  }

  setActive(id: string) {
    console.log('settingActive');
    this.minimizedDialogs = this.minimizedDialogs.filter((k) => k.id != id);
    this.activeDialog = id;
  }

  toggleMinimize(id: string) {
    if (this.isMinimized(id)) {
      this.setActive(id);
    } else {
      if (!this.isActive(id) && !this.isMinimized(id)) {
        this.setActive(id);
      } else {
        this.minimize(id);
      }
    }
  }

  isActive(diaId: string) {
    return this.activeDialog == diaId;
  }

  isMinimized(id: string) {
    return this.minimizedDialogs.some((k) => k.id == id);
  }
}

export interface DialogData {
  component: Type<any>;
  id: string;
  inputs?: Record<string, unknown>;
  desktopElement: DesktopElement;
}
