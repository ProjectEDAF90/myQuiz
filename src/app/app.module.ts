import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms"; // <-- NgModel lives here

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FrontPageComponent } from "./front-page/front-page.component";
import { RouterModule, Routes } from "@angular/router";
import { CategoryPageComponent } from "./category-page/category-page.component";

@NgModule({
  declarations: [AppComponent, FrontPageComponent, CategoryPageComponent],

  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
