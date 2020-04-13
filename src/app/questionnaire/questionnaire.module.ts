import { NgModule } from '@angular/core';
import { QuestionnairePageComponent } from './components/questionnaire-page/questionnaire-page.component';
import { QuestionnaireFormComponent } from './components/questionnaire-form/questionnaire-form.component';
import {QuestionnaireRoutingModule} from './questionnaire-routing.module';



@NgModule({
  declarations: [QuestionnairePageComponent, QuestionnaireFormComponent],
  imports: [
    QuestionnaireRoutingModule
  ]
})
export class QuestionnaireModule { }
