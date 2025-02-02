import { Component, Input, Output, EventEmitter } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-exercise9-inheritance',
  templateUrl: './exercise9-inheritance.component.html',
  styleUrl: './exercise9-inheritance.component.scss'
})
export class Exercise9InheritanceComponent {
  @Output() nextExercise = new EventEmitter<void>();
  
    hintIndex: number;
    hints: string[];
    constructor(){
      this.hintIndex = 0; // Track how many hints have been shown
      this.hints = [
      "Hint 1: Final classes cannot have subclasses, final methods cannot be overridden by subclasses, and final variables are constants that cannot be modified after initialization.",
      "Hint 2: To ensure stability, Java uses final classes to prevent inheritance, final methods to preserve functionality, and final variables to keep values unchanged.",
      "Hint 3: In Java, final classes remain unaltered without subclasses, final methods safeguard their behavior from being overridden, and final variables lock their values after being set.",
    ];
    }
   
     concepts = [
       { id: 'final classes', name: 'Final Classes', dropped: false },
       { id: 'final methods', name: 'Final Methods', dropped: false },
       { id: 'final variables', name: 'Final Variables', dropped: false },
     ];
   
     definitions = [
       {
         id: 'final classes',
         text: 'This cannot have subclasses, ensuring it remains unaltered.',
         dropped: '',
       },
       {
         id: 'final methods',
         text: 'This cannot be overridden by subclasses, preserving Its functionality.',
         dropped: '',
       },
       {
         id: 'final variables',
         text: 'This is a constant that cannot be modified after initialization.',
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
        { id: 'final classes', name: 'Single Inheritance', dropped: false },
        { id: 'final methods', name: 'Polymorphism', dropped: false },
        { id: 'final variables', name: 'Inheritance', dropped: false },
       ];
   
       // Shuffle the concepts again after reset
       this.shuffleChoices();
   
       this.draggedItem = null;
     }
}
