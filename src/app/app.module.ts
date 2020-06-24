import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; //Inclusão do módulo Formu

import { AppComponent } from './app.component';
import { CourseListComponent } from './courses/course-list.component';
import { StarComponent } from './courses/star/star.component';

@NgModule({
  declarations: [
    AppComponent, // references AppComponent Class in app.component.ts
    CourseListComponent, // references CourseListComponent Class in course-list.component.ts
    StarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule // Module implementation to be imported
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
