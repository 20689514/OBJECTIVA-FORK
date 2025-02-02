import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LessonProgressService } from '../../../../../services/lesson-progress.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-polymorphism-topics',
  templateUrl: './polymorphism-topics.component.html',
  styleUrl: './polymorphism-topics.component.scss'
})
export class PolymorphismTopicsComponent implements OnInit {
  constructor(private router: Router, private progressService: LessonProgressService, private title: Title) {
    this.title.setTitle('Learn Polymorphism | Objectiva');
  } 
  lessonProgress: { [key: string]: boolean } = {}; // copy

  showBackgroundContainer: boolean = false;

  ngOnInit(): void {
    
    // Subscribe to the router's URL to track the current path
    this.router.events.subscribe(() => {
      // Check the current URL
      const currentUrl = this.router.url;
      // If the URL is '/lessons/introduction-topics', do not show the background container
      this.showBackgroundContainer = currentUrl === '/lessons/topics/polymorphism';
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
    this.router.navigateByUrl('/lessons/topics/polymorphism/understanding-polymorphism-overview');
  }
  lesson2Overview() {
    this.router.navigateByUrl('/lessons/topics/polymorphism/compile-time-polymorphism-overview');
  }
  lesson3Overview() {
    this.router.navigateByUrl('/lessons/topics/polymorphism/runtime-polymorphism-overview');
  }
  lesson4Overview() {
    this.router.navigateByUrl('/lessons/topics/polymorphism/advanced-polymorphic-concepts-overview');
  }
  lesson5Overview() {
    this.router.navigateByUrl('/lessons/topics/polymorphism/polymorphism-with-interfaces-overview');
  }
  lesson6Overview() {
    this.router.navigateByUrl('/lessons/topics/polymorphism/polymorphism-implementation-in-java-overview');
  }

}
