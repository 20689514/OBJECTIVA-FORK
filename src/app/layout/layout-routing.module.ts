import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LayoutComponent } from './layout.component';
import { QuizComponent } from './pages/quiz/quiz.component'; 
import { AboutComponent } from './pages/about/about.component';
import { AccountSettingsComponent } from './components/account-settings/account-settings.component';


const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,  
    children: [
      { path: 'home', component: HomeComponent, loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) },
      { path: 'lessons', loadChildren: () => import('./pages/lessons/lessons.module').then(m => m.LessonsModule) },
      {path: 'quiz', component:QuizComponent, loadChildren: () => import('./pages/quiz/quiz.module').then(m => m.QuizModule) },
      {path: 'exercises', loadChildren: () => import('./pages/exercises/exercises.module').then(m => m.ExercisesModule) },
      {path: 'about', component: AboutComponent},
      {path: 'account-settings', component: AccountSettingsComponent}
    ]
  },
  // QUIZ CONTENT - WITHOUT HEADER NAVIGATION
  {path: 'quiz-topics', loadChildren: () => import('./pages/quiz/topics/topics.module').then(m => m.TopicsModule)},
  {path: 'exercises-topics', loadChildren: () => import('./pages/exercises/topics/topics.module').then(m => m.TopicsModule)},
  { path: '**', redirectTo: 'home' }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
