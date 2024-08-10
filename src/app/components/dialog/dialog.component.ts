import { Component } from '@angular/core';
import { DialogService } from './dialog.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dialog',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.scss'
})
export class DialogComponent {


  constructor(public svc: DialogService){

  }

}
