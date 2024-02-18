// src/app/contact/contact-message/contact-message.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MessageService } from '../../message.service';

@Component({
  selector: 'app-contact-message',
  templateUrl: './contact-message.component.html',
  styleUrls: ['./contact-message.component.css']
})
export class ContactMessageComponent implements OnInit {
  message: any = {};

  constructor(private route: ActivatedRoute, private messageService: MessageService) { }

  ngOnInit(): void {
    const messageId = this.route.snapshot.paramMap.get('id');
    
    if (messageId) {
      this.messageService.getMessages(messageId).subscribe(response => {
        this.message = response;
      });
    }
  }
}
