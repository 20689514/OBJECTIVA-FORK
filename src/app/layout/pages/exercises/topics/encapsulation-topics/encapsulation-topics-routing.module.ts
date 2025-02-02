import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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

const routes: Routes = [
  {path: '', component: EncapsulationTopicsComponent, children: [
    {path: 'exercise1-encapsulation', component: Exercise1EncapsulationComponent},
    {path: 'exercise2-encapsulation', component: Exercise2EncapsulationComponent},
    {path: 'exercise3-encapsulation', component: Exercise3EncapsulationComponent},
    {path: 'exercise4-encapsulation', component: Exercise4EncapsulationComponent},
    {path: 'exercise5-encapsulation', component: Exercise5EncapsulationComponent},
    {path: 'exercise6-encapsulation', component: Exercise6EncapsulationComponent},
    {path: 'exercise7-encapsulation', component: Exercise7EncapsulationComponent},
    {path: 'exercise8-encapsulation', component: Exercise8EncapsulationComponent},
    {path: 'exercise9-encapsulation', component: Exercise9EncapsulationComponent},
    {path: 'exercise10-encapsulation', component: Exercise10EncapsulationComponent}
    
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EncapsulationTopicsRoutingModule { }
