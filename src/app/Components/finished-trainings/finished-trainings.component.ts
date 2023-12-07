import { Component } from '@angular/core';

@Component({
  selector: 'app-finished-trainings',
  template: `
    <div class="exercise__list">
      <div class="exercise__list-item">
        <div class="card card--1">
          <div class="card__face card__face--front">
            <h1>Card 1 Front</h1>
          </div>
          <div class="card__face card__face--back">
            <p>Card 1 Back Content</p>
          </div>
        </div>
      </div>

      <div class="exercise__list-item">
        <div class="card card--2">
          <div class="card__face card__face--front">
            <h1>Card 2 Front</h1>
          </div>
          <div class="card__face card__face--back">
            <p>Card 2 Back Content</p>
          </div>
        </div>
      </div>

      <div class="exercise__list-item">
        <div class="card card--3">
          <div class="card__face card__face--front">
            <h1>Card 3 Front</h1>
          </div>
          <div class="card__face card__face--back">
            <p>Card 3 Back Content</p>
          </div>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['finished-trainings.component.scss'],
})
export class FinishedTrainingsComponent {}
