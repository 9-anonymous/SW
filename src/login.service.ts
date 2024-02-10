// src/app/login.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private apiUrl = 'http://localhost:8000'; // Update with your Symfony API URL
  private errorSubject = new BehaviorSubject<string>('');

  constructor(private http: HttpClient) {}

  login(user: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, user).pipe(
      catchError((error) => {
        // Set the error message based on the server response
        this.errorSubject.next(error.error?.message || 'An unknown error occurred');
        return throwError(error);
      })
    );
  }
  getError(): Observable<string> {
    return this.errorSubject.asObservable();
  }
}