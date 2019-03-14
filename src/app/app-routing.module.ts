import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CategoryPageComponent } from "./category-page/category-page.component";
import { LeaderboardComponent } from "./leaderboard/leaderboard.component";
import { QuestionsComponent } from './questions/questions.component';
import { StartPageComponent } from './start-page/start-page.component';

const routes: Routes = [
  {
    path: '',
    component: StartPageComponent
  },
  {
    path: "questions",
    component: QuestionsComponent
  },
  {
    path: "categories",
    component: CategoryPageComponent
  },
  {
    path: "result",
    component: LeaderboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
