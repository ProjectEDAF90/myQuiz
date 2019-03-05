import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private url = 'https://opentdb.com/api.php?amount=10&category=9&type=boolean'
  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get(this.url);
  }
}
