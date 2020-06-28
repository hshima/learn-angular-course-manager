import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { Error404Component } from './error-404/error-404.component';
import { CourseModule } from './courses/course.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [
    Error404Component,
    AppComponent // references AppComponent Class in app.component.ts
  ],
  imports: [ // Imports only modules
    BrowserModule,
    HttpClientModule,
    CourseModule,
    CoreModule,
    RouterModule.forRoot([ // Declares an array of routes that will be initalized by the begining of the aplication
      {
        path: '', redirectTo: 'courses', pathMatch: 'full' // When in the root of the aplication (''), redirect to route courses. The path match must be full (specific case for routes)
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
