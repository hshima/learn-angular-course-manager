import { Component } from '@angular/core'; // Imports Decorator that describes what will the @Component be 

@Component({
    selector: 'app-course-list', // tag name to be referenced to access this class
    //template: '<h2>Course List</h2>' // Static component
    templateUrl: './course-list.component.html' // Aplies reponsibility segregation, so static content won't be stored in this code
    
})

export class CourseListComponent { // Allows class to other files to reference this class



}