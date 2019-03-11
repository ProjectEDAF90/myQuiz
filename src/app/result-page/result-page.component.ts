import { Component, OnInit, ViewChild } from "@angular/core";
import { MatPaginator, MatSort } from "@angular/material";
import { ResultPageDataSource } from "./result-page-datasource";

@Component({
  selector: "app-result-page",
  templateUrl: "./result-page.component.html",
  styleUrls: ["./result-page.component.css"]
})
export class ResultPageComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: ResultPageDataSource;

  users: any = [];


  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ["Name", "Score", "Category"];

  
  ngOnInit() {
    this.dataSource = new ResultPageDataSource(this.paginator, this.sort);
  }
}
