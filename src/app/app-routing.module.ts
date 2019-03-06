import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CategoryPageComponent } from "./category-page/category-page.component";
import { FrontPageComponent } from "./front-page/front-page.component";
import { ResultPageComponent } from "./result-page/result-page.component";
const routes: Routes = [
  { path: "", component: FrontPageComponent },
  { path: "categories", component: CategoryPageComponent },
  { path: "result", component: ResultPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
