// contact.component.ts
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactService } from '../contact.service'; // Import the service
import { Inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  
  public contactForm!: FormGroup; // Use the ! operator

  constructor(private router: Router,private fb: FormBuilder, @Inject(ContactService) private contactService: ContactService) {}

  ngOnInit() {
    this.contactForm = this.fb.group({
      email: ['', Validators.required],
      username: ['', Validators.required],
      content: ['', Validators.required]
    });
  }

  sendEmail() {
    if (this.contactForm.valid) {
      const emailData = this.contactForm.value;
      this.contactService.sendEmail(emailData).subscribe(
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
      console.error('Invalid form data:', this.contactForm.errors);
    }
  }
}
