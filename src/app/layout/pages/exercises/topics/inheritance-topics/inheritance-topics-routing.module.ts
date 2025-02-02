import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InheritanceTopicsComponent } from './inheritance-topics.component';
import { Exercise1InheritanceComponent } from './inheritance-exercises/exercise1-inheritance/exercise1-inheritance.component';
import { Exercise2InheritanceComponent } from './inheritance-exercises/exercise2-inheritance/exercise2-inheritance.component';
import { Exercise3InheritanceComponent } from './inheritance-exercises/exercise3-inheritance/exercise3-inheritance.component';
import { Exercise4InheritanceComponent } from './inheritance-exercises/exercise4-inheritance/exercise4-inheritance.component';
import { Exercise5InheritanceComponent } from './inheritance-exercises/exercise5-inheritance/exercise5-inheritance.component';
import { Exercise6InheritanceComponent } from './inheritance-exercises/exercise6-inheritance/exercise6-inheritance.component';
import { Exercise7InheritanceComponent } from './inheritance-exercises/exercise7-inheritance/exercise7-inheritance.component';
import { Exercise8InheritanceComponent } from './inheritance-exercises/exercise8-inheritance/exercise8-inheritance.component';
import { Exercise9InheritanceComponent } from './inheritance-exercises/exercise9-inheritance/exercise9-inheritance.component';
import { Exercise10InheritanceComponent } from './inheritance-exercises/exercise10-inheritance/exercise10-inheritance.component';

const routes: Routes = [
  {path: '', component: InheritanceTopicsComponent, children: [
    {path: 'exercise1-inheritance', component: Exercise1InheritanceComponent},
    {path: 'exercise2-inheritance', component: Exercise2InheritanceComponent},
    {path: 'exercise3-inheritance', component: Exercise3InheritanceComponent},
    {path: 'exercise4-inheritance', component: Exercise4InheritanceComponent},
    {path: 'exercise5-inheritance', component: Exercise5InheritanceComponent},
    {path: 'exercise6-inheritance', component: Exercise6InheritanceComponent},
    {path: 'exercise7-inheritance', component: Exercise7InheritanceComponent},
    {path: 'exercise8-inheritance', component: Exercise8InheritanceComponent},
    {path: 'exercise9-inheritance', component: Exercise9InheritanceComponent},
    {path: 'exercise10-inheritance', component: Exercise10InheritanceComponent}
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InheritanceTopicsRoutingModule { }
