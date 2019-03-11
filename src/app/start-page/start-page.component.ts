import { Component, OnInit } from '@angular/core';
import { User } from "../user";

@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.css']
})
export class StartPageComponent implements OnInit {
  user: User = {
    name: "",
    score: 0,
    category: ""
  }

  constructor() { }

  ngOnInit() {
    
  }

}
