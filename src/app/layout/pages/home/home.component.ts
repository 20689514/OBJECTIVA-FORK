import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, RouterModule } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  constructor(private titleService: Title, private router: Router) {
    this.titleService.setTitle('Objectiva | Learn OOP for Free');
  }
  selectedDifficulty: string | null = null;

  ngOnInit(): void {
    this.selectedDifficulty = 'abstraction';
  }

  toQuiz() { 
    this.router.navigate(['/quiz']);
  }
  toExercise(){
    this.router.navigate(['/exercises']);
  }

  selectDifficulty(difficulty: string) {
    this.selectedDifficulty = difficulty;
  }
}