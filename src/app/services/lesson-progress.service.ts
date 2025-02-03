import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LessonProgressService {
  private apiUrl = 'http://127.0.0.1:8000/api';
  private lessonProgressUrl = environment.lessonProgressUrl;

  constructor(private http: HttpClient) {}

  private getHeaders(): HttpHeaders {
    const token = localStorage.getItem('token');
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
  }

  updateProgress(lessonId: string, completed: boolean): Observable<any> {
    return this.http.post(this.lessonProgressUrl, {
      lesson_id: lessonId,
      completed
    }, { headers: this.getHeaders() });
  }

  getProgress(): Observable<any> {
    return this.http.get(this.lessonProgressUrl, { 
      headers: this.getHeaders() 
    });
  }
}