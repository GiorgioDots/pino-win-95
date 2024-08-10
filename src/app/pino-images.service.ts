import { Injectable } from '@angular/core';
import { DesktopElement } from './components/desktop-element/desktop-element.component';

@Injectable({
  providedIn: 'root'
})
export class PinoImagesService {
  
  images: DesktopElement[] = [
    { icon: 'pino/p1.jpeg', label: 'p1.jpeg', color: 'black' },
    { icon: 'pino/p2.jpeg', label: 'p2.jpeg', color: 'black' },
    { icon: 'pino/p3.jpeg', label: 'p3.jpeg', color: 'black' },
    { icon: 'pino/p4.jpeg', label: 'p4.jpeg', color: 'black' },
    { icon: 'pino/p5.jpeg', label: 'p5.jpeg', color: 'black' },
    { icon: 'pino/p6.jpeg', label: 'p6.jpeg', color: 'black' },
    { icon: 'pino/p7.jpeg', label: 'p7.jpeg', color: 'black' },
    { icon: 'pino/p8.jpeg', label: 'p8.jpeg', color: 'black' },
    { icon: 'pino/p9.jpeg', label: 'p9.jpeg', color: 'black' },
    { icon: 'pino/p10.jpeg', label: 'p10.jpeg', color: 'black' },
    { icon: 'pino/p11.jpeg', label: 'p11.jpeg', color: 'black' },
    { icon: 'pino/p12.jpeg', label: 'p12.jpeg', color: 'black' },
    { icon: 'pino/p13.jpeg', label: 'p13.jpeg', color: 'black' },
    { icon: 'pino/p14.jpeg', label: 'p14.jpeg', color: 'black' },
    { icon: 'pino/p15.jpeg', label: 'p15.jpeg', color: 'black' },
    { icon: 'pino/p16.jpeg', label: 'p16.jpeg', color: 'black' },
    { icon: 'pino/p17.jpeg', label: 'p17.jpeg', color: 'black' },
    { icon: 'pino/p18.jpeg', label: 'p18.jpeg', color: 'black' },
    { icon: 'pino/p19.jpeg', label: 'p19.jpeg', color: 'black' },
    // { icon: 'pino/p20.jpeg', label: 'p20.jpeg', color: 'black' },
    { icon: 'pino/p21.jpeg', label: 'p21.jpeg', color: 'black' },
    { icon: 'pino/p22.jpeg', label: 'p22.jpeg', color: 'black' },
    { icon: 'pino/p23.jpeg', label: 'p23.jpeg', color: 'black' },
    { icon: 'pino/p24.jpeg', label: 'p24.jpeg', color: 'black' },
    { icon: 'pino/p25.jpeg', label: 'p25.jpeg', color: 'black' },
    { icon: 'pino/p26.jpeg', label: 'p26.jpeg', color: 'black' },
  ];
  constructor() { }

  hasNext(el: DesktopElement){
    return this.images.indexOf(el) < this.images.length - 1;
  }

  hasPrev(el: DesktopElement){
    return this.images.indexOf(el) > 0;
  }

  getNext(desktopElement: DesktopElement): DesktopElement | undefined {
    let curr = this.images.indexOf(desktopElement);
    let next = curr + 1
    if(next <= this.images.length - 1){
      return this.images[next]; 
    }
    else {
      return undefined;
    }
  }
  getPrev(desktopElement: DesktopElement): DesktopElement | undefined {
    let curr = this.images.indexOf(desktopElement);
    let next = curr - 1
    if(next >= 0){
      return this.images[next]; 
    }
    else {
      return undefined;
    }
  }
}
