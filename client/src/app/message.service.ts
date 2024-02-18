// src/app/message.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private apiUrl = 'http://localhost:8000/messages';

  constructor(private http: HttpClient) {}

  getUsernames(): Observable<string[]> {
    return this.http.get<string[]>('http://localhost:8000/users');
  }

  getMessages(messageId?: string): Observable<any> {
    const url = messageId ? `${this.apiUrl}/${messageId}` : this.apiUrl;
    return this.http.get<any>(url);
  }

  sendMessage(title: string, content: string, receiver: string): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');

    // Set sender_id manually to 1
    const senderId = 1;

    const messageData = { title, content, receiver, sender_id: senderId };
    return this.http.post<any>(this.apiUrl, messageData, { headers });
  }
}