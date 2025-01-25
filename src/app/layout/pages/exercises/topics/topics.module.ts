import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TopicsRoutingModule } from './topics-routing.module';
import { TopicsComponent } from './topics.component';
import { InheritanceExercisesModule } from './inheritance-exercises/inheritance-exercises.module';


@NgModule({
  declarations: [
    TopicsComponent,
  ],
  imports: [
    CommonModule,
    TopicsRoutingModule,
    InheritanceExercisesModule

  ]
})
export class TopicsModule { }
