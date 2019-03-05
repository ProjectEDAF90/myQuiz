import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataService } from '../data.service';
import { ChangeDetectorRef } from '@angular/core';
import { lookup } from 'dns';


@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit, OnDestroy {
  private subsc;
  input: any = [];
  question: any = [];
  answer: any = [];
  counter = 0;
  result = 0;

  constructor(private data: DataService, private cdRef: ChangeDetectorRef) { }



  ngOnInit() {
    this.subsc = this.data.getData().subscribe(
      data => { this.input = data['results']; this.loopQuestions(); }
    )
  }

  loopQuestions() {
    this.input.forEach(e => {
      this.question.push(e.question);
      this.answer.push(e.correct_answer);
    });
  }

  generateQuestion() {
    return this.question[this.counter];
  }

  checkAnswer(answer: String) {
    if (answer === this.answer[this.counter]) {
      this.result++;
      
    }
  }

  nextQuestion() {
    this.counter++;
  }


  ngOnDestroy(): void {
    if (this.subsc) {
      this.subsc.unsubscribe();
      this.subsc = null;
    }
  }

}
