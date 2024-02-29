import { Component, OnInit } from '@angular/core';
import { SignupService } from '../signup.service';
import { Router } from '@angular/router';

interface User {
  username: string;
  email: string;
  password: string;
}

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  user: User = { username: '', email: '', password: '' }; // Define the type of 'user'

  constructor(private signupService: SignupService, private router: Router) {}

  ngOnInit(): void {
    // Initialize component logic here
  }

  onSubmit(): void {
    this.signupService.register(this.user).subscribe(
      res => {
        console.log('Success!', res);
        // Redirect to the main page after successful registration
        this.router.navigate(['/']);
      },
      err => console.error('Error!', err)
    );
  }
}  