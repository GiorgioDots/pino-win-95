import { DragDropModule } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { DesktopElement, DesktopElementComponent } from '../desktop-element/desktop-element.component';
import { DialogService } from '../dialog/dialog.service';

@Component({
  selector: 'app-image-dialog',
  standalone: true,
  imports: [DesktopElementComponent, CommonModule, DragDropModule],
  templateUrl: './image-dialog.component.html',
  styleUrl: './image-dialog.component.scss'
})
export class ImageDialogComponent {
  @Input() desktopElement!: DesktopElement;
  @Input() _dia_id: string = '';

  @ViewChild('dialog') wrapperRef!: ElementRef<HTMLDivElement>;

  @ViewChild('dialogTitle') topBarRef!: ElementRef<HTMLDivElement>;

  position: { x: number; y: number } = { x: 0, y: 0 };

  size: { w: number; h: number } = {
    h: 0,
    w: 0,
  };

  isMaximized = false;

  constructor(public svc: DialogService) {}

  ngOnInit(): void {
    this.onMaximize();
  }

  close() {
    this.svc.close(this._dia_id);
  }

  onMaximize() {
    this.isMaximized = !this.isMaximized;
    if (this.isMaximized) {
      if (this.wrapperRef) this.wrapperRef.nativeElement.style.transform = '';
      this.position.x = 0;
      this.position.y = 0;
      this.size.h = document.documentElement.clientHeight - 32;
      this.size.w = document.documentElement.clientWidth;
    } else {
      this.size.h = document.documentElement.clientHeight * 0.8;
      this.size.w = document.documentElement.clientWidth * 0.6;
      if(document.documentElement.clientWidth < 490){
        this.size.w = document.documentElement.clientWidth;
      }
      this.position = {
        x: (document.documentElement.clientWidth - this.size.w) / 2,
        y: (document.documentElement.clientHeight - this.size.h) / 2,
      };
    }
  }

  onMinimize() {
    this.svc.toggleMinimize(this._dia_id);
  }
}
