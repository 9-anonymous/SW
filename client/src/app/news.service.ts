// news.service.ts

import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  private apiKey = 'e6a7fc39b6ce4605a9c9f90df2fd330b'; // Your API Key
  private url = 'https://newsapi.org/v2/everything';

  constructor(private http: HttpClient) {}

  getCarCompanyNews(query: string, limit: number = 6): Observable<any> {
    const params = new HttpParams()
      .set('q', query)
      .set('language', 'en')
      .set('pageSize', limit.toString())
      .set('apiKey', this.apiKey);

    return this.http.get(this.url, { params }).pipe(
      map((response: any) => response.articles.slice(0, limit))
    );
  }
}
