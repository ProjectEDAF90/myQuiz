import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CategoryPageComponent } from "./category-page/category-page.component";
import { ResultPageComponent } from "./result-page/result-page.component";
import { QuestionsComponent } from "./questions/questions.component";
const routes: Routes = [
  { path: "questions", component: QuestionsComponent },
  { path: "categories", component: CategoryPageComponent },
  { path: "result", component: ResultPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
