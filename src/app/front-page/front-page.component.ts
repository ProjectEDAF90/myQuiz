import { Component, OnInit } from "@angular/core";
import { User } from "../user";

@Component({
  selector: "app-front-page",
  templateUrl: "./front-page.component.html",
  styleUrls: ["./front-page.component.css"]
})
export class FrontPageComponent implements OnInit {
  user: User = {
    id: 1,
    name: ""
  };
  constructor() {}

  ngOnInit() {}
}

// import { Component, OnInit } from "@angular/core";
// import { FormGroup, FormControl } from "@angular/forms";

// @Component({
//   selector: "app-front-page",
//   templateUrl: "./front-page.component.html",
//   styleUrls: ["./front-page.component.css"]
// })
// export class FrontPageComponent implements OnInit {
//   nickNameForm: FormGroup;
//   constructor() {}

//   ngOnInit() {
//     this.nickNameForm = new FormGroup({
//       fullName: new FormControl()
//     });
//   }
// }
