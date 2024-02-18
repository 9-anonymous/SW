import { Component,OnInit } from '@angular/core';
import { MessageService } from '../../message.service';
import { NgModule } from '@angular/core';

// Apply @Component decorator to the ContactListComponent class
@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent {
  messages: any[] = [];

constructor(private messageService: MessageService) { }

  ngOnInit(): void {
    this.messageService.getMessages().subscribe(response => {
      this.messages = response;
    });
  }

}
