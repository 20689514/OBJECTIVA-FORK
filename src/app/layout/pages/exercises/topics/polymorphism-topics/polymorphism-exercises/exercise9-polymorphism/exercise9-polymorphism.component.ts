import { Component, Input, Output, EventEmitter } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-exercise9-polymorphism',
  templateUrl: './exercise9-polymorphism.component.html',
  styleUrl: './exercise9-polymorphism.component.scss'
})
export class Exercise9PolymorphismComponent {
  @Output() nextExercise = new EventEmitter<void>();
  
  hintIndex: number;
  hints: string[];
  constructor(){
    this.hintIndex = 0; // Track how many hints have been shown
    this.hints = [
    'Hint 1: Polymorphism enables code flexibility through static polymorphism (method/operator overloading) and dynamic polymorphism (method overriding), enhancing reusability and dynamic behavior.',
    "Hint 2: By using polymorphism, programs achieve reusability, dynamic behavior at runtime, and less complex code through shared methods that adapt based on objects.",
    "Hint 3: Static and dynamic polymorphism simplify coding by reducing complexity, promoting reusability, and allowing programs to decide behavior at runtime.",
  ];
  }
    
      concepts = [
        { id: 'virtualmethods', name: 'Virtual Methods', dropped: false },
        { id: 'dynamicmethoddispatch', name: 'Dynamic Method Dispatch', dropped: false },
        { id: 'latebinding', name: 'Late Binding', dropped: false },
        { id: 'typecasting', name: 'Type Casting', dropped: false },
        { id: 'instanceofoperator', name: 'Instance of Operator', dropped: false },
      ];
    
      definitions = [
        {
          id: 'virtualmethods',
          text: 'A parent class method that can be overridden in a subclass to customize its behavior',
          dropped: '',
        },
        {
          id: 'dynamicmethoddispatch',
          text: 'The process where a reference of a parent class can be used to invoke methods in the child class, enabling dynamic behavior.',
          dropped: '',
        },
        {
          id: 'latebinding',
          text: 'The mechanism by which the method to be executed is decided during runtime, enabling flexibility in method invocation.',
          dropped: '',
        },
        {
          id: 'typecasting',
          text: 'Converts one type of object reference to another, typically using upcasting or downcasting.',
          dropped: '',
        },
        {
          id: 'instanceofoperator',
          text: 'Determines the actual type of an object at runtime to safely convert or downcast it to a specific type, preventing runtime errors like ClassCastException.',
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
            { id: 'virtualmethods', name: 'Virtual Methods', dropped: false },
            { id: 'dynamicmethoddispatch', name: 'Dynamic Method Dispatch', dropped: false },
            { id: 'latebinding', name: 'Late Binding', dropped: false },
            { id: 'typecasting', name: 'Type Casting', dropped: false },
            { id: 'instanceofoperator', name: 'Instance of Operator', dropped: false },
           ];
       
           // Shuffle the concepts again after reset
           this.shuffleChoices();
       
           this.draggedItem = null;
         }
       }