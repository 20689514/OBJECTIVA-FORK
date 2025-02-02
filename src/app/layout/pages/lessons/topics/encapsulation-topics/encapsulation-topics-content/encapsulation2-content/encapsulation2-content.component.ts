import { Component } from '@angular/core';
import { LessonProgressService } from '../../../../../../../services/lesson-progress.service';
import Swal from 'sweetalert2';
import confetti from 'canvas-confetti';

@Component({
  selector: 'app-encapsulation2-content',
  templateUrl: './encapsulation2-content.component.html',
  styleUrl: './encapsulation2-content.component.scss'
})
export class Encapsulation2ContentComponent {
  constructor(private progressService: LessonProgressService) {}

  // Track the visible sections
  visibleSections: number = 1;
  
  // Method to show the next section
  showNextSection(sectionId: string) {
    this.visibleSections++;
    setTimeout(() => {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    }, 100); // Delay to ensure DOM updates
  
    if (this.visibleSections === 7) { // Change the number of depending on the last number of the button
      this.progressService.updateProgress('encapsulation-lesson-2', true).subscribe({
        next: (response) => console.log('Progress updated successfully'),
        error: (error) => console.error('Error updating progress:', error)
      });
    }
  }

  // Method to show the completion popup
  showCompletionPopup() {
    Swal.fire({
      title: '☕ Congratulations! ☕',
      text: 'You have successfully completed this lesson!',
      icon: 'success',
      confirmButtonText: 'Back to Lessons',
      customClass: {
        popup: 'swal-celebration'
      },
      didOpen: () => {
        this.triggerConfetti();
      }
    }).then(() => {
      window.location.href = '/lessons/topics/encapsulation'; // Change to the correct route
    });
  }

  triggerConfetti() {
    const myConfetti = confetti.create(undefined, { resize: true });

    myConfetti({
      particleCount: 100,
      spread: 100,
      startVelocity: 30,
      gravity: 0.5,
      decay: 0.9,
      shapes: ['circle'], // Default shape
      scalar: 1.2,
      ticks: 50,
      origin: { y: 0.6 },
      angle: 90,
      drift: 0,
      colors: ['#8B4513', '#D2691E', '#A0522D'], // Coffee colors
      image: {
        src: 'assets/coffee-bean.png', // Replace with your coffee bean image path
        width: 100, // Adjust size
        height: 100
      }
    });
  }
  
}
