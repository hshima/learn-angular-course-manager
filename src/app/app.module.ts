import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; //Inclusão do módulo Formu

import { AppComponent } from './app.component';
import { CourseListComponent } from './courses/course-list.component';

@NgModule({
  declarations: [
    AppComponent, // references AppComponent Class in app.component.ts
    CourseListComponent // references CourseListComponent Class in course-list.component.ts
  ],
  imports: [
    BrowserModule,
    FormsModule //Implementação do módulo
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
