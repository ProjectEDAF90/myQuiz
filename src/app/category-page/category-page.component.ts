import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button'
import { DataService } from '../data.service';
import { UserService } from '../user.service';



@Component({
  selector: 'app-category-page',
  templateUrl: './category-page.component.html',
  styleUrls: ['./category-page.component.css']
})
export class CategoryPageComponent implements OnInit {

  constructor(private data: DataService, private user: UserService) { }

  setChoice(choice: any) {
    this.data.setChoice(choice);
    this.user.setCategory(choice);
  }

  
  ngOnInit() {

  }

}
