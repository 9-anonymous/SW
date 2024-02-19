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
  photoUrl: string = '';
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

  sendMessage(): void {
    const messageData = {
      title: this.title,
      content: this.content,
      receiver: this.receiver,
      photoUrl: this.photoUrl // Include the photo URL if provided
    };
    this.messageService.sendMessage(messageData)
      .subscribe(response => {
        console.log(response);
        this.router.navigate(['/']);
      });
  }

  }
