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
import { PinoImagesService } from './pino-images.service';

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
    action?: (() => void);
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
    { label: 'Run...', icon: 'Program wait.ico', action: () => this.audio.play() },
    { label: 'Shut Down...', icon: 'Turn Off Computer.ico', action: () => this.audio.pause() },
  ];

  

  constructor(public diaSvc: DialogService, public pinoSvc: PinoImagesService) {}

  ngOnInit(): void {

    setInterval(() => {
      this.currTime = new Date();
    }, 1000);
  }

  playSong(){
    if(this.audio.src == ""){
      this.audio.src = "MACINTOSH PLUS.mp3";
      this.audio.load();
      this.audio.volume = 0.2;
      this.audio.play();
    } 
  }

  openFolder() {
    this.diaSvc.open(FolderDialogComponent, {
      folderElements: this.pinoSvc.images,
      desktopElement: this.desktopElement
    });
  }

  goToGithub(){
    let a = document.createElement('a');
    a.href = "https://github.com/GiorgioDots/pino-win-95";
    a.target = "_blank";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }
}
