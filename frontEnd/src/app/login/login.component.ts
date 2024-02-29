// src/app/login/login.component.ts
import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

interface User {
  username: string;
  password: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: User = { username: '', password: '' };
  errorMessage: string = '';

  constructor(private loginService: LoginService, private router: Router, private authService: AuthService) {}

  ngOnInit(): void {
    this.loginService.getError().subscribe(error => this.errorMessage = error);
  }

  onSubmit(): void {
    this.loginService.login(this.user).subscribe(
      (res) => {
        console.log('Login success!', res);
        console.log('Your token is: ', res.body.token); // Access the token from the response body
        const userId = this.authService.getUserId();
        console.log('User ID from AuthService:', userId);

        this.authService.login(this.user.username, this.user.password);
        this.router.navigate(['/']);
      },
      (err) => {
        console.error('Login error!', err);

        if (err.status === 401) {
           const responseMessage = err.error.message;

          if (responseMessage === 'Username not found') {
            this.errorMessage = 'Invalid username';
          } else if (responseMessage === 'Incorrect password') {
            this.errorMessage = 'Invalid password';
          } else {
            this.errorMessage = 'Invalid username or password';
          }
        } else {
          this.errorMessage = 'An unexpected error occurred';
        }
      }
    );
  }
}
