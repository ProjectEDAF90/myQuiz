import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoryPageComponent } from './category-page/category-page.component';
import { QuizPageComponent } from './quiz-page/quiz-page.component';

const routes: Routes = [
  {path: 'categories', component: CategoryPageComponent},
  {path: 'quiz', component: QuizPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
