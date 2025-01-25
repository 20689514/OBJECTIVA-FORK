import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inheritance-exercises',
  templateUrl: './inheritance-exercises.component.html',
  styleUrl: './inheritance-exercises.component.scss'
})
export class InheritanceExercisesComponent {
  
    constructor(private router: Router) { }
  
    showContainer: boolean = false;
  
    ngOnInit(): void {
      
      // Subscribe to the router's URL to track the current path
      this.router.events.subscribe(() => {
        // Check the current URL
        const currentUrl = this.router.url;
        // If the URL is '/lessons/introduction-topics', do not show the background container
        this.showContainer = currentUrl === '/exercises/topics/inheritance-exercise';
      });
    }
}
