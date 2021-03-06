import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { UserListService } from '../userlist.service';


@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.css']
})
export class LeaderboardComponent implements OnInit, OnDestroy {
  private subsc;
  input: any = [];


  constructor(private userlist: UserListService) { }

  ngOnInit() {

    this.userlist.sort();
    this.subsc = this.userlist.getData().subscribe(
      data => { this.input = data; }
    )

  }

  ngOnDestroy(): void {
    if (this.subsc) {
      this.subsc.unsubscribe();
      this.subsc = null;
    }
  }

}
