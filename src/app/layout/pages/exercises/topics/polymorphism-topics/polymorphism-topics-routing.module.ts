import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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

const routes: Routes = [
  {path: '', component: PolymorphismTopicsComponent, children: [
    {path: 'exercise1-polymorphism', component: Exercise1PolymorphismComponent},
    {path: 'exercise2-polymorphism', component: Exercise2PolymorphismComponent},
    {path: 'exercise3-polymorphism', component: Exercise3PolymorphismComponent},
    {path: 'exercise4-polymorphism', component: Exercise4PolymorphismComponent},
    {path: 'exercise5-polymorphism', component: Exercise5PolymorphismComponent},
    {path: 'exercise6-polymorphism', component: Exercise6PolymorphismComponent},
    {path: 'exercise7-polymorphism', component: Exercise7PolymorphismComponent},
    {path: 'exercise8-polymorphism', component: Exercise8PolymorphismComponent},
    {path: 'exercise9-polymorphism', component: Exercise9PolymorphismComponent},
    {path: 'exercise10-polymorphism', component: Exercise10PolymorphismComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PolymorphismTopicsRoutingModule { }
