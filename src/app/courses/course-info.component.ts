import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    templateUrl: './course-info.component.html'
})
export class CourseInfoComponent implements OnInit {

    courseId: number;

    constructor(private activeRoute: ActivatedRoute) { }

    ngOnInit(): void {
        this.courseId = + //converts a string to number
        this.activeRoute // From the actual route,
        .snapshot // take a snapshot from the object
        .paramMap // from the object, take parameters
        .get('id') // which matches the id

    }

}