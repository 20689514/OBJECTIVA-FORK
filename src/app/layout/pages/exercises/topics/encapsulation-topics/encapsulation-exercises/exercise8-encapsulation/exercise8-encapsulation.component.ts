import { Component, EventEmitter, Output } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-exercise8-encapsulation',
  templateUrl: './exercise8-encapsulation.component.html',
  styleUrl: './exercise8-encapsulation.component.scss'
})
export class Exercise8EncapsulationComponent {
  @Output() nextExercise = new EventEmitter<void>();
  
  hintIndex: number;
        hints: string[];
        constructor(){
          this.hintIndex = 0; // Track how many hints have been shown
          this.hints = [
            "Hint 1: To declare a field that is only accessible within the same class, use the keyword that restricts access to within the class.",
    "Hint 2: To declare a field that is accessible within the same package and subclasses, use the keyword that allows access within the package and subclasses.",
    "Hint 3: To declare a field that is accessible from any other class, use the keyword that allows unrestricted access.",
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
      { id: 1, name: 'private' },
      { id: 2, name: 'protected' },
      { id: 3, name: 'public' },
      { id: 4, name: 'privateData' },
      { id: 5, name: 'getPrivateData' },
      { id: 6, name: 'Child' },
      { id: 7, name: 'Child' },
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
