import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { // Defines attributes for the loaded aplication
  title = 'learn-angular-course-manager';
  name: string = 'João';
  name2: string = 'Pedro';
}