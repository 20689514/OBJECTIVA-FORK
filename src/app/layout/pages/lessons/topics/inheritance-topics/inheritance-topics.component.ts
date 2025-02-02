import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LessonProgressService } from '../../../../../services/lesson-progress.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-inheritance-topics',
  templateUrl: './inheritance-topics.component.html',
  styleUrl: './inheritance-topics.component.scss'
})
export class InheritanceTopicsComponent implements OnInit {
  constructor(private router: Router, private progressService: LessonProgressService, private title: Title) {
    this.title.setTitle('Learn Inheritance | Objectiva');
  } 
  lessonProgress: { [key: string]: boolean } = {}; // copy

  showBackgroundContainer: boolean = false;

  ngOnInit(): void {
    
    // Subscribe to the router's URL to track the current path
    this.router.events.subscribe(() => {
      // Check the current URL
      const currentUrl = this.router.url;
      // If the URL is '/lessons/introduction-topics', do not show the background container
      this.showBackgroundContainer = currentUrl === '/lessons/topics/inheritance';
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
    this.router.navigateByUrl('/lessons/topics/inheritance/understanding-inheritance-overview');
  }
  lesson2Overview() {
    this.router.navigateByUrl('/lessons/topics/inheritance/single-inheritance-overview');
  }
  lesson3Overview() {
    this.router.navigateByUrl('/lessons/topics/inheritance/types-of-inheritance-in-java-overview');
  }
  lesson4Overview() {
    this.router.navigateByUrl('/lessons/topics/inheritance/methods-overriding-overview');
  }
  lesson5Overview() {
    this.router.navigateByUrl('/lessons/topics/inheritance/advanced-inheritance-concepts-overview');
  }
  lesson6Overview() {
    this.router.navigateByUrl('/lessons/topics/inheritance/inheritance-implementation-in-java-overview');
  }
}