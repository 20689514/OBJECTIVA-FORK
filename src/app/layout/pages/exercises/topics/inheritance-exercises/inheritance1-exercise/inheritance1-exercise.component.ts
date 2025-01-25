import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-inheritance1-exercise',
  templateUrl: './inheritance1-exercise.component.html',
  styleUrls: ['./inheritance1-exercise.component.scss']
})
export class Inheritance1ExerciseComponent {
  // Drag items
  items: string[] = ['Class', 'Object', 'Method', 'Inheritance', 'Encapsulation'];

  // Categories
  categories: { name: string; items: string[] }[] = [
    { name: 'Class Concepts', items: [] },
    { name: 'OOP Features', items: [] }
  ];

  // Drop event handler
  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      // Reorder items in the same list
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      // Move items between different lists
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
}
