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
        private activatedRoute: ActivatedRoute,
        private courseService: CourseService) { }

    ngOnInit(): void {
        this.courseService.retrieveById(
            + //converts a string to number
            this.activatedRoute // From the actual route,
                .snapshot // take a snapshot from the object
                .paramMap // from the object, take parameters
                .get('id') // which matches the id
        ).subscribe({
            next: courses => this.course = courses,
            error: err => console.log('Error: ' + err)
        });
    }
    save(): void {
        this.courseService.save(this.course)
        .subscribe({
            next: course => console.log('Saved with Success', course),
            error: err => console.log('Erro: '+ err)
        });
    }

}