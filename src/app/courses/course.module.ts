import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CourseListComponent } from './course-list.component';
import { CourseInfoComponent } from './course-info.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { StarModule } from '../shared/component/star/star.module';
import { AppPipeModule } from '../shared/pipe/app-pipe.module';

@NgModule({
    declarations: [
        CourseListComponent,
        CourseInfoComponent
    ],
    imports: [
        CommonModule,
        StarModule,
        FormsModule,
        AppPipeModule,
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