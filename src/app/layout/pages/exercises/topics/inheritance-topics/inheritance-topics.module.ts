import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InheritanceTopicsRoutingModule } from './inheritance-topics-routing.module';
import { Exercise1InheritanceComponent } from './inheritance-exercises/exercise1-inheritance/exercise1-inheritance.component';
import { Exercise2InheritanceComponent } from './inheritance-exercises/exercise2-inheritance/exercise2-inheritance.component';
import { Exercise3InheritanceComponent } from './inheritance-exercises/exercise3-inheritance/exercise3-inheritance.component';
import { InheritanceTopicsComponent } from './inheritance-topics.component';
import { Exercise4InheritanceComponent } from './inheritance-exercises/exercise4-inheritance/exercise4-inheritance.component';
import { Exercise5InheritanceComponent } from './inheritance-exercises/exercise5-inheritance/exercise5-inheritance.component';
import { Exercise6InheritanceComponent } from './inheritance-exercises/exercise6-inheritance/exercise6-inheritance.component';
import { Exercise7InheritanceComponent } from './inheritance-exercises/exercise7-inheritance/exercise7-inheritance.component';
import { Exercise8InheritanceComponent } from './inheritance-exercises/exercise8-inheritance/exercise8-inheritance.component';
import { Exercise9InheritanceComponent } from './inheritance-exercises/exercise9-inheritance/exercise9-inheritance.component';
import { Exercise10InheritanceComponent } from './inheritance-exercises/exercise10-inheritance/exercise10-inheritance.component';


@NgModule({
  declarations: [
    Exercise1InheritanceComponent,
    Exercise2InheritanceComponent,
    Exercise3InheritanceComponent,
    InheritanceTopicsComponent,
    Exercise4InheritanceComponent,
    Exercise5InheritanceComponent,
    Exercise6InheritanceComponent,
    Exercise7InheritanceComponent,
    Exercise8InheritanceComponent,
    Exercise9InheritanceComponent,
    Exercise10InheritanceComponent
  ],
  imports: [
    CommonModule,
    InheritanceTopicsRoutingModule,
    FormsModule
  ]
})
export class InheritanceTopicsModule { }
