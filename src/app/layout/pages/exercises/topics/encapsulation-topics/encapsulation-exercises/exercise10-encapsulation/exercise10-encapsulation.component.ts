import { Component, EventEmitter, Output } from '@angular/core';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-exercise10-encapsulation',
  templateUrl: './exercise10-encapsulation.component.html',
  styleUrl: './exercise10-encapsulation.component.scss'
})
export class Exercise10EncapsulationComponent {
  constructor(private router: Router) {
    this.hintIndex = 0; // Track how many hints have been shown
    this.hints = [
      "Hint 1: To make a field private, use the keyword that restricts access to within the same class.",
      "Hint 2: To define a constant value that should not change, use the keyword that signifies a constant.",
      "Hint 3: To ensure the salary does not exceed the maximum limit, use a conditional statement to check the value before setting it.",
    ];
  }
  @Output() nextExercise = new EventEmitter<void>();
  
  hintIndex: number;
    hints: string[];
      
  
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
      { id: 8, label: '', userInput: '' },
      { id: 9, label: '', userInput: '' },
      
    ];
  
    concepts = [
      { id: 1, name: 'private' },
      { id: 2, name: 'private' },
      { id: 3, name: 'final' },
      { id: 4, name: 'int' },
      { id: 5, name: 'double' },
      { id: 6, name: 'Employee' },
      { id: 7, name: 'emp' },
      { id: 8, name: 'emp' },
      { id: 9, name: 'setSalary' },
    ];
  
    isLastQuestion = true;
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
        if (this.isLastQuestion) {
          Swal.fire({
            icon: 'success',
            title: 'Congratulations!',
            text: 'All answers are correct! You have successfully completed all exercises!',
          }).then(() => {
            this.router.navigate(['/exercises']); // Adjust the route as needed
          });
        } else {
          Swal.fire({
            icon: 'success',
            title: 'Well Done!',
            text: 'All answers are correct!',
          }).then(() => {
            this.nextExercise.emit();
            this.router.navigate(['/exercises']);
          });
        }
      }
    }
  }
