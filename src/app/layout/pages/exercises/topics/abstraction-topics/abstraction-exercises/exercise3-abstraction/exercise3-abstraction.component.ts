import { Component, Input, Output, EventEmitter } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-exercise3-abstraction',
  templateUrl: './exercise3-abstraction.component.html',
  styleUrl: './exercise3-abstraction.component.scss'
})
export class Exercise3AbstractionComponent {
  @Output() nextExercise = new EventEmitter<void>(); 

  hintIndex: number;
  hints: string[];
  constructor(){
    this.hintIndex = 0; // Track how many hints have been shown
    this.hints = [
    'Hint 1: High-level design focuses on the "what" of the system, emphasizing user interaction and overall behavior, while mid-level design addresses system components and their responsibilities, and low-level design dives into the "how," detailing specific implementations like code and algorithms.',
    "Hint 2: In system design, high-level defines overall behavior and user interaction, mid-level organizes subsystems and modules, and low-level handles detailed implementation such as code and algorithms.",
    "Hint 3: High-level design explains system behavior from a user’s perspective, mid-level design focuses on module responsibilities, and low-level design describes the technical details of how the system works.",
  ];
  }

  concepts = [
    { id: 'high-level', name: 'High-Level Abstraction', dropped: false },
    { id: 'mid-level', name: 'Mid-Level Abstraction', dropped: false },
    { id: 'low-level', name: 'Low-Level Abstraction', dropped: false },
  ];

  definitions = [
    {
      id: 'high-level',
      text: 'Deals with the "what" of the system, focusing on user interaction and overall system behavior.',
      dropped: '',
    },
    {
      id: 'mid-level',
      text: 'Involves system components and their responsibilities, typically focusing on subsystems or modules.',
      dropped: '',
    },
    {
      id: 'low-level',
      text: 'Details the "how," dealing with specific implementation, such as code and algorithms.',
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
    { id: 'high-level', name: 'High-Level Abstraction', dropped: false },
    { id: 'mid-level', name: 'Mid-Level Abstraction', dropped: false },
    { id: 'low-level', name: 'Low-Level Abstraction', dropped: false },
    ];

    // Shuffle the concepts again after reset
    this.shuffleChoices();

    this.draggedItem = null;
  }
}
