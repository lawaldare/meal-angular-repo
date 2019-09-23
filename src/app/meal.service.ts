import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MealService  {

  apiBaseURL = 'https://www.themealdb.com/api/json/v1/1/random.php';

  constructor(private http: HttpClient) { }

  getMeal(): Observable <any> {
    return this.http.get(this.apiBaseURL) as Observable<any>;
  }
}
