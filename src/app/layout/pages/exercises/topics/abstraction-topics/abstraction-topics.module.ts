import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AbstractionTopicsRoutingModule } from './abstraction-topics-routing.module';
import { Exercise1AbstractionComponent } from './abstraction-exercises/exercise1-abstraction/exercise1-abstraction.component';
import { Exercise2AbstractionComponent } from './abstraction-exercises/exercise2-abstraction/exercise2-abstraction.component';
import { Exercise3AbstractionComponent } from './abstraction-exercises/exercise3-abstraction/exercise3-abstraction.component';
import { AbstractionTopicsComponent } from './abstraction-topics.component';
import { Exercise4AbstractionComponent } from './abstraction-exercises/exercise4-abstraction/exercise4-abstraction.component';
import { Exercise5AbstractionComponent } from './abstraction-exercises/exercise5-abstraction/exercise5-abstraction.component';
import { Exercise6AbstractionComponent } from './abstraction-exercises/exercise6-abstraction/exercise6-abstraction.component';
import { Exercise7AbstractionComponent } from './abstraction-exercises/exercise7-abstraction/exercise7-abstraction.component';
import { Exercise8AbstractionComponent } from './abstraction-exercises/exercise8-abstraction/exercise8-abstraction.component';
import { Exercise9AbstractionComponent } from './abstraction-exercises/exercise9-abstraction/exercise9-abstraction.component';
import { Exercise10AbstractionComponent } from './abstraction-exercises/exercise10-abstraction/exercise10-abstraction.component';


@NgModule({
  declarations: [
  
        Exercise1AbstractionComponent,
       Exercise2AbstractionComponent,
       Exercise3AbstractionComponent,
       AbstractionTopicsComponent,
       Exercise4AbstractionComponent,
       Exercise5AbstractionComponent,
       Exercise6AbstractionComponent,
       Exercise7AbstractionComponent,
       Exercise8AbstractionComponent,
       Exercise9AbstractionComponent,
       Exercise10AbstractionComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AbstractionTopicsRoutingModule
  ]
})
export class AbstractionTopicsModule { }
