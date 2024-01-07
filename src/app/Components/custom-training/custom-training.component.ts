import { Component } from '@angular/core';
import { IExercise } from 'src/Interface/Exercise';
import { FilterService } from 'src/app/Services/filter.service';
import { SharedService } from 'src/app/Services/shared.service';

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
          *ngFor="let day of selectedWeekDays"
        >
          <div class="training__form--creator-day">Day {{ day }}</div>

          <div class="training__form--creator-input">
            <label for="training">Training Name</label>
            <input type="text" />
          </div>

          <div class="training__form--creator-exercises">
            <div
              *ngFor="let exercise of selectedExercises[day] || []"
              class="training__form--creator-exercises-card"
            >
              <div class="training__form--creator-exercises-card-form">
                <div
                  class="training__form--creator-exercises-card-form-heading"
                >
                  {{ exercise?.name }}
                </div>
                <input
                  class="training__form--creator-exercises-card-form-num"
                  placeholder="Reps"
                />
                <input
                  class="training__form--creator-exercises-card-form-num"
                  placeholder="Sets"
                />
              </div>
            </div>
          </div>

          <div class="btn-container">
            <a
              class="training__form--creator-btn btn btn--fit"
              (click)="showExercises(day)"
              >Add Exercise</a
            >
            <a class="training__form--creator-btn btn btn--fit">Save</a>
          </div>
        </div>
      </div>
    </div>

    <app-popup
      [show]="isShowExercise"
      [popupWidth]="popupWidth"
      [popupHeight]="popupHeight"
      (close)="closeDetails()"
    >
      <div class="exercises__form--input">
        <label for="training">Search by exercise name</label>
        <input
          type="text"
          [(ngModel)]="searchText"
          (input)="filterExercises()"
        />
      </div>

      <div class="exercises__form">
        <div
          *ngFor="let exercise of filteredExercises"
          class="exercises__form--card"
        >
          <div class="exercises__form--card-heading">{{ exercise?.name }}</div>
          <div class="exercises__form--card-muscleType">
            {{ exercise?.muscleType }}
          </div>
          <button
            class="exercise__form--card-btn"
            (click)="addExercise(currentDay, exercise)"
            [disabled]="isExerciseSelected(currentDay, exercise)"
          >
            +
          </button>
        </div>
      </div>
    </app-popup>
  `,
  styleUrls: ['custom-training.component.scss'],
})
export class CustomTrainingComponent {
  isShowExercise = false;
  weekDays: number[] = [1, 2, 3, 4, 5, 6, 7];
  selectedWeekDays: number[] = [1];
  allExercises: IExercise[] = [];
  muscleTypes: any[] = [];
  selectedMuscleType: string | null = '';
  searchText: string = '';
  filteredExercises: IExercise[] = [];
  selectedExercises: { [key: number]: IExercise[] } = {};
  currentDay: number = 1;

  constructor(
    private sharedService: SharedService,
    private filterService: FilterService
  ) {}

  ngOnInit(): void {
    this.allExercises = this.sharedService.allExercises;
    this.filteredExercises = this.allExercises;
    this.muscleTypes = this.sharedService.muscleTypes;
  }

  filterExercises() {
    this.filteredExercises = this.filterService.filterExercises(
      this.allExercises,
      this.selectedMuscleType,
      this.searchText
    );
  }

  onSelectDay(event: any) {
    const selectedDays = +event.target.value;
    this.selectedWeekDays = [];
    for (let i = 1; i <= selectedDays; i++) {
      this.selectedWeekDays.push(i);
    }
    console.log(`Selected days: ${selectedDays}`);
  }

  addExercise(day: number, exercise: IExercise) {
    if (!this.selectedExercises[day]) {
      this.selectedExercises[day] = [];
    }
    this.selectedExercises[day].push(exercise);
    console.log(this.selectedExercises);
  }

  isExerciseSelected(day: number, exercise: IExercise): boolean {
    return (
      this.selectedExercises[day]?.some(
        (selectedExercise) => selectedExercise === exercise
      ) ?? false
    );
  }

  showExercises(day: number) {
    this.isShowExercise = true;
    this.currentDay = day; // Store the current day for adding exercises
  }

  closeDetails() {
    this.isShowExercise = false;
  }

  popupWidth: number = 100; // Podesite željenu širinu
  popupHeight: number = 70; // Podesite željenu visin
}
