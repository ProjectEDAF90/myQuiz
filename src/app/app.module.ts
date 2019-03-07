import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms"; // <-- NgModel lives here

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RouterModule, Routes } from "@angular/router";
import { CategoryPageComponent } from "./category-page/category-page.component";
import { QuizPageComponent } from "./quiz-page/quiz-page.component";
import { ResultPageComponent } from "./result-page/result-page.component";
import {
  MatTableModule,
  MatPaginatorModule,
  MatSortModule
} from "@angular/material";

@NgModule({
  declarations: [
    AppComponent,
    CategoryPageComponent,
    QuizPageComponent,
    ResultPageComponent
  ],

  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
