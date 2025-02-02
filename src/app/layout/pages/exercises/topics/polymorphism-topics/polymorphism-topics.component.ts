import { Component } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-polymorphism-topics',
  templateUrl: './polymorphism-topics.component.html',
  styleUrl: './polymorphism-topics.component.scss'
})
export class PolymorphismTopicsComponent {
  currentExercise: number = 0;  // Start with exercise 1
        totalExercises: number = 10;   // Total number of exercises
        progress: number = 0;         // Initial progress value
      
        constructor(private router: Router, private title: Title) {
          this.title.setTitle('Polymorphism | Exercises');
          this.updateProgress();  
        }
      
        // Update the progress bar based on the current exercise
        updateProgress() {
          this.progress = Math.round((this.currentExercise / this.totalExercises) * 100);
        }
      
        // Method to navigate to the next exercise
        goToNextExercise() {
          if (this.currentExercise < this.totalExercises) {
            this.currentExercise++;
            this.updateProgress();
            this.router.navigate([`/exercises-topics/exercise${this.currentExercise}-polymorphism`]);
          }
        }
      
        // Handle navigation to previous exercise
        goToPreviousExercise() {
          if (this.currentExercise > 1) {
            this.currentExercise--;
            this.updateProgress();
            this.router.navigate([`/exercises-topics/exercise${this.currentExercise}--polymorphism`]);
          }
        }
      
        // Reset to the first exercise
        reset() {
          this.currentExercise = 1;
          this.updateProgress();
          this.router.navigate([`/polymorphism/exercise1-polymorphism`]);
        }
      
        // Listen for the next exercise event
        onNextExercise() {
          this.goToNextExercise();  // Move to the next exercise when event is triggered
        }
      
        closeLesson() {
          Swal.fire({
            title: 'Are you sure?',
            text: 'Do you really want to close the lesson? All your progress will be lost!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, close it!',
            cancelButtonText: 'No, keep it!'
          }).then((result) => {
            if (result.isConfirmed) {
              this.router.navigate(['/exercises/topics']);
            }
          });
        }
}
