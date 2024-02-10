import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http: HttpClient) { }

  getMarks(): Observable<string[]> {
    // Adjust the endpoint URL to match your Symfony backend API
    return this.http.get<any[]>('http://localhost:8000/marks').pipe(
      map(response => response.map(item => item.Mark))
    );
  }

  getModelsForMark(mark: string): Observable<string[]> {
    return this.http.get<string[]>(`http://localhost:8000/models/${mark}`);
  }
}
