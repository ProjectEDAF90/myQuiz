
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


  constructor() {
  }

  addUser(user) {
    this.userlist = [...this.userlist, { ...user }];
    this.source.next(this.userlist);
  }

  sort() {
    if (this.userlist !== null) {
      this.userlist.sort(function (a, b) {
        return (b.score - a.score);
      })

    }
  }

  getData(): Observable<any[]> {
    return of(this.userlist);
  }
}