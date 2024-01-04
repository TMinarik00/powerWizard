import { Component } from '@angular/core';
import { IExercise } from 'src/Interface/Exercise';

@Component({
  selector: 'app-finished-trainings',
  template: `
    <div class="row">
      <div class="card" *ngFor="let training of trainings">
        <div class="card__side card__side--front">
          <div
            class="card__picture"
            [style.backgroundImage]="
              'linear-gradient(to right botto, $primary-color, $tertiary-color ), url(../../../assets/images/' +
              training.picture +
              '.png);'
            "
          >
            &nbsp;
          </div>
          <h4 class="card__heading">
            <span class="card__heading-span card__heading-span--1">{{
              training.trainingType
            }}</span>
          </h4>
          <div class="card__details">
            <ul>
              <li>{{ training.daysAmount }}</li>
              <li>{{ training.exercisesAmount }}</li>
              <li>{{ training.duration }}</li>
              <li>{{ training.moto }}</li>
              <li>Difficulty: {{ training.difficulty }}</li>
            </ul>
          </div>
        </div>
        <div class="card__side card__side--back card__side--back-1">
          <div class="card__cta">
            <div class="card__quote">Are you ready?</div>

            <a class="btn btn--white">Start now!</a>
          </div>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['finished-trainings.component.scss'],
})
export class FinishedTrainingsComponent {
  exercises: IExercise[] = [];
  trainings: any[] = [
    {
      trainingType: 'Stay fit training',
      daysAmount: '3 days a week',
      exercisesAmount: 'Up to 14 exercises a training',
      duration: '1 Hour',
      moto: 'Gain muscles fast',
      picture: 'fit',
      difficulty: 'easy',
      exercises: [],
    },

    {
      trainingType: 'Bodybuilder training',
      daysAmount: '6 days a week',
      exercisesAmount: 'Up to 10 exercises a training',
      duration: '1 Hour - 1.5 Hours',
      moto: 'Gain muscles fast',
      difficulty: 'medium',
      picture: 'bbuild',
      exercises: [],
    },
    {
      trainingType: 'Powerlifter training',
      daysAmount: '4-5 days a week',
      exercisesAmount: 'Up to 5 exercises a training',
      duration: '2 Hours',
      moto: 'Become stronger',
      picture: 'strong',
      difficulty: 'hard',
      exercises: [],
    },
  ];
}
