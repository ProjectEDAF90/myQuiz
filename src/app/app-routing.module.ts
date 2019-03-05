import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoryPageComponent } from './category-page/category-page.component';
import { QuizPageComponent } from './quiz-page/quiz-page.component';
import { QuestionsComponent } from './questions/questions.component';


const routes: Routes = [
  { path: 'categories', component: CategoryPageComponent },
  { path: 'questions', component: QuestionsComponent},
  { path: 'quiz', component: QuizPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
