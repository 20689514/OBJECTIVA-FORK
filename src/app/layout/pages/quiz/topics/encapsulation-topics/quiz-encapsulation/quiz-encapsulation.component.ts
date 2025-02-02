import { Component, OnInit } from '@angular/core';
import { quizData,QuizData } from './quiz-data';
import { Router } from '@angular/router';
import { QuizService } from '../../../../../../services/quiz.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-quiz-encapsulation',
  templateUrl: './quiz-encapsulation.component.html',
  styleUrl: './quiz-encapsulation.component.scss'
})
export class QuizEncapsulationComponent implements OnInit{
  constructor(
      private quizService: QuizService,
      private router: Router,
      private title: Title
    ) {
        this.title.setTitle('Encapsulation Quiz | Objectiva');
    }
  
    quizData: QuizData[] = quizData;
  
    currentQuiz = 0;
    score = 0;
    showScore = false;
    selectedAnswer: string | null = null; // Tracks the selected answer
    answerOptions: { id: string; text: string }[] = [];
  
    ngOnInit(): void {
      this.quizData = this.getRandomQuestions(quizData, 25);
      this.loadQuiz();
    }
  
    getRandomQuestions(data: QuizData[], count: number): QuizData[] {
      const shuffled = data.sort(() => 0.5 - Math.random());
      return shuffled.slice(0, count);
    }
  
    loadQuiz(): void {
      this.selectedAnswer = null; // Reset the selected answer
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
          if (this.selectedAnswer === this.quizData[this.currentQuiz].correct) {
              this.score++;
          }
  
          this.currentQuiz++;
          if (this.currentQuiz < this.quizData.length) {
              this.loadQuiz();
          } else {
              this.showScore = true;
              this.generateFeedback();
              
              this.quizService.getCurrentScore('encapsulation').subscribe({
                  next: (currentScore) => {
                      console.log('Current score:', currentScore);
                      console.log('New score:', this.score);
                      
                      if (currentScore === null || this.score > currentScore) {
                          console.log('Saving new score:', this.score);
                          this.quizService.saveScore('encapsulation', this.score, this.quizData.length)
                              .subscribe({
                                  next: (response) => {
                                      console.log('Score saved successfully', response);
                                      if (currentScore !== null && this.score > currentScore) {
                                        this.higher = 'Excellent! Your score is greater than your current score which means you have improved!';
                                      }   
                                  },
                                  error: (error) => {
                                      console.error('Error saving score:', error);
                                  }
                              });
                      } else {
                          console.log('New score is not higher than current score, not saving.');
                      }
                  },
                  error: (error) => {
                      console.error('Error fetching current score:', error);
                  }
              });
          }
      }
  }
    higher: string = '';
    feedback: string = '';
    generateFeedback(): void {
      let feedback: string;
  
      switch (this.score) {
          case 1:
              feedback = 'You are just starting with encapsulation. Begin by understanding how it helps in data protection and security.';
              break;
          case 2:
              feedback = 'You have a minimal understanding. Learn about private variables and how they prevent direct access to data.';
              break;
          case 3:
              feedback = 'Keep practicing! Understand how getter and setter methods control data access.';
              break;
          case 4:
              feedback = 'You are making progress! Study why encapsulation is essential for writing secure and maintainable code.';
              break;
          case 5:
              feedback = 'You have a basic grasp of encapsulation. Try implementing a Java class with private fields and public getters/setters.';
              break;
          case 6:
              feedback = 'Good effort! Learn about access modifiers (`public`, `private`, `protected`) and how they enforce encapsulation.';
              break;
          case 7:
              feedback = 'You are getting better! Understand the role of encapsulation in preventing unintended data modification.';
              break;
          case 8:
              feedback = 'Your knowledge is growing! Try using encapsulation to manage sensitive user data in a Java application.';
              break;
          case 9:
              feedback = 'You have a fair grasp of encapsulation. Study the benefits of encapsulation in large-scale applications.';
              break;
          case 10:
              feedback = 'Good job! Learn about immutable objects and how they apply encapsulation to maintain data integrity.';
              break;
          case 11:
              feedback = 'You are developing a solid foundation. Try implementing encapsulation in a banking system example.';
              break;
          case 12:
              feedback = 'Your understanding is strengthening. Study why encapsulation improves modularity and code reusability.';
              break;
          case 13:
              feedback = 'Great work! Understand how encapsulation supports data hiding and reduces complexity.';
              break;
          case 14:
              feedback = 'You have a strong grasp of encapsulation! Try applying encapsulation principles in a Java-based project.';
              break;
          case 15:
              feedback = 'Excellent progress! Learn about the best practices for designing encapsulated classes.';
              break;
          case 16:
              feedback = 'You are getting really good! Study the impact of encapsulation on software security.';
              break;
          case 17:
              feedback = 'Your understanding is solid! Learn how encapsulation enables API design and controlled data exposure.';
              break;
          case 18:
              feedback = 'You have a deep understanding of encapsulation. Try implementing encapsulation in a multi-tier application.';
              break;
          case 19:
              feedback = 'Amazing progress! Study how encapsulation improves debugging and testing.';
              break;
          case 20:
              feedback = 'You are doing great! Focus on using encapsulation to separate concerns in large applications.';
              break;
          case 21:
              feedback = 'Your encapsulation skills are impressive! Learn about encapsulation in Java frameworks like Spring Boot.';
              break;
          case 22:
              feedback = 'Exceptional work! Explore advanced encapsulation techniques, such as encapsulating entire subsystems.';
              break;
          case 23:
              feedback = 'Outstanding! Study real-world use cases where encapsulation prevents security vulnerabilities.';
              break;
          case 24:
              feedback = 'Brilliant understanding! Learn how encapsulation fits into clean coding practices.';
              break;
          case 25:
              feedback = 'Perfect score! You have mastered encapsulation. Apply your expertise to create secure, scalable applications.';
              break;
          default:
              feedback = 'Invalid score. Please check your input.';
      }
  
      this.feedback = feedback;
  }
  
  
    resetQuiz(): void {
      this.currentQuiz = 0;
      this.score = 0;
      this.showScore = false;
      this.loadQuiz();
    }
    backtoQuiz(){
      this.router.navigate(['/quiz']); 
    }
}
