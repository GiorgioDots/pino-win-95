import { CommonModule, DatePipe } from '@angular/common';
import {
  AfterContentInit,
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {
  DesktopElement,
  DesktopElementComponent,
} from './components/desktop-element/desktop-element.component';
import { DialogService } from './components/dialog/dialog.service';
import { FolderDialogComponent } from './components/folder-dialog/folder-dialog.component';
import { DialogComponent } from './components/dialog/dialog.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    DatePipe,
    CommonModule,
    DesktopElementComponent,
    DialogComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  currTime: Date = new Date();
  audio = new Audio();
  menuActive = false;
  dialogActive = false;
  desktopElement: DesktopElement = {
    icon: 'FolderHiRes.ico',
    label: "My Pino's Images",
  };

  menus: {
    label: string;
    icon: string;
    height?: string;
    marginLeft?: string;
    gap?: string;
  }[] = [
    { label: 'Programs', icon: 'Program Folder.ico' },
    { label: 'Documents', icon: 'DocumentsFolder.ico' },
    { label: 'Settings', icon: 'Settings.ico' },
    { label: 'Find', icon: 'Search in sheet.ico' },
    {
      label: 'Help',
      icon: 'Help book.ico',
      height: '24px',
      marginLeft: '6px',
      gap: '10px',
    },
    { label: 'Run...', icon: 'Program wait.ico' },
    { label: 'Shut Down...', icon: 'Turn Off Computer.ico' },
  ];

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

  constructor(public diaSvc: DialogService) {}

  ngOnInit(): void {

    this.audio.src = "MACINTOSH PLUS.mp3";
    this.audio.load();
    this.audio.volume = 0.2;
    setInterval(() => {
      this.currTime = new Date();
    }, 1000);
  }

  playSong(){
    this.audio.play();
  }

  openFolder() {
    this.diaSvc.open(FolderDialogComponent, {
      folderElements: this.images,
      desktopElement: this.desktopElement
    });
  }
}
