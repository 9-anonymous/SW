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
    // Call the updated sendMessage method with the specified parameters
    this.messageService.sendMessage(this.title, this.content, this.receiver)
      .subscribe(response => {
        // Handle the response as needed
        console.log(response);
        this.router.navigate(['/']);

      });
  }

  }
