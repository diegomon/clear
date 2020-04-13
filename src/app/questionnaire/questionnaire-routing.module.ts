import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {QuestionnairePageComponent} from './components/questionnaire-page/questionnaire-page.component';

const routes: Routes = [
  { path: 'questionnaire', component: QuestionnairePageComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuestionnaireRoutingModule { }
