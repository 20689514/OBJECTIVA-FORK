import { Component } from '@angular/core';
import { LessonProgressService } from '../../../../../../../services/lesson-progress.service';

@Component({
  selector: 'app-introduction8-content',
  templateUrl: './introduction8-content.component.html',
  styleUrl: './introduction8-content.component.scss'
})
export class Introduction8ContentComponent {
  constructor(private progressService: LessonProgressService) {}
// Track the visible sections
visibleSections: number = 1;

// Method to show the next section
showNextSection(sectionId: string) {
  this.visibleSections++;
  setTimeout(() => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  }, 100); // Delay to ensure DOM updates

  if (this.visibleSections === 8) { // Change the number of depending on the last number of the button
    this.progressService.updateProgress('intro-lesson-8', true).subscribe({
      next: (response) => console.log('Progress updated successfully'),
      error: (error) => console.error('Error updating progress:', error)
    });
  }
}
}