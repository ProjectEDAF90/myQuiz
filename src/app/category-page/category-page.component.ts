import { Component, OnInit } from '@angular/core';
import {MatButtonModule} from '@angular/material/button'
import { DataService } from '../data.service';
import {User} from '../user';
import { StartPageComponent } from '../start-page/start-page.component';



@Component({
  selector: 'app-category-page',
  templateUrl: './category-page.component.html',
  styleUrls: ['./category-page.component.css']
})
export class CategoryPageComponent implements OnInit {

  constructor(private data: DataService) { }

  setChoice(choice: any) {
    this.data.setChoice(choice);
  }
  


  ngOnInit() {
  }

}
