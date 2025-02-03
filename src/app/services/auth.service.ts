import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { isPlatformBrowser } from '@angular/common';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  // private apiUrl = 'http://127.0.0.1:8000/api'; // Replace with your API's base URL

  private loginUrl = environment.loginUrl;
  private registerUrl = environment.registerUrl;

  constructor(
    private http: HttpClient,
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object // Inject PLATFORM_ID
  ) {}

  login(email: string, password: string): Observable<any> {
    return this.http.post(this.loginUrl, { email, password }).pipe(
      map((response: any) => {
        if (response && response.token) {
          if (isPlatformBrowser(this.platformId)) {
            localStorage.setItem('token', response.token);
            localStorage.setItem('firstName', response.user?.first_name);
            localStorage.setItem('lastName', response.user?.last_name);
            localStorage.setItem('email', response.user?.email);
          }
          return response;
        }
        throw new Error('Invalid response from server');
      })
    );
  }

  register(user: any): Observable<any> {
    return this.http.post(this.registerUrl, user);
  }

  logout(): void {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.removeItem('token');
    }
    this.router.navigate(['/login-register']);
  }

  getToken(): string | null {
    if (isPlatformBrowser(this.platformId)) {
      return localStorage.getItem('token');
    }
    return null;
  }

  isAuthenticated(): boolean {
    const token = this.getToken();
    return !!token; // Add token expiration check if needed
  }

  getFirstName(): string | null {
    if (isPlatformBrowser(this.platformId)) {
      return localStorage.getItem('firstName');
    }
    return null;
  }

  getLastName(): string | null {
    if (isPlatformBrowser(this.platformId)) {
      return localStorage.getItem('lastName');
    }
    return null;
  }
  getEmail(): string | null {
    if (isPlatformBrowser(this.platformId)) {
      return localStorage.getItem('email');
    }
    return null;
  }
}
