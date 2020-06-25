import { Component, OnInit } from '@angular/core'; // Imports Decorator that describes what will the @Component be 
import { Course } from './course';
import { CourseService } from './course.service';

@Component({
    selector: 'app-course-list', // tag name to be referenced to access this class
    //template: '<h2>Course List</h2>' // Static component
    templateUrl: './course-list.component.html' // Aplies reponsibility segregation, so static content won't be stored in this code

})

export class CourseListComponent implements OnInit {
    // 'export' Allows class to other files to reference this class
    // Interface OnInit inicia o componente assim que criado

    _courses: Course[] = [];

    _filterBy: string;

    constructor(private courseService: CourseService) { // By finding a constructor of the same type as an electible one, a instance of the constructor type shall be injected

    }

    filteredCourses: Course[] = [];
    ngOnInit(): void { // Allows adition of initialization tasks in the Component Interface
        this._courses = this.courseService.retrieveAll();
        this.filteredCourses = this._courses.filter((course: Course) => course.name.toLowerCase().indexOf(this._filterBy.toLocaleLowerCase()));
    }

    set filter(value: string){
        this._filterBy = value;
    }

    get filter(){
        return this._filterBy;
    }
}