import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-desktop-element',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './desktop-element.component.html',
  styleUrl: './desktop-element.component.scss',
})
export class DesktopElementComponent {
  @Input() element!: DesktopElement;
  @Output() onClick = new EventEmitter<MouseEvent>();

  elementClicked(event: MouseEvent) {
    this.onClick.emit(event);
  }
}

export interface DesktopElement {
  icon: string;
  label: string;
  color?: string;
}
