import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; //Inclusão do módulo Formu
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CourseListComponent } from './courses/course-list.component';
import { StarComponent } from './courses/star/star.component';
import { ReplacePipe } from './pipe/replace.pipe';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { Error404Component } from './error-404/error-404.component';
import { CourseInfoComponent } from './courses/course-info.component';

@NgModule({
  declarations: [
    AppComponent, // references AppComponent Class in app.component.ts
    CourseListComponent, // references CourseListComponent Class in course-list.component.ts
    StarComponent,
    ReplacePipe, // Imports created pipe to the project
    NavBarComponent,
    Error404Component,
    CourseInfoComponent
  ],
  imports: [ // Imports only modules
    BrowserModule,
    FormsModule, // Module implementation to be imported
    HttpClientModule,
    RouterModule.forRoot([ // Declares an array of routes that will be initalized by the begining of the aplication
      {
        path: '', redirectTo: 'courses', pathMatch: 'full' // When in the root of the aplication (''), redirect to route courses. The path match must be full (specific case for routes)
      },
      {
        path: 'courses', component: CourseListComponent // makes the use of select not mandatory, in classes
      },
      {
        path: 'courses/info/:id', component: CourseInfoComponent // Explicits that an attribute shall be passed in the request by preceding with ':'
      },
      {
        path: '**', component: Error404Component // Adds an generic path for not found components
      }
    ]/*, { enableTracing: true }*/),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
