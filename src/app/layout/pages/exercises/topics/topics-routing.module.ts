import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AbstractionTopicsModule } from './abstraction-topics/abstraction-topics.module';
import { EncapsulationTopicsModule } from './encapsulation-topics/encapsulation-topics.module';
import { InheritanceTopicsModule } from './inheritance-topics/inheritance-topics.module';
import { PolymorphismTopicsModule } from './polymorphism-topics/polymorphism-topics.module';

const routes: Routes = [
  {path: 'abstraction-topics', loadChildren: () => AbstractionTopicsModule},
  {path: 'encapsulation-topics', loadChildren: () => EncapsulationTopicsModule},
  {path: 'inheritance-topics', loadChildren: () => InheritanceTopicsModule},
  {path: 'polymorphism-topics', loadChildren: () => PolymorphismTopicsModule}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TopicsRoutingModule { }
