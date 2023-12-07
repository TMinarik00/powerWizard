// PopupComponent
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-popup',
  template: `
    <div *ngIf="show" class="popup__backdrop" (click)="closePopup()">
      <div class="popup__container" (click)="preventClosing($event)">
        <ng-content></ng-content>
      </div>
    </div>
  `,
  styleUrls: ['../../Components/popup/popup.component.scss'],
})
export class PopupComponent {
  @Input() show!: boolean;
  @Output() close = new EventEmitter();

  closePopup() {
    this.close.emit();
  }

  preventClosing(event: Event) {
    event.stopPropagation();
  }
}
