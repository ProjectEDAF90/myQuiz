import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CategoryPageComponent } from './category-page/category-page.component';
import { QuizPageComponent } from './quiz-page/quiz-page.component';
import {HttpClientModule} from '@angular/common/http';
import { ResultComponent } from './result/result.component';

@NgModule({
  declarations: [
    AppComponent,
    CategoryPageComponent,
    QuizPageComponent,
    ResultComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
