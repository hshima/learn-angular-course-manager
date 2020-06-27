import { Component, OnInit } from '@angular/core'; // Imports Decorator that describes what will the @Component be 
import { Course } from './course';
import { CourseService } from './course.service';

@Component({
    selector: 'app-course-list', templateUrl: './course-list.component.html' // Aplies reponsibility segregation, so static content won't be stored in this code
})

export class CourseListComponent implements OnInit {
    // 'export' Allows class to other files to reference this class
    // Interface OnInit inicia o componente assim que criado

    filteredCourses: Course[] = [];

    _courses: Course[] = [];

    _filterBy: string;

    constructor(private courseService: CourseService) { } // By finding a constructor of the same type as an electible one, a instance of the constructor type shall be injected

    ngOnInit(): void { // Allows adition of initialization tasks in the Component Interface
        this.retrieveAll();
    }

    retrieveAll(): void {
        this.courseService
            .retrieveAll()
            .subscribe({ // makes a subscribe in this observable
                next: // Do after the return of a succesful response
                    courses => {
                        this._courses = courses; // Compares courses from course-list.component.ts
                        this.filteredCourses = this._courses // certifies that the filtered courses will be loaded only after the execution of the step above
                    },
                    error: err => console.error(err)
            });

    }

    set filter(value: string) {
        this._filterBy = value;
        this.filteredCourses = this._courses.filter((course: Course) => course.name.toLocaleLowerCase() // Compares the name of each element in the array
            .indexOf(this._filterBy.toLocaleLowerCase()) > -1); // to the input element in filter
    }

    get filter() {
        return this._filterBy;
    }
}