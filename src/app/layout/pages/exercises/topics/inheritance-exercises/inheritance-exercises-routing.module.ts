import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InheritanceExercisesComponent } from './inheritance-exercises.component';
import { Inheritance1ExerciseComponent } from './inheritance1-exercise/inheritance1-exercise.component';

const routes: Routes = [
  {
    path: 'inheritance-exercise',
    component: InheritanceExercisesComponent,
    children: [
      { path: 'inheritance1-exercise', component: Inheritance1ExerciseComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)], // Only the RouterModule is imported here
  exports: [RouterModule]
})
export class InheritanceExercisesRoutingModule {}
