import { Component, OnInit, ViewChild, Input } from "@angular/core";
import { MatPaginator, MatSort } from "@angular/material";
import { ResultPageDataSource } from "./result-page-datasource";
import { User } from "../user";

@Component({
  selector: "app-result-page",
  templateUrl: "./result-page.component.html",
  styleUrls: ["./result-page.component.css"]
})
export class ResultPageComponent implements OnInit {
  user: any;

  @Input("user") userObj: User;

  constructor() {}

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: ResultPageDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ["id", "name", "score"];

  ngOnInit() {
    // this.user = {
    //   name: this.userObj.name,
    //   score: this.userObj.score,
    //   category: this.userObj.category
    // };
    this.dataSource = new ResultPageDataSource(this.paginator, this.sort);
  }
}
