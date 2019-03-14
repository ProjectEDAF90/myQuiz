import { Component, Input, OnInit } from '@angular/core';
import { UserService } from '../user.service';


@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.css']
})
export class StartPageComponent implements OnInit {
 
  
  constructor(private user: UserService) {

  }

  setName(name: any) {
    this.user.setName(name);
  }

  ngOnInit() {

  }

}