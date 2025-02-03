import { Component, OnInit } from '@angular/core';
import { quizData,QuizData } from './quiz-data';
import { Router } from '@angular/router';
import { QuizService } from '../../../../../../services/quiz.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-quiz-polymorphism',
  templateUrl: './quiz-polymorphism.component.html',
  styleUrl: './quiz-polymorphism.component.scss'
})
export class QuizPolymorphismComponent implements OnInit{
  constructor(
      private quizService: QuizService,
      private router: Router,
        private title: Title
    ) {
        this.title.setTitle('Polymorphism Quiz | Objectiva');
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
          
          this.quizService.getCurrentScore('polymorphism').subscribe({
            next: (currentScore) => {
              if (currentScore === null || this.score > currentScore) {
                this.quizService.saveScore('polymorphism', this.score, this.quizData.length)
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
              feedback = 'You are just starting with polymorphism. Begin by understanding how it allows different objects to be treated as instances of the same class.';
              break;
          case 2:
              feedback = 'You have a minimal understanding. Learn about method overloading and how it allows multiple methods with the same name but different parameters.';
              break;
          case 3:
              feedback = 'Keep practicing! Study method overriding and how it lets subclasses provide a specific implementation of a parent method.';
              break;
          case 4:
              feedback = 'You are making progress! Understand how polymorphism enhances code flexibility and reduces redundancy.';
              break;
          case 5:
              feedback = 'You have a basic grasp of polymorphism. Try implementing method overloading and overriding in Java.';
              break;
          case 6:
              feedback = 'Good effort! Learn how dynamic method dispatch allows Java to determine the correct method implementation at runtime.';
              break;
          case 7:
              feedback = 'You are getting better! Study how polymorphism improves maintainability by making code more adaptable to changes.';
              break;
          case 8:
              feedback = 'Your knowledge is growing! Explore how interfaces and abstract classes support polymorphism in Java.';
              break;
          case 9:
              feedback = 'You have a fair grasp of polymorphism. Try using interfaces to enforce method implementation in different classes.';
              break;
          case 10:
              feedback = 'Good job! Learn about the importance of the `@Override` annotation and how it helps prevent errors in method overriding.';
              break;
          case 11:
              feedback = 'You are developing a solid foundation. Study real-world applications of polymorphism, such as in Java GUI frameworks.';
              break;
          case 12:
              feedback = 'Your understanding is strengthening. Learn about covariance and how it allows method return types to be more specific in subclasses.';
              break;
          case 13:
              feedback = 'Great work! Explore how polymorphism is used in Java’s collection framework, such as `List`, `Set`, and `Map`.';
              break;
          case 14:
              feedback = 'You have a strong grasp of polymorphism! Try designing a project that benefits from polymorphic behavior.';
              break;
          case 15:
              feedback = 'Excellent progress! Learn about operator overloading in other languages and why Java does not support it.';
              break;
          case 16:
              feedback = 'You are getting really good! Study the difference between compile-time polymorphism (method overloading) and runtime polymorphism (method overriding).';
              break;
          case 17:
              feedback = 'Your understanding is solid! Explore how polymorphism allows developers to write more modular and scalable code.';
              break;
          case 18:
              feedback = 'You have a deep understanding of polymorphism. Try using it to implement a plugin-based architecture in Java.';
              break;
          case 19:
              feedback = 'Amazing progress! Study the performance implications of polymorphism and how method calls are resolved dynamically.';
              break;
          case 20:
              feedback = 'You are doing great! Learn about the Liskov Substitution Principle and its relation to polymorphism.';
              break;
          case 21:
              feedback = 'Your polymorphism skills are impressive! Try applying polymorphism to design a flexible game engine.';
              break;
          case 22:
              feedback = 'Exceptional work! Study advanced polymorphic techniques, such as using generics with polymorphism.';
              break;
          case 23:
              feedback = 'Outstanding! Learn how polymorphism plays a role in dependency injection and design patterns like Strategy and Factory.';
              break;
          case 24:
              feedback = 'Brilliant understanding! Explore how polymorphism is utilized in frameworks like Spring and Hibernate.';
              break;
          case 25:
              feedback = 'Perfect score! You have mastered polymorphism. Apply your expertise to build scalable and flexible Java applications.';
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
