// contact.service.ts
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  private apiUrl = 'http://localhost:8000'; // Replace with your actual API URL

  constructor(private http: HttpClient) {}

  sendEmail(emailData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/send-email`, emailData);
  }
}
