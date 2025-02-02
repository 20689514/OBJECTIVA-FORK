import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PolymorphismTopicsRoutingModule } from './polymorphism-topics-routing.module';
import { PolymorphismTopicsComponent } from './polymorphism-topics.component';
import { Exercise1PolymorphismComponent } from './polymorphism-exercises/exercise1-polymorphism/exercise1-polymorphism.component';
import { Exercise2PolymorphismComponent } from './polymorphism-exercises/exercise2-polymorphism/exercise2-polymorphism.component';
import { Exercise3PolymorphismComponent } from './polymorphism-exercises/exercise3-polymorphism/exercise3-polymorphism.component';
import { Exercise4PolymorphismComponent } from './polymorphism-exercises/exercise4-polymorphism/exercise4-polymorphism.component';
import { Exercise5PolymorphismComponent } from './polymorphism-exercises/exercise5-polymorphism/exercise5-polymorphism.component';
import { Exercise6PolymorphismComponent } from './polymorphism-exercises/exercise6-polymorphism/exercise6-polymorphism.component';
import { Exercise7PolymorphismComponent } from './polymorphism-exercises/exercise7-polymorphism/exercise7-polymorphism.component';
import { Exercise8PolymorphismComponent } from './polymorphism-exercises/exercise8-polymorphism/exercise8-polymorphism.component';
import { Exercise9PolymorphismComponent } from './polymorphism-exercises/exercise9-polymorphism/exercise9-polymorphism.component';
import { Exercise10PolymorphismComponent } from './polymorphism-exercises/exercise10-polymorphism/exercise10-polymorphism.component';


@NgModule({
  declarations: [
  
    PolymorphismTopicsComponent,
       Exercise1PolymorphismComponent,
       Exercise2PolymorphismComponent,
       Exercise3PolymorphismComponent,
      Exercise4PolymorphismComponent,
      Exercise5PolymorphismComponent,
      Exercise6PolymorphismComponent,
      Exercise7PolymorphismComponent,
      Exercise8PolymorphismComponent,
      Exercise9PolymorphismComponent,
      Exercise10PolymorphismComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    PolymorphismTopicsRoutingModule
  ]
})
export class PolymorphismTopicsModule { }
