import { Component } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { User } from "./user";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "myQuiz";

  // user: User;
  // constructor() {
  //   this.user = new User();
  //   this.user.name = "Foo Bar";
  //   this.user.category = "Software engineer";
  //   this.user.score = 100;
  // }
}
