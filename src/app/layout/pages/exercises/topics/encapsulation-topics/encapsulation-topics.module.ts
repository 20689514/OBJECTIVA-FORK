import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EncapsulationTopicsRoutingModule } from './encapsulation-topics-routing.module';
import { EncapsulationTopicsComponent } from './encapsulation-topics.component';
import { Exercise1EncapsulationComponent } from './encapsulation-exercises/exercise1-encapsulation/exercise1-encapsulation.component';
import { Exercise2EncapsulationComponent } from './encapsulation-exercises/exercise2-encapsulation/exercise2-encapsulation.component';
import { Exercise3EncapsulationComponent } from './encapsulation-exercises/exercise3-encapsulation/exercise3-encapsulation.component';
import { Exercise4EncapsulationComponent } from './encapsulation-exercises/exercise4-encapsulation/exercise4-encapsulation.component';
import { Exercise5EncapsulationComponent } from './encapsulation-exercises/exercise5-encapsulation/exercise5-encapsulation.component';
import { Exercise6EncapsulationComponent } from './encapsulation-exercises/exercise6-encapsulation/exercise6-encapsulation.component';
import { Exercise7EncapsulationComponent } from './encapsulation-exercises/exercise7-encapsulation/exercise7-encapsulation.component';
import { Exercise8EncapsulationComponent } from './encapsulation-exercises/exercise8-encapsulation/exercise8-encapsulation.component';
import { Exercise9EncapsulationComponent } from './encapsulation-exercises/exercise9-encapsulation/exercise9-encapsulation.component';
import { Exercise10EncapsulationComponent } from './encapsulation-exercises/exercise10-encapsulation/exercise10-encapsulation.component';


@NgModule({
  declarations: [
    EncapsulationTopicsComponent,
    Exercise1EncapsulationComponent,
    Exercise2EncapsulationComponent,
    Exercise3EncapsulationComponent,
    Exercise4EncapsulationComponent,
    Exercise5EncapsulationComponent,
    Exercise6EncapsulationComponent,
    Exercise7EncapsulationComponent,
    Exercise8EncapsulationComponent,
    Exercise9EncapsulationComponent,
    Exercise10EncapsulationComponent
  ],
  imports: [
    CommonModule,
    EncapsulationTopicsRoutingModule,
    FormsModule
  ]
})
export class EncapsulationTopicsModule { }
