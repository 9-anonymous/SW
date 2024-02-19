// auth.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isAuthenticatedValue = false;
  private usernameValue = '';
  constructor() {
    const token = localStorage.getItem('token');
    const isAuthenticated = localStorage.getItem('isAuthenticated');
    const username = localStorage.getItem('username');

    this.isAuthenticatedValue = isAuthenticated === 'true';
    this.usernameValue = username || '';
  }
  isAuthenticated(): boolean {
    return this.isAuthenticatedValue;
  }

  getUsername(): string {
    return this.usernameValue;
  }
  getUserId(): string | null {
    return localStorage.getItem('userId');
  }
  login(username: string, password: string): void {
    // Implement login logic, set isAuthenticated and username
    this.isAuthenticatedValue = true;
    this.usernameValue = username;

    // Additionally, you may want to store the username in localStorage
    localStorage.setItem('username', this.usernameValue);
}
  getToken(): string | null {
    return localStorage.getItem('token');
  }
  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('username');
    this.isAuthenticatedValue = false;
    this.usernameValue = '';
  }
}
