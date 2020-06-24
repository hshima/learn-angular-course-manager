import { Component, OnInit } from '@angular/core'; // Imports Decorator that describes what will the @Component be 
import { Course } from './course';

@Component({
    selector: 'app-course-list', // tag name to be referenced to access this class
    //template: '<h2>Course List</h2>' // Static component
    templateUrl: './course-list.component.html' // Aplies reponsibility segregation, so static content won't be stored in this code

})

export class CourseListComponent implements OnInit {
    // 'export' Allows class to other files to reference this class
    // Interface OnInit inicia o componente assim que criado

    courses: Course[] = [];
    ngOnInit(): void { //permite adicionar tarefas para inicialização do componente da interface
        this.courses = [
            {
                id: 1,
                name: 'Angular: Forms',
                imageURL: '/assets/images/forms.png',
                price: 99.99,
                code: 'QWERTY',
                duration: 120,
                rating: 3.4,
                releasedDate: 'December, 2, 2019'
            },
            {
                id: 2,
                name: 'Angular: HTTP',
                imageURL: '/assets/images/http.png',
                price: 57.99,
                code: 'WERTYU',
                duration: 80,
                rating: 4.5,
                releasedDate: 'December, 4, 2019'
            }
        ]

    }

}