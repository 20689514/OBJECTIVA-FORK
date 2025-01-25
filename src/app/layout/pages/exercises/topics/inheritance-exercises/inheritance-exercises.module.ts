import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InheritanceExercisesRoutingModule } from './inheritance-exercises-routing.module';
import { InheritanceExercisesComponent } from './inheritance-exercises.component';
import { Inheritance1ExerciseComponent } from './inheritance1-exercise/inheritance1-exercise.component';
import { DragDropModule } from '@angular/cdk/drag-drop'; // Import DragDropModule here

@NgModule({
  declarations: [
    InheritanceExercisesComponent,
    Inheritance1ExerciseComponent
  ],
  imports: [
    CommonModule,
    InheritanceExercisesRoutingModule,
    DragDropModule // Add DragDropModule to the imports
  ]
})
export class InheritanceExercisesModule { }
