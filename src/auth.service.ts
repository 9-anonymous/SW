// auth.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isAuthenticatedValue = false;
  private usernameValue = '';

  isAuthenticated(): boolean {
    return this.isAuthenticatedValue;
  }

  getUsername(): string {
    return this.usernameValue;
  }

  login(username: string, password: string): void {
    // Implement login logic, set isAuthenticated and username
    this.isAuthenticatedValue = true;
    this.usernameValue = username;
  }

  logout(): void {
    // Implement logout logic, reset isAuthenticated and username
    this.isAuthenticatedValue = false;
    this.usernameValue = '';
  }
}