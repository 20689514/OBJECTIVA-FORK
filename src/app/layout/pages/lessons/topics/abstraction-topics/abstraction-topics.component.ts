import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LessonProgressService } from '../../../../../services/lesson-progress.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-abstraction-topics',
  templateUrl: './abstraction-topics.component.html',
  styleUrl: './abstraction-topics.component.scss'
})
export class AbstractionTopicsComponent implements OnInit {

 constructor(private router: Router, private progressService: LessonProgressService, private title: Title) {
    this.title.setTitle('Learn Abstraction | Objectiva');
 } 
  lessonProgress: { [key: string]: boolean } = {}; // copy

  showBackgroundContainer: boolean = false;

  ngOnInit(): void {
    
    // Subscribe to the router's URL to track the current path
    this.router.events.subscribe(() => {
      // Check the current URL
      const currentUrl = this.router.url;
      // If the URL is '/lessons/introduction-topics', do not show the background container
      this.showBackgroundContainer = currentUrl === '/lessons/topics/abstraction';
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
    this.router.navigateByUrl('/lessons/topics/abstraction/understanding-abstraction-overview');
  }
  lesson2Overview() {
    this.router.navigateByUrl('/lessons/topics/abstraction/abstract-classes-overview');
  }
  lesson3Overview() {
    this.router.navigateByUrl('/lessons/topics/abstraction/interfaces-overview');
  }
  lesson4Overview() {
    this.router.navigateByUrl('/lessons/topics/abstraction/abstraction-implementation-in-java-overview');
  }
  
}
