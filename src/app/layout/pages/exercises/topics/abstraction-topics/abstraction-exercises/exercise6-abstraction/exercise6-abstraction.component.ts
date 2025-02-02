import { Component, Input, Output, EventEmitter } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-exercise6-abstraction',
  templateUrl: './exercise6-abstraction.component.html',
  styleUrl: './exercise6-abstraction.component.scss'
})
export class Exercise6AbstractionComponent {
  @Output() nextExercise = new EventEmitter<void>();
  
  hintIndex: number;
  hints: string[];
  constructor(){
    this.hintIndex = 0; // Track how many hints have been shown
    this.hints = [
    'Hint 1: Abstraction simplifies complexity by focusing on essential details, enhances reusability through abstract classes and interfaces, improves maintainability by isolating high-level abstractions from implementation changes, and encourages modularity by breaking systems into independent components.',
    "Hint 2: To manage complex systems, abstraction hides unnecessary details, promotes reusable code with abstract structures, ensures easy updates without affecting core abstractions, and supports modular design with independent parts.",
    "Hint 3: Abstraction makes understanding easier by simplifying complexity, fosters code reusability with extendable structures, improves maintainability through isolated high-level designs, and promotes modularity with manageable components.",
  ];
  }

  
    concepts = [
      { id: 'simplifies complexity', name: 'Simplifies Complexity', dropped: false },
      { id: 'enhances reusability', name: 'Enhances Reusability', dropped: false },
      { id: 'improves maintainability', name: 'Improves Maintainability', dropped: false },
      { id: 'encourages modularity', name: 'Encourages Modularity', dropped: false },
    ];
  
    definitions = [
      {
        id: 'simplifies complexity',
        text: 'Focuses on essential details, hiding unnecessary ones for easier understanding.',
        dropped: '',
      },
      {
        id: 'enhances reusability',
        text: 'Abstract classes and interfaces provide reusable and extendable code structures.',
        dropped: '',
      },
      {
        id: 'improves maintainability',
        text: "Changes in implementation don't affect high-level abstractions, making updates easier.",
        dropped: '',
      },
      {
        id: 'encourages modularity',
        text: 'Breaks down systems into manageable, independent components.',
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
      { id: 'simplifies complexity', name: 'Simplifies Complexity', dropped: false },
      { id: 'enhances reusability', name: 'Enhances Reusability', dropped: false },
      { id: 'improves maintainability', name: 'Improves Maintainability', dropped: false },
      { id: 'encourages modularity', name: 'Encourages Modularity', dropped: false },
      ];
  
      // Shuffle the concepts again after reset
      this.shuffleChoices();
  
      this.draggedItem = null;
    }
}
