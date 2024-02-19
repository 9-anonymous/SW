// contact-message.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MessageService } from '../../message.service';

@Component({
  selector: 'app-contact-message',
  templateUrl: './contact-message.component.html',
  styleUrls: ['./contact-message.component.css']
})
export class ContactMessageComponent implements OnInit {
  message: any;

  constructor(
    private route: ActivatedRoute,
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
    const messageId = this.route.snapshot.paramMap.get('id');
    if (messageId !== null) {
      // handle messageId as a string
      this.messageService.getMessageById(Number(messageId)).subscribe(message => {
        this.message = message;
  
        // Check if sender exists before accessing properties
        if (this.message && this.message.sender) {
          console.log('Sender Username:', this.message.sender.username);
        } else {
          console.log('Sender not found or is null');
        }
      });
    }
  }}