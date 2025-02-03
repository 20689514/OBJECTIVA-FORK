import { Component, OnInit } from '@angular/core';
import { quizData,QuizData } from './quiz-data';
import { Router } from '@angular/router';
import { QuizService } from '../../../../../../services/quiz.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-quiz-abstraction',
  templateUrl: './quiz-abstraction.component.html',
  styleUrl: './quiz-abstraction.component.scss'
})
export class QuizAbstractionComponent implements OnInit{
  constructor(
    private quizService: QuizService,
    private router: Router,
    private title: Title
  ) {
    this.title.setTitle('Abstraction Quiz | Objectiva');
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
      
      this.quizService.getCurrentScore('abstraction').subscribe({
        next: (currentScore) => {
          if (currentScore === null || this.score > currentScore) {
            this.quizService.saveScore('abstraction', this.score, this.quizData.length)
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
            feedback = 'You are just starting to explore abstraction in Java. Focus on understanding how it simplifies complex systems.';
            break;
        case 2:
            feedback = 'Your understanding is minimal. Keep learning about abstraction and its role in hiding implementation details.';
            break;
        case 3:
            feedback = 'You are making progress! Continue exploring how abstraction improves software design and maintainability.';
            break;
        case 4:
            feedback = 'You are improving! Try identifying how abstraction is applied in real-world programming scenarios.';
            break;
        case 5:
            feedback = 'You have a basic grasp of abstraction. Keep practicing to strengthen your conceptual understanding.';
            break;
        case 6:
            feedback = 'You understand some key points but need more hands-on experience with abstraction in Java.';
            break;
        case 7:
            feedback = 'Good effort! Continue practicing abstraction through examples and small projects.';
            break;
        case 8:
            feedback = 'You are getting better! Learn how abstraction improves code structure and reusability.';
            break;
        case 9:
            feedback = 'You have a fair understanding. Keep refining your knowledge through practice.';
            break;
        case 10:
            feedback = 'Good job! Explore different ways abstraction is implemented in Java, such as abstract classes and interfaces.';
            break;
        case 11:
            feedback = 'You are developing a solid foundation. Work on applying abstraction to create cleaner and more modular code.';
            break;
        case 12:
            feedback = 'Your understanding is growing. Experiment with designing programs that effectively use abstraction.';
            break;
        case 13:
            feedback = 'Great work! Compare different abstraction techniques to understand when and how to use them.';
            break;
        case 14:
            feedback = 'You have a strong grasp of abstraction! Apply your knowledge in structured software design.';
            break;
        case 15:
            feedback = 'Excellent progress! Focus on understanding how abstraction leads to better code organization and scalability.';
            break;
        case 16:
            feedback = 'You are getting really good! Learn more about abstraction best practices and design principles.';
            break;
        case 17:
            feedback = 'Your understanding is solid! Explore how abstraction contributes to flexible and maintainable code.';
            break;
        case 18:
            feedback = 'You have a deep understanding. Analyze how abstraction is used in common design patterns.';
            break;
        case 19:
            feedback = 'Amazing progress! Identify how abstraction enhances modularity in software development.';
            break;
        case 20:
            feedback = 'You are doing great! Apply abstraction principles in larger, real-world projects.';
            break;
        case 21:
            feedback = 'Your abstraction skills are impressive! Work on designing efficient and scalable solutions.';
            break;
        case 22:
            feedback = 'Exceptional work! Study how abstraction is applied in enterprise-level applications and frameworks.';
            break;
        case 23:
            feedback = 'Outstanding! Focus on writing clean, maintainable, and abstracted code.';
            break;
        case 24:
            feedback = 'Brilliant understanding! Deepen your expertise by exploring advanced abstraction concepts.';
            break;
        case 25:
            feedback = 'Perfect score! You have mastered abstraction in Java. Apply your skills in advanced projects and mentor others.';
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
