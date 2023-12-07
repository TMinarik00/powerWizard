import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExercisesComponent } from './Components/exercises/exercises.component';
import { WizardComponent } from './Components/wizard/wizard.component';
import { MyTrainingsComponent } from './Components/my-trainings/my-trainings.component';
import { CustomTrainingComponent } from './Components/custom-training/custom-training.component';
import { FinishedTrainingsComponent } from './Components/finished-trainings/finished-trainings.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { PopupComponent } from './Components/popup/popup.component';

@NgModule({
  declarations: [
    AppComponent,
    ExercisesComponent,
    WizardComponent,
    MyTrainingsComponent,
    CustomTrainingComponent,
    FinishedTrainingsComponent,
    NavbarComponent,
    PopupComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
