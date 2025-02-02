import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-topics',
  templateUrl: './topics.component.html',
  styleUrl: './topics.component.scss'
})
export class TopicsComponent {

constructor(private router: Router, private title: Title) {
    this.title.setTitle('Lessons | Objectiva');
}

showBackgroundContainer: boolean = false;

  ngOnInit(): void {
    // Subscribe to the router's URL to track the current path
    this.router.events.subscribe(() => {
      // Check the current URL
      const currentUrl = this.router.url;
      // If the URL is '/lessons/introduction-topics', do not show the background container
      this.showBackgroundContainer = currentUrl === '/lessons/topics';
    });
  }


  introduction(){
    this.router.navigateByUrl('/lessons/topics/introduction');
  }
  abstraction(){
    this.router.navigateByUrl('/lessons/topics/abstraction');
  } 
  encapsulation(){
    this.router.navigateByUrl('/lessons/topics/encapsulation');
  }
  inheritance(){
    this.router.navigateByUrl('/lessons/topics/inheritance');
  }
  polymorphism(){
    this.router.navigateByUrl('/lessons/topics/polymorphism');
  }
}