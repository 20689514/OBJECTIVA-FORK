import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms'; // Import ReactiveFormsModule

import { LayoutRoutingModule } from './layout-routing.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LessonsComponent } from './pages/lessons/lessons.component';
import { LayoutComponent } from './layout.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { FooterComponent } from './components/footer/footer.component';
import { AccountSettingsComponent } from './components/account-settings/account-settings.component';



@NgModule({
  declarations: [
    NavbarComponent,
    LessonsComponent,
    LayoutComponent,
    HomeComponent,
    AboutComponent,
    FooterComponent,
    AccountSettingsComponent,
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    ReactiveFormsModule
  ]
})
export class LayoutModule { }
