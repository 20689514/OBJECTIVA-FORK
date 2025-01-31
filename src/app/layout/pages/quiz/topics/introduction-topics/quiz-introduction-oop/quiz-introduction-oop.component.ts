import { Component, OnInit } from '@angular/core';
import { quizData,QuizData } from './quiz-data';
import { Router } from '@angular/router';
import { QuizService } from '../../../../../../services/quiz.service';


@Component({
  selector: 'app-quiz-introduction-oop',
  templateUrl: './quiz-introduction-oop.component.html',
  styleUrls: ['./quiz-introduction-oop.component.scss'],
})
export class QuizIntroductionOopComponent implements OnInit {
  constructor(
      private quizService: QuizService,
      private router: Router
    ) {}
  
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
              
              this.quizService.getCurrentScore('introduction-oop').subscribe({
                  next: (currentScore) => {
                      console.log('Current score:', currentScore);
                      console.log('New score:', this.score);
                      
                      if (currentScore === null || this.score > currentScore) {
                          console.log('Saving new score:', this.score);
                          this.quizService.saveScore('introduction-oop', this.score, this.quizData.length)
                              .subscribe({
                                  next: (response) => {
                                      console.log('Score saved successfully', response);
                                      this.higher = 'Excellent! Your score is greater than your current score which means you have improved!';
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
              feedback = 'You are just starting with OOP. Begin by understanding what it is and why it is used in modern programming.';
              break;
          case 2:
              feedback = 'You have a minimal understanding of OOP. Learn about its four main principles: Abstraction, Encapsulation, Inheritance, and Polymorphism.';
              break;
          case 3:
              feedback = 'Keep practicing! Understand how OOP makes software development more efficient and scalable.';
              break;
          case 4:
              feedback = 'You are making progress! Try identifying real-world examples of OOP, such as banking systems or game development.';
              break;
          case 5:
              feedback = 'You have a basic grasp of OOP. Focus on how objects and classes work together to structure programs.';
              break;
          case 6:
              feedback = 'Good effort! Work on writing simple programs that use objects, classes, and methods.';
              break;
          case 7:
              feedback = 'You are getting better! Understand how OOP improves code organization and reduces redundancy.';
              break;
          case 8:
              feedback = 'Your knowledge is growing! Study how methods and properties define an object’s behavior.';
              break;
          case 9:
              feedback = 'You have a fair grasp of OOP. Keep practicing how different OOP concepts work together in a project.';
              break;
          case 10:
              feedback = 'Good job! Start applying OOP principles in real-world scenarios to reinforce your understanding.';
              break;
          case 11:
              feedback = 'You are developing a solid foundation. Use OOP to design structured and maintainable programs.';
              break;
          case 12:
              feedback = 'Your understanding is strengthening. Work on applying all four OOP principles in practical coding exercises.';
              break;
          case 13:
              feedback = 'Great work! Continue refining your ability to structure applications using OOP.';
              break;
          case 14:
              feedback = 'You have a strong grasp of OOP! Try implementing multiple OOP concepts in a single program.';
              break;
          case 15:
              feedback = 'Excellent progress! Focus on how OOP principles enhance teamwork in large-scale projects.';
              break;
          case 16:
              feedback = 'You are getting really good! Explore advanced OOP concepts such as object composition and design patterns.';
              break;
          case 17:
              feedback = 'Your understanding is solid! Learn how OOP is used in modern software development.';
              break;
          case 18:
              feedback = 'You have a deep understanding of OOP. Explore how major frameworks and libraries rely on OOP.';
              break;
          case 19:
              feedback = 'Amazing progress! Work on designing efficient and reusable OOP-based applications.';
              break;
          case 20:
              feedback = 'You are doing great! Keep refining your skills by applying OOP in complex projects.';
              break;
          case 21:
              feedback = 'Your OOP skills are impressive! Learn how OOP integrates with different programming paradigms.';
              break;
          case 22:
              feedback = 'Exceptional work! Study how OOP is applied in enterprise-level software development.';
              break;
          case 23:
              feedback = 'Outstanding! Focus on optimizing your OOP designs for performance and scalability.';
              break;
          case 24:
              feedback = 'Brilliant understanding! Dive into advanced best practices for writing clean and efficient OOP-based code.';
              break;
          case 25:
              feedback = 'Perfect score! You have mastered OOP. Apply your expertise to real-world projects and mentor others.';
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
