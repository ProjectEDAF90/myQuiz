import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-quiz-page',
  templateUrl: './quiz-page.component.html',
  styleUrls: ['./quiz-page.component.css']
})
export class QuizPageComponent implements OnInit, OnDestroy {
  private subsc;
  data$: any;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.subsc = this.data.getQuestions().subscribe(
      data => { console.log(JSON.stringify(data)); this.data$ = data['results']; }
    )
    console.log("hej")
  }

  ngOnDestroy(): void {
    if (this.subsc) {
      this.subsc.unsubscribe();
      this.subsc = null;
    }
  }

}
