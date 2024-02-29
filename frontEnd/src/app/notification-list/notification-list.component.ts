import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../notification.service';
import { Router } from '@angular/router';

@Component({
 selector: 'app-notification-list',
 templateUrl: './notification-list.component.html',
 styleUrls: ['./notification-list.component.css']
})
export class NotificationListComponent implements OnInit {
 notifications: any[] = [];
 showList = false;

 constructor(private router: Router, private notificationService: NotificationService) {}

 goToMessage(messageId: number): void {
  this.router.navigate(['/contact-message', messageId]);
 }
 ngOnInit(): void {
    this.notificationService.getUnreadNotifications().subscribe(notifications => {
      this.notifications = notifications;
    });
 }

 toggleList(): void {
    this.showList = !this.showList;
    if (!this.showList) {
      this.notificationService.markNotificationsAsRead().subscribe();
    }
 }
}
