import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CourseListComponent } from './course-list.component';
import { CourseInfoComponent } from './course-info.component';
import { FormsModule } from '@angular/forms';
import { ReplacePipe } from '../pipe/replace.pipe';
import { CommonModule } from '@angular/common';
import { StarComponent } from '../courses/star/star.component';


@NgModule({
    declarations: [
        CourseListComponent,
        CourseInfoComponent,
        ReplacePipe,
        StarComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild([
            {
                path: 'courses', component: CourseListComponent // makes the use of select not mandatory, in classes
            },
            {
                path: 'courses/info/:id', component: CourseInfoComponent // Explicits that an attribute shall be passed in the request by preceding with ':'
            }
        ])
    ]
})

export class CourseModule {

}