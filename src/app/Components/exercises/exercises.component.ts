import { Component } from '@angular/core';
import { IExercise } from 'src/Interface/Exercise';
import { FilterService } from 'src/app/Services/filter.service';
import { SharedService } from 'src/app/Services/shared.service';

@Component({
  selector: 'app-exercises',
  template: `
    <div class="filter-container">
      <input
        type="text"
        [(ngModel)]="searchText"
        (input)="filterExercises()"
        placeholder="Search by exercise name"
      />
      <div class="filter-buttons">
        <button
          *ngFor="let muscleType of muscleTypes"
          (click)="filterByMuscleType(muscleType)"
        >
          {{ muscleType }}
        </button>
      </div>
    </div>

    <div class="exercise__list">
      <div class="exercise__list-item card" *ngFor="let exercise of exercises">
        <div class="card__face card__face--front">
          <h1>{{ exercise.name }}</h1>
          <h2>{{ exercise.muscleType }}</h2>
          &nbsp;
        </div>
        <div class="card__face card__face--back">
          <p class="description">
            If you have any questions about this exercise
          </p>
          <button (click)="showDetails(exercise)" class="exercise__list-button">
            Show Details
          </button>
        </div>
      </div>
    </div>

    <app-popup
      [show]="isDetailsShown"
      (close)="closeDetails()"
      class="popup__container"
    >
      <h1 class="popup__container-item">{{ selectedExercise?.name }}</h1>
      <h2 class="popup__container-item">{{ selectedExercise?.muscleType }}</h2>
      <p class="popup__container-item">
        <span>Description:</span>
        <br />
        {{ selectedExercise?.description }}
      </p>
      <p class="popup__container-item">
        <span>Tutorial:</span>
        <br />
        {{ selectedExercise?.tutorial }}
      </p>
    </app-popup>
  `,
  styleUrls: ['exercises.component.scss'],
})
export class ExercisesComponent {
  isDetailsShown = false;
  selectedExercise: IExercise | null = null;
  selectedMuscleType: string | null = '';
  searchText: string = '';
  muscleTypes: string[] = [];
  allExercises: IExercise[] = [];
  exercises: IExercise[] = [];

  constructor(
    private sharedService: SharedService,
    private filterService: FilterService
  ) {}

  ngOnInit() {
    this.allExercises = this.sharedService.allExercises;
    this.exercises = this.allExercises;
    this.muscleTypes = this.sharedService.muscleTypes;
  }

  filterExercises() {
    this.exercises = this.filterService.filterExercises(
      this.allExercises,
      this.selectedMuscleType,
      this.searchText
    );
  }

  filterByMuscleType(muscleType: string) {
    // If the clicked muscle type is already selected, clear the filter
    if (this.selectedMuscleType === muscleType) {
      this.selectedMuscleType = '';
    } else {
      this.selectedMuscleType = muscleType;
    }

    // After updating the selectedMuscleType, call filterExercises to apply the filter
    this.filterExercises();
  }
  /////////////
  showDetails(exercise: IExercise) {
    this.selectedExercise = exercise;
    this.isDetailsShown = true;
  }

  closeDetails() {
    this.isDetailsShown = false;
  }
}
