import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private GeneralKnowledge = 'https://opentdb.com/api.php?amount=10&category=9&type=boolean'
  private ScienceComputers = 'https://opentdb.com/api.php?amount=10&category=18&type=boolean'
  private ScienceMath = 'https://opentdb.com/api.php?amount=10&category=19&type=boolean'
  private Geography = 'https://opentdb.com/api.php?amount=10&category=22&type=boolean'
  choice: any

  constructor(private http: HttpClient) { }

  setChoice(choice: any) {
    this.choice = choice;
  }

  getData() {
    if (this.choice === "GeneralKnowledge") {
      return this.http.get(this.GeneralKnowledge);
    }
    if (this.choice === "ScienceComputers") {
      return this.http.get(this.ScienceComputers);
    }
    if (this.choice === "ScienceMath") {
      return this.http.get(this.ScienceMath);
    }
    if (this.choice === "Geography") {
      return this.http.get(this.Geography);
    }
  }
}