import { Component } from '@angular/core';

@Component({
  selector: 'app-abstraction1-content',
  templateUrl: './abstraction1-content.component.html',
  styleUrl: './abstraction1-content.component.scss'
})
export class Abstraction1ContentComponent {
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