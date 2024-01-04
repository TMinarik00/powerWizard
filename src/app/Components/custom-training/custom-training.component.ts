import { Component } from '@angular/core';

@Component({
  selector: 'app-custom-training',
  template: `
    <div class="training__form">
      <!-- Input -->
      <div class="training__form--input">
        <!-- Training Name -->
        <div class="training__form--input-name">
          <label for="training">Training Plan Name</label>
          <input type="text" />
        </div>
        <!-- Training Days -->
        <div class="training__form--input-days">
          <label for="days">How many times a week:</label>
          <select id="days" name="days" (change)="onSelectDay($event)">
            <option *ngFor="let day of weekDays" [value]="day">
              {{ day }} day{{ day !== 1 ? 's' : '' }}
            </option>
          </select>
        </div>
      </div>

      <!-- Training creator -->
      <div class="training__form--container">
        <div
          class="training__form--creator"
          *ngFor="let training of selectedWeekDays"
        >
          <div class="training__form--creator-day">Day {{ training }}</div>

          <div class="training__form--creator-input">
            <label for="training">Training Name</label>
            <input type="text" />
          </div>

          <div class="btn-container">
            <a class="training__form--creator-btn btn btn--white"
              >Add Exercise</a
            >
            <a class="training__form--creator-btn btn btn--white">Save</a>
          </div>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['custom-training.component.scss'],
})
export class CustomTrainingComponent {
  weekDays: number[] = [1, 2, 3, 4, 5, 6, 7];
  selectedWeekDays: number[] = [];

  onSelectDay(event: any) {
    const selectedDays = +event.target.value;
    this.selectedWeekDays = [];
    for (let i = 1; i <= selectedDays; i++) {
      this.selectedWeekDays.push(i);
    }
    console.log(`Selected days: ${selectedDays}`);
  }
}
