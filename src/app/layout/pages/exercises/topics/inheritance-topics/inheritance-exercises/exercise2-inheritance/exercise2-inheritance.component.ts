import { Component, Output, Input, EventEmitter } from '@angular/core';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-exercise2-inheritance',
  templateUrl: './exercise2-inheritance.component.html',
  styleUrl: './exercise2-inheritance.component.scss'
})
export class Exercise2InheritanceComponent {
  @Output() nextExercise = new EventEmitter<void>();
  
  hintIndex: number;
    hints: string[];
    constructor(){
      this.hintIndex = 0; // Track how many hints have been shown
      this.hints = [
        "Hint 1: To establish an inheritance relationship, use the keyword that signifies a class is derived from another class.",
        "Hint 2: When creating an instance of the Dog class, ensure you use the correct class name.",
        "Hint 3: To call a method on the Dog instance, use the dot notation followed by the method name.",
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
    ];
  
    concepts = [
      { id: 1, name: 'extends' },
      { id: 2, name: 'Dog' },
      { id: 3, name: 'Dog' },
      { id: 4, name: 'eat' },
      { id: 5, name: 'bark' },
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
