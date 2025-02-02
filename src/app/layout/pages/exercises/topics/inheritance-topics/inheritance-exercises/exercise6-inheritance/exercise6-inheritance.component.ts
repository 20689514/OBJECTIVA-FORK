import { Component, Input, Output, EventEmitter } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-exercise6-inheritance',
  templateUrl: './exercise6-inheritance.component.html',
  styleUrl: './exercise6-inheritance.component.scss'
})
export class Exercise6InheritanceComponent {
  @Output() nextExercise = new EventEmitter<void>(); 

    hintIndex: number;
    hints: string[];
    constructor(){
      this.hintIndex = 0; // Track how many hints have been shown
      this.hints = [
      "Hint 1: Extensibility allows you to add new features easily, maintainability helps keep updates simple, and code reuse lets you avoid rewriting existing logic.",
      "Hint 2: A well-designed system is extensible for growth, maintainable for easy fixes, and promotes code reuse to save time and effort.",
      "Hint 3: By reusing existing code, keeping updates centralized, and allowing modifications without breaking functionality, software becomes more efficient and scalable.",
    ];
    }
   
     concepts = [
       { id: 'extensibility', name: 'Extensibility', dropped: false },
       { id: 'maintanability', name: 'Maintanability', dropped: false },
       { id: 'code reuse', name: 'Code reuse', dropped: false },
     ];
   
     definitions = [
       {
         id: 'extensibility',
         text: 'Easily add or override behaviors.',
         dropped: '',
       },
       {
         id: 'maintanability',
         text: 'Centralize and simplify updates.',
         dropped: '',
       },
       {
         id: 'code reuse',
         text: 'Use existing code in new classes.',
         dropped: '',
       },
     ];
   
     draggedItem: any = null;
    
     ngOnInit() {
       // Shuffle concepts when the component is initialized
       this.shuffleChoices();
     }
   
     shuffleChoices() {
       for (let i = this.concepts.length - 1; i > 0; i--) {
         const j = Math.floor(Math.random() * (i + 1));
         [this.concepts[i], this.concepts[j]] = [this.concepts[j], this.concepts[i]];
       }
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
   
     onDragStart(item: any) {
       this.draggedItem = item;
     }
   
     onDrop(definition: any) {
       if (!definition.dropped && this.draggedItem) {
         // Assign the dragged concept name to the definition
         definition.dropped = this.draggedItem.name;
   
         // Mark the concept as dropped
         const concept = this.concepts.find((concept) => concept.id === this.draggedItem.id);
         if (concept) {
           concept.dropped = true;
         }
       }
       this.draggedItem = null;
     }
     
   
     onDragOver(event: DragEvent) {
       event.preventDefault(); // Required to allow dropping
     }
   
     validateAnswers() {
       const isAllCorrect = this.definitions.every((definition) => {
         const correctConcept = this.concepts.find(
           (concept) => concept.id === definition.id && concept.dropped
         );
         return definition.dropped && correctConcept?.name === definition.dropped;
       });
   
       if (isAllCorrect) {
         Swal.fire({
           icon: 'success',
           title: 'Well Done!',
           text: 'All answers are correct!',
         }).then(() => {
           // Emit the event to notify the parent to move to the next exercise
           this.nextExercise.emit(); // Notify the parent to move to the next exercise
         });
       } else {
         Swal.fire({
           icon: 'error',
           title: 'Try Again!',
           text: 'Some answers are incorrect. Please check and try again!',
         });
       }
     }
   
   
     // Function to reset the exercise
     reset() {
       // Reset the definitions and concepts
       this.definitions.forEach((def) => (def.dropped = ''));
       this.concepts = [
        { id: 'extensibility', name: 'Extensibility', dropped: false },
        { id: 'maintanability', name: 'Maintanability', dropped: false },
        { id: 'code reuse', name: 'Code reuse', dropped: false },
       ];
   
       // Shuffle the concepts again after reset
       this.shuffleChoices();
   
       this.draggedItem = null;
     }
}
