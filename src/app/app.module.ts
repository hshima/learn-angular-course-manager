import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; //Inclusão do módulo Formu

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule //Implementação do módulo
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
