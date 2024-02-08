// src/app/MainPage/nav-bar/nav-bar.component.ts
import { Component } from '@angular/core';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  constructor(public authService: AuthService) {}   

  isLoggedIn() {
    return this.authService.isAuthenticated();
  }

  getUsername(): string {
    // Retrieve username from AuthService or wherever it is stored
    return this.authService.getUsername();
  }

  logout(): void {
    // Call AuthService or a dedicated logout service method
    this.authService.logout();
  }
}
