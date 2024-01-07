// popup.component.ts
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-popup',
  template: `
    <div *ngIf="show" class="popup__backdrop" (click)="closePopup()">
      <div
        [style.width.rem]="popupWidth"
        [style.height.rem]="popupHeight"
        class="popup__container"
        (click)="preventClosing($event)"
      >
        <ng-content></ng-content>
      </div>
    </div>
  `,
  styleUrls: ['../../Components/popup/popup.component.scss'],
})
export class PopupComponent {
  @Input() show!: boolean;
  @Input() popupWidth: number = 65; // Default width
  @Input() popupHeight: number = 60; // Default height
  @Output() close = new EventEmitter();

  closePopup() {
    this.close.emit();
  }

  preventClosing(event: Event) {
    event.stopPropagation();
  }
}
