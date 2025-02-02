import { Component, EventEmitter, Output } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-exercise2-polymorphism',
  templateUrl: './exercise2-polymorphism.component.html',
  styleUrl: './exercise2-polymorphism.component.scss'
})
export class Exercise2PolymorphismComponent {
  @Output() nextExercise = new EventEmitter<void>();
    
  hintIndex: number;
          hints: string[];
          constructor(){
            this.hintIndex = 0; // Track how many hints have been shown
            this.hints = [
              "Hint 1: To define a method in an interface, use the keyword that declares a method without implementation.",
              "Hint 2: To implement an interface in a class, use the keyword that signifies the class is fulfilling the contract of the interface.",
              "Hint 3: When creating an instance of a class that implements an interface, ensure you use the correct class name and call the method using dot notation.",
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
        { id: 1, name: 'a' },
        { id: 2, name: 'b' },
        { id: 3, name: 'c' },
        { id: 4, name: 'MathOperations' },
        { id: 5, name: 'MathOperations' },
        { id: 6, name: 'multiply' },
        { id: 7, name: 'multiply' },
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
