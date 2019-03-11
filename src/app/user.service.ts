import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  name = '';
  category = '';
  score = 0;

  constructor() { }

  setName(name: string) {
      this.name = name;
  }

  setCategory(category: string) {
      this.category = category;
  }

  setScore (score: number) {
      this.score = score;
  }

  getUser() {
    
  }
}