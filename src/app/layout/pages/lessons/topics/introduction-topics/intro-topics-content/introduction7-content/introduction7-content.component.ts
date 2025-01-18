import { Component } from '@angular/core';

@Component({
  selector: 'app-introduction7-content',
  templateUrl: './introduction7-content.component.html',
  styleUrl: './introduction7-content.component.scss'
})
export class Introduction7ContentComponent {

// Track the visible sections
visibleSections: number = 1;

// Method to show the next section
showNextSection(sectionId: string) {
  this.visibleSections++;
  setTimeout(() => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  }, 100); // Delay to ensure DOM updates
}
}