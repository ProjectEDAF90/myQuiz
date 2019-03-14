import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataService } from '../data.service';
import { UserService } from '../user.service';
import { UserListService } from '../userlist.service';



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


  constructor(private data: DataService, private user: UserService, private userlist: UserListService) { }


  strReplace(s: any) {
    var newStr = s.replace(/&quot;/g, '"');
    var newStr2 = newStr.replace(/&#039;/g, "'");
    var newStr3 = newStr2.replace(/&ocirc;/g, "ô");
    var newStr4 = newStr3.replace(/&Aring;/g, "å");
    return newStr4;
  }

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
    if (this.counter <= 9) {
      return this.strReplace(this.question[this.counter]);
    }
  }

  checkAnswer(answer: String) {
    if (answer === this.answer[this.counter]) {
      this.result++;
    }
  }

  nextQuestion() {
    if (this.counter <= 9) {
      this.counter++;
    }
  }

  showResult() {
    if (this.counter === 10) {
      this.user.setScore(this.result);
      return "You scored: " + this.result + "/10, well done!"
    }
  }

  reset() {
    this.userlist.addUser(this.user);
    this.question = [],
    this.answer = [],
    this.counter = 0
    this.result = 0;
  }


  ngOnDestroy(): void {
    if (this.subsc) {
      this.subsc.unsubscribe();
      this.subsc = null;
    }
  }

}