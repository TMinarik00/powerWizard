import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  template: `
    <nav class="navbar">
      <div class="navbar-items">
        <div class="navbar-item" routerLink="/custom-training">
          Custom Trainings
        </div>
        <div class="navbar-item" routerLink="/my-trainings">My Trainings</div>
        <div class="navbar-item" routerLink="/wizard">Wizard</div>

        <div class="navbar-item" routerLink="/exercises">All Exercises</div>
        <div class="navbar-item" routerLink="/finished-trainings">
          Finished Trainings
        </div>
      </div>
    </nav>
  `,
  styleUrls: ['navbar.component.scss'],
})
export class NavbarComponent {}
