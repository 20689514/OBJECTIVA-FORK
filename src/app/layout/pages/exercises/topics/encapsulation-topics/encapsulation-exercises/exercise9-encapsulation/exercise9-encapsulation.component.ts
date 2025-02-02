import { Component, Input, Output, EventEmitter } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-exercise9-encapsulation',
  templateUrl: './exercise9-encapsulation.component.html',
  styleUrl: './exercise9-encapsulation.component.scss'
})
export class Exercise9EncapsulationComponent {
  @Output() nextExercise = new EventEmitter<void>();
  
  hintIndex: number;
  hints: string[];
  constructor(){
    this.hintIndex = 0; // Track how many hints have been shown
    this.hints = [
    "Hint 1: Validation ensures data integrity through setter validations, user input checks, type and format validations, range constraints, and business rule compliance.",
    "Hint 2: To maintain reliable data, validation involves checking setter criteria, verifying user input, confirming data types and formats, ensuring values are within range, and aligning with business rules.",
    "Hint 3: Validation covers multiple layers like enforcing rules in setters, validating user input, checking data types and formats, verifying acceptable ranges, and meeting business-specific requirements.",
  ];
  }
     
  concepts = [
    { id: 'validation in setters', name: 'Validation in Setters', dropped: false },
    { id: 'user input validation', name: 'User Input Validation', dropped: false },
    { id: 'type validation', name: 'Type Validation', dropped: false },
    { id: 'format validation', name: 'Format Validation', dropped: false },
    { id: 'range validation', name: 'Range Validation', dropped: false },
    { id: 'business rule validation', name: 'Business Rule Validation', dropped: false },
  ];

  definitions = [
    {
      id: 'validation in setters',
      text: 'Ensuring that data assigned through setter methods meets specific criteria, preventing invalid data.',
      dropped: '',
    },
    {
      id: 'user input validation',
      text: "Before any data enters our system, we verify it meets requirements and won't cause problems.",
      dropped: '',
    },
    {
      id: 'type validation',
      text: 'Ensuring the data is of the correct type.',
      dropped: '',
    },
    {
      id: 'format validation',
      text: 'Checking if the data follows required patterns.',
      dropped: '',
    },
    {
    id: 'range validation',
    text: 'Verifying values fall within acceptable limits.',
    dropped: '',
    },
    {
    id: 'business rule validation',
    text: 'Ensuring data meets specific business requirements.',
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
    { id: 'validation in setters', name: 'Validation in Setters', dropped: false },
    { id: 'user input validation', name: 'User Input Validation', dropped: false },
    { id: 'type validation', name: 'Type Validation', dropped: false },
    { id: 'format validation', name: 'Format Validation', dropped: false },
    { id: 'range validation', name: 'Range Validation', dropped: false },
    { id: 'business rule validation', name: 'Business Rule Validation', dropped: false },
    ];

    // Shuffle the concepts again after reset
    this.shuffleChoices();

    this.draggedItem = null;
  }
}
