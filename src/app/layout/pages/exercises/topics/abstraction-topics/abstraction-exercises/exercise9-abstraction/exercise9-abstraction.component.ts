import { Component, Input, Output, EventEmitter } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-exercise9-abstraction',
  templateUrl: './exercise9-abstraction.component.html',
  styleUrl: './exercise9-abstraction.component.scss'
})
export class Exercise9AbstractionComponent {
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
      { id: 'abstract class', name: 'Abstract Class', dropped: false },
      { id: 'abstract method', name: 'Abstract Method', dropped: false },
      { id: 'interface', name: 'Interface', dropped: false },
      { id: 'implements', name: 'Implements', dropped: false },
      { id: 'multiple interfaces', name: 'Multiple Interfaces', dropped: false }
    ];
  
    definitions = [
      {
        id: 'abstract class',
        text: 'A class that cannot be instantiated and serves as a blueprint for other classes.',
        dropped: '',
      },
      {
        id: 'abstract method',
        text: 'A method that has no implementation and must be overridden by subclasses.',
        dropped: '',
      },
      {
        id: 'interface',
        text: 'A collection of method declarations that a class must follow without providing implementation.',
        dropped: '',
      },
      {
        id: 'implements',
        text: 'The keyword that means the class is agreeing to follow the rules and provide code for all the methods listed in the interface.',
        dropped: '',
      },
      {
      id: 'multiple interfaces',
      text: 'The ability of a class to implement more than one interface.',
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
      { id: 'abstract class', name: 'Abstract Class', dropped: false },
      { id: 'abstract method', name: 'Abstract Method', dropped: false },
      { id: 'interface', name: 'Interface', dropped: false },
      { id: 'implements', name: 'Implements', dropped: false },
      { id: 'multiple interfaces', name: 'Multiple Interfaces', dropped: false }
      ];
  
      // Shuffle the concepts again after reset
      this.shuffleChoices();
  
      this.draggedItem = null;
    }
}
