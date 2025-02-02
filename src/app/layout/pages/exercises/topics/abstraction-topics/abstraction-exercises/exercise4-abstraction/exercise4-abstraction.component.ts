import { Component, Output, Input, EventEmitter } from '@angular/core';
import Swal from 'sweetalert2';
interface GameLevel {
  images: string[];
  solution: string;
  hints: number;
}
@Component({
  selector: 'app-exercise4-abstraction',
  templateUrl: './exercise4-abstraction.component.html',
  styleUrl: './exercise4-abstraction.component.scss'
})
export class Exercise4AbstractionComponent {
@Output() nextExercise: EventEmitter<void> = new EventEmitter<void>();  // Emit to notify parent
        
hintIndex: number;
  hints: string[];
  constructor(){
    this.hintIndex = 0; // Track how many hints have been shown
    this.hints = [
      "Hint 1: This concept hides the complex implementation details and shows only the necessary features.",
      "Hint 2: It helps in reducing programming complexity and effort.",
      "Hint 3: In object-oriented programming, this is often achieved using abstract classes and interfaces.",
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

        currentLevelIndex = 0;
        selectedLetters: (string | null)[] = [];
        shuffledLetters: (string | null)[] = [];
      
        ngOnInit() {
          this.initializeLevel(); // Initialize the first level
        }
      
        // Define levels for the game
        levels: GameLevel[] = [
          {
            images: ['assets/ab1.png', 'assets/ab2.png', 'assets/ab3.png', 'assets/ab4.png'],
            solution: 'ABSTRACTION',
            hints: 3
          },
        ];
      
        initializeLevel() {
          const currentLevel = this.levels[this.currentLevelIndex];
          this.selectedLetters = new Array(currentLevel.solution.length).fill(null);
          
          const solutionLetters = currentLevel.solution.split('');
          const extraLetters = this.generateExtraLetters(solutionLetters);
          this.shuffledLetters = this.shuffleArray([...solutionLetters, ...extraLetters]);
        }
      
        selectLetter(letter: string | null) {
          if (letter === null) return;
      
          const emptyIndex = this.selectedLetters.findIndex(l => l === null);
          if (emptyIndex !== -1) {
            this.selectedLetters[emptyIndex] = letter;
            
            const letterIndex = this.shuffledLetters.indexOf(letter);
            if (letterIndex !== -1) {
              this.shuffledLetters[letterIndex] = null;
            }
          }
        }
      
        removeSelectedLetter(index: number) {
          const letter = this.selectedLetters[index];
          if (letter) {
            const nullIndex = this.shuffledLetters.indexOf(null);
            if (nullIndex !== -1) {
              this.shuffledLetters[nullIndex] = letter;
            }
            
            this.selectedLetters[index] = null;
          }
        }
      
        checkAnswer() {
          const currentLevel = this.levels[this.currentLevelIndex];
          const playerAnswer = this.selectedLetters.join('');
      
          if (playerAnswer === currentLevel.solution) {
            Swal.fire({
              icon: 'success',
              title: 'Well Done!',
              text: 'Your answer is correct!',
            }).then(() => {
              this.showNextLevel();
            });
          } else {
            Swal.fire({
              icon: 'error',
              title: 'Try Again!',
              text: 'Your answer is incorrect. Please try again!',
            });
          }
        }
      
        showNextLevel() {
          // Mark the level as completed, move to next level, or finish the exercise
          this.currentLevelIndex++;
          if (this.currentLevelIndex >= this.levels.length) {
            // Exercise completed
            // Emit to notify parent that this exercise is complete
            this.nextExercise.emit();
          } else {
            this.initializeLevel();
          }
        }
      

      
        shuffleArray(array: any[]): any[] {
          for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
          }
          return array;
        }
      
        generateExtraLetters(solutionLetters: string[]): string[] {
          const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
          const extraLetters: string[] = [];
          
          while (extraLetters.length < solutionLetters.length) {
            const randomLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
            if (!solutionLetters.includes(randomLetter) && !extraLetters.includes(randomLetter)) {
              extraLetters.push(randomLetter);
            }
          }
          
          return extraLetters;
        }
}
