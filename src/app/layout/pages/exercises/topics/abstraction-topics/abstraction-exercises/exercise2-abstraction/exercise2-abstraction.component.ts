import { Component, EventEmitter, Output } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-exercise2-abstraction',
  templateUrl: './exercise2-abstraction.component.html',
  styleUrl: './exercise2-abstraction.component.scss'
})
export class Exercise2AbstractionComponent {
  @Output() nextExercise = new EventEmitter<void>();
  
  hintIndex: number;
      hints: string[];
      constructor(){
        this.hintIndex = 0; // Track how many hints have been shown
        this.hints = [
          "Hint 1: To implement multiple interfaces, use a keyword that allows a class to inherit from multiple sources.",
          "Hint 2: The method to take a photo should match the method signature defined in the Camera interface.",
          "Hint 3: The method to navigate should match the method signature defined in the GPS interface.",
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
    ];
  
    concepts = [
      { id: 1, name: 'implements' },
      { id: 2, name: 'takePhoto' },
      { id: 3, name: 'navigate' },
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
