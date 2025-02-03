import { Component, OnInit } from '@angular/core';
import { quizData, QuizData } from './quiz-data';
import { Router } from '@angular/router';
import { QuizService } from '../../../../../../services/quiz.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-quiz-inheritance',
  templateUrl: './quiz-inheritance.component.html',
  styleUrl: './quiz-inheritance.component.scss'
})
export class QuizInheritanceComponent implements OnInit{
  constructor(
      private quizService: QuizService,
      private router: Router,
        private title: Title
    ) {
        this.title.setTitle('Inheritance Quiz | Objectiva');
    }
  
    quizData: QuizData[] = quizData;
  
    currentQuiz = 0;
    score = 0;
    showScore = false;
    selectedAnswer: string | null = null; // Tracks the selected answer
    answerOptions: { id: string; text: string }[] = [];
  
    // NEW
      showExplanation = false;
      isAnswerCorrect = false;
      hasSubmitted = false;
    
      ngOnInit(): void {
        this.quizData = this.getRandomQuestions(quizData, 25);
        this.loadQuiz();
      }
    
      getRandomQuestions(data: QuizData[], count: number): QuizData[] {
        const shuffled = data.sort(() => 0.5 - Math.random());
        return shuffled.slice(0, count);
      }
    
      loadQuiz(): void {
        this.selectedAnswer = null; // Reset selected answer when loading a new question
        this.hasSubmitted = false;  // Ensure submit state is reset
        this.showExplanation = false; // Hide explanation
      
        const currentQuizData = this.quizData[this.currentQuiz];
        this.answerOptions = [
          { id: 'a', text: currentQuizData.a },
          { id: 'b', text: currentQuizData.b },
          { id: 'c', text: currentQuizData.c },
          { id: 'd', text: currentQuizData.d },
        ];
      }
      
    
      onSubmit(): void {
        if (this.selectedAnswer) {
          this.isAnswerCorrect = this.selectedAnswer === this.quizData[this.currentQuiz].correct;
          this.showExplanation = true;
          this.hasSubmitted = true;
          
          if (this.isAnswerCorrect) {
            this.score++;
          }
        }
      }
    
      nextQuestion(): void {
        this.currentQuiz++;
        this.selectedAnswer = null;  // Reset selected answer
        this.hasSubmitted = false;   // Reset submit state
        this.showExplanation = false; // Hide explanation
      
        if (this.currentQuiz < this.quizData.length) {
          this.loadQuiz();
        } else {
          this.showScore = true;
          this.generateFeedback();
          
          this.quizService.getCurrentScore('inheritance').subscribe({
            next: (currentScore) => {
              if (currentScore === null || this.score > currentScore) {
                this.quizService.saveScore('inheritance', this.score, this.quizData.length)
                  .subscribe({
                    next: (response) => {
                      if (currentScore !== null && this.score > currentScore) {
                        this.higher = 'Excellent! Your score is greater than your current score which means you have improved!';
                      }
                    },
                    error: (error) => console.error('Error saving score:', error)
                  });
              }
            },
            error: (error) => console.error('Error fetching current score:', error)
          });
        }
      }
      
    
      resetQuiz(): void {
        this.currentQuiz = 0;
        this.score = 0;
        this.showScore = false;
        this.selectedAnswer = null;
        this.showExplanation = false;
        this.hasSubmitted = false;
        this.loadQuiz();
      }
    higher: string = '';
    feedback: string = '';
    generateFeedback(): void {
      let feedback: string;
  
      switch (this.score) {
          case 1:
              feedback = 'You are just starting with inheritance. Begin by understanding what it is and how it helps in code reuse.';
              break;
          case 2:
              feedback = 'You have a minimal understanding. Learn how child classes inherit properties and methods from parent classes.';
              break;
          case 3:
              feedback = 'Keep practicing! Understand the use of the `extends` keyword to create a subclass in Java.';
              break;
          case 4:
              feedback = 'You are making progress! Study real-world examples of inheritance, such as a Vehicle class with Car and Bike subclasses.';
              break;
          case 5:
              feedback = 'You have a basic grasp of inheritance. Try implementing a simple inheritance hierarchy in Java.';
              break;
          case 6:
              feedback = 'Good effort! Learn about access modifiers (`public`, `protected`, `private`) and how they affect inheritance.';
              break;
          case 7:
              feedback = 'You are getting better! Explore how constructors work in inherited classes.';
              break;
          case 8:
              feedback = 'Your knowledge is growing! Study method overriding and how it allows subclasses to modify inherited behavior.';
              break;
          case 9:
              feedback = 'You have a fair grasp of inheritance. Try implementing method overriding in a Java program.';
              break;
          case 10:
              feedback = 'Good job! Learn about the `super` keyword and how it is used to call parent class constructors or methods.';
              break;
          case 11:
              feedback = 'You are developing a solid foundation. Explore multi-level inheritance and its applications.';
              break;
          case 12:
              feedback = 'Your understanding is strengthening. Study why Java does not support multiple inheritance using classes.';
              break;
          case 13:
              feedback = 'Great work! Understand how interfaces help achieve multiple inheritance in Java.';
              break;
          case 14:
              feedback = 'You have a strong grasp of inheritance! Try designing a class hierarchy that follows good OOP design principles.';
              break;
          case 15:
              feedback = 'Excellent progress! Learn about abstract classes and when to use them instead of regular classes.';
              break;
          case 16:
              feedback = 'You are getting really good! Explore real-world applications of inheritance in frameworks like JavaFX or Spring.';
              break;
          case 17:
              feedback = 'Your understanding is solid! Learn about the impact of inheritance on performance and maintainability.';
              break;
          case 18:
              feedback = 'You have a deep understanding of inheritance. Try refactoring an existing Java project to use inheritance more effectively.';
              break;
          case 19:
              feedback = 'Amazing progress! Work on a project where inheritance improves code organization and reusability.';
              break;
          case 20:
              feedback = 'You are doing great! Study best practices for avoiding deep inheritance hierarchies.';
              break;
          case 21:
              feedback = 'Your inheritance skills are impressive! Learn about composition and when to use it instead of inheritance.';
              break;
          case 22:
              feedback = 'Exceptional work! Study real-world case studies where inheritance is used in large-scale applications.';
              break;
          case 23:
              feedback = 'Outstanding! Focus on designing inheritance hierarchies that are flexible and maintainable.';
              break;
          case 24:
              feedback = 'Brilliant understanding! Learn about the SOLID principles and how inheritance fits into them.';
              break;
          case 25:
              feedback = 'Perfect score! You have mastered inheritance. Apply your expertise to build complex, scalable Java applications.';
              break;
          default:
              feedback = 'Invalid score. Please check your input.';
      }
  
      this.feedback = feedback;
  }
  

    backtoQuiz(){
      this.router.navigate(['/quiz']); 
    }
}
