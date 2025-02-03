import { Component, OnInit } from '@angular/core';
import { quizData,QuizData } from './quiz-data';
import { Router } from '@angular/router';
import { QuizService } from '../../../../../../services/quiz.service';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-quiz-introduction-java',
  templateUrl: './quiz-introduction-java.component.html',
  styleUrl: './quiz-introduction-java.component.scss'
})
export class QuizIntroductionJavaComponent implements OnInit{
constructor(
    private quizService: QuizService,
    private router: Router,
    private title: Title
  ) {
    this.title.setTitle('Introduction to Java | Objectiva');
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
        
        this.quizService.getCurrentScore('introduction-java').subscribe({
          next: (currentScore) => {
            if (currentScore === null || this.score > currentScore) {
              this.quizService.saveScore('introduction-java', this.score, this.quizData.length)
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
            feedback = 'You are just starting with Java. Begin by understanding its purpose and why it is widely used.';
            break;
        case 2:
            feedback = 'You have a minimal understanding. Learn about Java syntax, variables, and basic data types.';
            break;
        case 3:
            feedback = 'Keep practicing! Focus on writing simple Java programs to get familiar with syntax.';
            break;
        case 4:
            feedback = 'You are making progress! Study how Java handles input, output, and basic operations.';
            break;
        case 5:
            feedback = 'You have a basic grasp of Java. Learn about conditional statements and loops to control program flow.';
            break;
        case 6:
            feedback = 'Good effort! Work on writing methods to make your Java programs modular.';
            break;
        case 7:
            feedback = 'You are getting better! Understand how Java uses classes and objects to implement OOP.';
            break;
        case 8:
            feedback = 'Your knowledge is growing! Learn about Java’s strong typing system and how it prevents errors.';
            break;
        case 9:
            feedback = 'You have a fair grasp of Java. Study exception handling to write robust programs.';
            break;
        case 10:
            feedback = 'Good job! Work with arrays and collections to handle multiple data values efficiently.';
            break;
        case 11:
            feedback = 'You are developing a solid foundation. Learn how Java manages memory using garbage collection.';
            break;
        case 12:
            feedback = 'Your understanding is strengthening. Explore file handling to read and write data.';
            break;
        case 13:
            feedback = 'Great work! Try using Java’s built-in libraries to streamline your code.';
            break;
        case 14:
            feedback = 'You have a strong grasp of Java! Experiment with multi-threading to improve performance.';
            break;
        case 15:
            feedback = 'Excellent progress! Study how Java is used in desktop, web, and mobile development.';
            break;
        case 16:
            feedback = 'You are getting really good! Explore Java frameworks like Spring and Hibernate.';
            break;
        case 17:
            feedback = 'Your understanding is solid! Learn how Java’s platform independence makes it powerful.';
            break;
        case 18:
            feedback = 'You have a deep understanding of Java. Try building a complete Java-based application.';
            break;
        case 19:
            feedback = 'Amazing progress! Work with databases and APIs to build real-world Java applications.';
            break;
        case 20:
            feedback = 'You are doing great! Keep refining your Java skills by working on larger projects.';
            break;
        case 21:
            feedback = 'Your Java skills are impressive! Learn about performance optimization and best coding practices.';
            break;
        case 22:
            feedback = 'Exceptional work! Study how Java is used in enterprise solutions.';
            break;
        case 23:
            feedback = 'Outstanding! Work on optimizing your Java code for better efficiency and scalability.';
            break;
        case 24:
            feedback = 'Brilliant understanding! Focus on best practices for writing clean and maintainable Java code.';
            break;
        case 25:
            feedback = 'Perfect score! You have mastered Java. Apply your expertise to complex software development.';
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
