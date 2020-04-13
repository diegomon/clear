import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeesModule } from './employees/employees.module';
import { CoreModule } from './core/core.module';
import {QuestionnaireModule} from './questionnaire/questionnaire.module';
import {MainModule} from './main/main.module';
import {MapsModule} from './maps/maps.module';
import {NewsModule} from './news/news.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    EmployeesModule,
    QuestionnaireModule,
    MainModule,
    MapsModule,
    NewsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
