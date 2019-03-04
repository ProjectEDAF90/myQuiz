import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getQuestions() {
    return this.http.get('https://opentdb.com/api.php?amount=15&category=15&fbclid=IwAR3-ZSL1Gxuo1xTjmfCeH0tNwVVb_8MuYSucPg16JjxVJtHKOOLFKpb1bdE')
  }
}
