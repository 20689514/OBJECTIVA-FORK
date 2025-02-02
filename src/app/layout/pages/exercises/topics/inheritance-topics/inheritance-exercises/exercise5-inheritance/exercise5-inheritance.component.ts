import { Component, Output, Input, EventEmitter } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-exercise5-inheritance',
  templateUrl: './exercise5-inheritance.component.html',
  styleUrl: './exercise5-inheritance.component.scss'
})
export class Exercise5InheritanceComponent {
  @Output() nextExercise = new EventEmitter<void>();
    
  hintIndex: number;
    hints: string[];
    constructor(){
      this.hintIndex = 0; // Track how many hints have been shown
      this.hints = [
        "Hint 1: To establish an inheritance relationship, use the keyword that signifies a class is derived from another class.",
        "Hint 2: When creating an instance of the Puppy class, ensure you use the correct class name.",
        "Hint 3: To call a method on the Puppy instance, use the dot notation followed by the method name.",
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
        { id: 2, name: 'extends' },
        { id: 3, name: 'Puppy' },
        { id: 4, name: 'Puppy' },
        { id: 5, name: 'eat' },
        { id: 6, name: 'bark' },
        { id: 7, name: 'play' },
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
