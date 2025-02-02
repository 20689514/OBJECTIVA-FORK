import { Component, OnInit } from '@angular/core';
import { QuizService } from '../../../../services/quiz.service';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
interface QuizItem {
  id: string;
  title: string;
  description: string;
  score?: number;
  totalQuestions: number;
  url: string;
}
@Component({
  selector: 'app-topics',
  templateUrl: './topics.component.html',
  styleUrl: './topics.component.scss'
})
export class TopicsComponent implements OnInit{
  
quizzes: QuizItem[] = [
    {
      id: 'introduction-oop',
      title: 'Introduction to OOP',
      description: 'Test your knowledge of OOP concepts.',
      totalQuestions: 25,
      url: '/quiz-topics/quiz-introduction-oop'
    },
    {
      id: 'introduction-java',
      title: 'Introduction to Java',
      description: 'Test your knowledge of Java concepts.',
      totalQuestions: 25,
      url: '/quiz-topics/quiz-introduction-java'
    },
    {
      id: 'abstraction',
      title: 'Abstraction',
      description: 'Test your knowledge of Abstraction concepts.',
      totalQuestions: 25,
      url: '/quiz-topics/quiz-abstraction'
    },
    {
      id: 'encapsulation',
      title: 'Encapsulation',
      description: 'Test your knowledge of Encapsulation concepts.',
      totalQuestions: 25,
      url: '/quiz-topics/quiz-encapsulation'
    },
    {
      id: 'inheritance',
      title: 'Inheritance',
      description: 'Test your knowledge of Inheritance concepts.',
      totalQuestions: 25,
      url: '/quiz-topics/quiz-inheritance'
    },
    {
      id: 'polymorphism',
      title: 'Polymorphism',
      description: 'Test your knowledge of Polymorphism.',
      totalQuestions: 25,
      url: '/quiz-topics/quiz-polymorphism'
    }
    // Add other quizzes here
  ];

  constructor(private quizService: QuizService, private router: Router, private title: Title) {
    this.title.setTitle('Quiz | Objectiva');
  }

  ngOnInit() {
    this.loadScores();
  }

  startQuiz(quizId: string): void {
    const quiz = this.quizzes.find(q => q.id === quizId);
    if (quiz) {
      this.router.navigate([quiz.url]); // Navigate to the quiz URL using routerLink
    }
  }

  loadScores() {
    this.quizService.getScores().subscribe({
      next: (response) => {
        // Update quiz scores from the response
        this.quizzes = this.quizzes.map(quiz => ({
          ...quiz,
          score: response.data[quiz.id]?.score
        }));
      },
      error: (error) => {
        console.error('Error loading scores:', error);
      }
    });
  }
}
