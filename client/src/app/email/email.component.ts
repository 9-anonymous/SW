// contact.component.ts
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmailService } from '../email.service'; // Import the service
import { Inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
}) 
export class EmailComponent implements OnInit {
  
  public emailForm!: FormGroup; // Use the ! operator

  constructor(private router: Router,private fb: FormBuilder, @Inject(EmailService) private emailService: EmailService) {}

  ngOnInit() {
    this.emailForm = this.fb.group({
      email: ['', Validators.required],
      username: ['', Validators.required],
      content: ['', Validators.required]
    });
  }

  sendEmail() {
    if (this.emailForm.valid) {
      const emailData = this.emailForm.value;
      this.emailService.sendEmail(emailData).subscribe(
        response => {
          // Redirect to the home page on success
          this.router.navigate(['/']);
        },
        error => {
          // Handle errors here
          console.error('Error sending email:', error);
        }
      );
    } else {
      // Optionally, handle form validation errors here
      console.error('Invalid form data:', this.emailForm.errors);
    }
  }
}
