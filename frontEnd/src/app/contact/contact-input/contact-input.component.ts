// src/app/contact-input/contact-input.component.ts
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth.service';
import { MessageService } from '../../message.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-input',
  templateUrl: './contact-input.component.html',
  styleUrls: ['./contact-input.component.css']
})
export class ContactInputComponent {
  title: string = '';
  content: string = '';
  selectedFile: File | null = null;
  receiver: string = '';
  usernames: string[] = [];

  constructor(private authService: AuthService, private messageService: MessageService, private router: Router) {}

  ngOnInit(): void {
    this.loadUsernames();
  }

  loadUsernames(): void {
    this.messageService.getUsernames().subscribe(usernames => {
      const loggedInUsername = this.authService.getUsername();
      this.usernames = usernames.filter(username => username !== loggedInUsername);
    });
  }

  onFileChange(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    if (inputElement && inputElement.files) {
      const file = inputElement.files[0];
      if (file) {
        this.selectedFile = file;
      }
    }
  }
  
  // Fixed code using type assertion
sendMessage(): void {
  const formData = new FormData();
  formData.set('title', this.title);
  formData.set('content', this.content);
  formData.set('receiver', this.receiver);
  if (this.selectedFile) {
    formData.set('photoUrl', this.selectedFile, this.selectedFile.name);
  }

  // Log the FormData contents to the console

  this.messageService.sendMessage(formData)
  .subscribe(
    response => {
      console.log(response);
      this.router.navigate(['/']);
    },
    error => {
      console.error('Error response:', error);
    }
  );
}
  
  

  }
