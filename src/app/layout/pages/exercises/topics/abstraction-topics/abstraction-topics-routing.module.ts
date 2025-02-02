import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AbstractionTopicsComponent } from './abstraction-topics.component';
import { Exercise1AbstractionComponent } from './abstraction-exercises/exercise1-abstraction/exercise1-abstraction.component';
import { Exercise2AbstractionComponent } from './abstraction-exercises/exercise2-abstraction/exercise2-abstraction.component';
import { Exercise3AbstractionComponent } from './abstraction-exercises/exercise3-abstraction/exercise3-abstraction.component';
import { Exercise4AbstractionComponent } from './abstraction-exercises/exercise4-abstraction/exercise4-abstraction.component';
import { Exercise5AbstractionComponent } from './abstraction-exercises/exercise5-abstraction/exercise5-abstraction.component';
import { Exercise6AbstractionComponent } from './abstraction-exercises/exercise6-abstraction/exercise6-abstraction.component';
import { Exercise7AbstractionComponent } from './abstraction-exercises/exercise7-abstraction/exercise7-abstraction.component';
import { Exercise8AbstractionComponent } from './abstraction-exercises/exercise8-abstraction/exercise8-abstraction.component';
import { Exercise9AbstractionComponent } from './abstraction-exercises/exercise9-abstraction/exercise9-abstraction.component';
import { Exercise10AbstractionComponent } from './abstraction-exercises/exercise10-abstraction/exercise10-abstraction.component';


const routes: Routes = [
  {path: '', component: AbstractionTopicsComponent, children: [
    {path: 'exercise1-abstraction', component: Exercise1AbstractionComponent},
    {path: 'exercise2-abstraction', component: Exercise2AbstractionComponent},
    {path: 'exercise3-abstraction', component: Exercise3AbstractionComponent},
    {path: 'exercise4-abstraction', component: Exercise4AbstractionComponent},
    {path: 'exercise5-abstraction', component: Exercise5AbstractionComponent},
    {path: 'exercise6-abstraction', component: Exercise6AbstractionComponent},
    {path: 'exercise7-abstraction', component: Exercise7AbstractionComponent},
    {path: 'exercise8-abstraction', component: Exercise8AbstractionComponent},
    {path: 'exercise9-abstraction', component: Exercise9AbstractionComponent},
    {path: 'exercise10-abstraction', component: Exercise10AbstractionComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AbstractionTopicsRoutingModule { }
