import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
 providedIn: 'root'
})
export class NotificationService {
 private apiUrl = 'http://localhost:8000/notifications';

 constructor(private http: HttpClient) {}

 getUnreadNotifications(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/unread`);
 }

 markNotificationsAsRead(): Observable<any> {
    return this.http.post(`${this.apiUrl}/mark-as-read`, {});
 }
}
