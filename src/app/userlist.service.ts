
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserListService {

  userlist: any = [];
  private source = new Subject<any[]>();
  public user$ = this.source.asObservable();

  //this.loadData();

  constructor() {
  }

  addUser(user) {
    this.userlist = [...this.userlist, {...user}];
    this.source.next(this.userlist);
    this.saveData();
  }

  sort() {
    if (this.userlist !== null) {
      this.userlist.sort(function (a, b) {
        return (b.score - a.score);
      })
      
    }
  }

  loadData() {
    let localStorageItem = JSON.parse(localStorage.getItem('users'));
    if (localStorageItem != null) {
      return JSON.parse(localStorage.getItem('users'));    
    }
    return null;  
  }

  /* if (localStorage.getItem('users') != null) {
      var localStorageItem = JSON.parse(localStorage.getItem('users'));
      console.log(localStorageItem);
      this.userlist.push(localStorageItem.users                             );
      return localStorageItem.users;
    }
    return null; */

  saveData() {
    localStorage.setItem('users', JSON.stringify(this.userlist));
  }

  getData(): Observable<any[]> {
    return of(this.userlist);
  }
}