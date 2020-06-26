import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Course } from './course';
import { CourseService } from './course.service';

@Component({
    templateUrl: './course-info.component.html'
})
export class CourseInfoComponent implements OnInit {

    course: Course;

    constructor(
        private activeRoute: ActivatedRoute,
        private courseService: CourseService) { }

    ngOnInit(): void {
        this.course = this.courseService.retrieveById(
            + //converts a string to number
            this.activeRoute // From the actual route,
                .snapshot // take a snapshot from the object
                .paramMap // from the object, take parameters
                .get('id') // which matches the id
        )
    }

}