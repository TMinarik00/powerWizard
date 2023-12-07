import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WizardComponent } from './Components/wizard/wizard.component';
import { ExercisesComponent } from './Components/exercises/exercises.component';
import { FinishedTrainingsComponent } from './Components/finished-trainings/finished-trainings.component';
import { CustomTrainingComponent } from './Components/custom-training/custom-training.component';
import { MyTrainingsComponent } from './Components/my-trainings/my-trainings.component';

const routes: Routes = [
  { path: '', redirectTo: '/wizard', pathMatch: 'full' },
  { path: 'wizard', component: WizardComponent },
  { path: 'exercises', component: ExercisesComponent },
  { path: 'my-trainings', component: MyTrainingsComponent },
  { path: 'custom-training', component: CustomTrainingComponent },
  { path: 'finished-trainings', component: FinishedTrainingsComponent },
  { path: '**', redirectTo: '/wizard' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
