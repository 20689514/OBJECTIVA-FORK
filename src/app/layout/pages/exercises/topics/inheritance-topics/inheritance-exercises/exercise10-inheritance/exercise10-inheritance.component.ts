import { Component, Output, Input, EventEmitter } from '@angular/core';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-exercise10-inheritance',
  templateUrl: './exercise10-inheritance.component.html',
  styleUrl: './exercise10-inheritance.component.scss'
})
export class Exercise10InheritanceComponent {
  @Output() nextExercise = new EventEmitter<void>();
    
  hintIndex: number;
    hints: string[];
    constructor(private router: Router) {
      this.hintIndex = 0; // Track how many hints have been shown
      this.hints = [
        "Hint 1: To establish an inheritance relationship, use the keyword that signifies a class is derived from another class.",
        "Hint 2: Use the keyword that allows a subclass to call a method from its superclass.",
        "Hint 3: When creating an instance of the Dog class, ensure you use the correct class name.",
      ];
    }
  
    getHint(): void {
        if (this.hintIndex < this.hints.length) {
          Swal.fire({
            title: "Hint",
            text: this.hints[this.hintIndex],
            icon: "info",
            confirmButtonText: "OK",
          });
          this.hintIndex++;
        } else {
          Swal.fire({
            title: "No More Hints",
            text: "You've used all your hints!",
            icon: "warning",
            confirmButtonText: "Got it",
          });
        }
      }

      definitions = [
        { id: 1, label: '', userInput: '' },
        { id: 2, label: '', userInput: '' },
        { id: 3, label: '', userInput: '' },
        { id: 4, label: '', userInput: '' },
        { id: 5, label: '', userInput: '' },
        { id: 6, label: '', userInput: '' },
        { id: 7, label: '', userInput: '' },
      ];
    
      concepts = [
        { id: 1, name: 'extends' },
        { id: 2, name: 'super' },
        { id: 3, name: 'public' },
        { id: 4, name: 'Main' },
        { id: 5, name: 'Dog' },
        { id: 6, name: 'Dog' },
        { id: 7, name: 'eat' },
      ];
    
      validateAnswers() {
        const isAllCorrect = this.definitions.every((definition) => {
          const correctConcept = this.concepts.find(
            (concept) => concept.id === definition.id
          );
          return (
            definition.userInput.trim() &&
            correctConcept &&
            correctConcept.name === definition.userInput.trim()
          );
        });
    
        if (isAllCorrect) {
          Swal.fire({
            icon: 'success',
            title: 'Well Done!',
            text: 'All answers are correct!',
          }).then(() => {
            this.nextExercise.emit();
            this.router.navigate(['/exercises']);
          });
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Try Again!',
            text: 'Some answers are incorrect. Please check and try again!',
          });
        }
      }
}
