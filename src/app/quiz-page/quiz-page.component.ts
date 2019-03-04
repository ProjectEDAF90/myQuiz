import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-quiz-page',
  templateUrl: './quiz-page.component.html',
  styleUrls: ['./quiz-page.component.css']
})
export class QuizPageComponent implements OnInit {

  data$: Object;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getQuestions().subscribe(
      data => this.data$ = data
    )
    console.log(QuizPageComponent)
  }

}
