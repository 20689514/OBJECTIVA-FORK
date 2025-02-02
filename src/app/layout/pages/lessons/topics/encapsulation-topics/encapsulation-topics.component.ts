import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LessonProgressService } from '../../../../../services/lesson-progress.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-encapsulation-topics',
  templateUrl: './encapsulation-topics.component.html',
  styleUrl: './encapsulation-topics.component.scss'
})
export class EncapsulationTopicsComponent implements OnInit {
  constructor(private router: Router, private progressService: LessonProgressService, private title: Title) {
    this.title.setTitle('Learn Encapsulation | Objectiva');
  } 
  lessonProgress: { [key: string]: boolean } = {}; // copy

  showBackgroundContainer: boolean = false;


  ngOnInit(): void {
    
    // Subscribe to the router's URL to track the current path
    this.router.events.subscribe(() => {
      // Check the current URL
      const currentUrl = this.router.url;
      // If the URL is '/lessons/introduction-topics', do not show the background container
      this.showBackgroundContainer = currentUrl === '/lessons/topics/encapsulation';
    });
    this.loadProgress();
  }
  loadProgress() {
    this.progressService.getProgress().subscribe({
      next: (response) => {
        this.lessonProgress = response.data;
      },
      error: (error) => console.error('Error loading progress:', error)
    });
  }

  lesson1Overview() {
    this.router.navigateByUrl('/lessons/topics/encapsulation/understanding-encapsulation-overview');
  }
  lesson2Overview() {
    this.router.navigateByUrl('/lessons/topics/encapsulation/access-modifiers-overview');
  }
  lesson3Overview() {
    this.router.navigateByUrl('/lessons/topics/encapsulation/getters-and-setters-overview');
  }
  lesson4Overview() {
    this.router.navigateByUrl('/lessons/topics/encapsulation/java-bean-standard-overview');
  }
  lesson5Overview() {
    this.router.navigateByUrl('/lessons/topics/encapsulation/data-validation-overview');
  }
  lesson6Overview() {
    this.router.navigateByUrl('/lessons/topics/encapsulation/encapsulation-implementation-in-java-overview');
  }
}