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
  getMessagesForUser(receiverUsername: string): Observable<any[]> {
    return this.http.get<any[]>(`http://localhost:8000/messages/user/${receiverUsername}`);
  }

 getMessageById(id: number): Observable<any> {
  return this.http.get<any>(`http://localhost:8000/messages/id/${id}`);
}

sendMessage(formData: FormData): Observable<any> {
  const senderId = localStorage.getItem('userId') || 'defaultSenderId';
  (formData as any).set('sender_id', senderId);
  for (const [key, value] of (formData as any).entries()) {
    console.log(`${key}: ${value}`);
  }
  return this.http.post<any>(this.apiUrl, formData);
}
}