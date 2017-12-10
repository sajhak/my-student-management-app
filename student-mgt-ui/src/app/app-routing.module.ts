import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListStudentComponent } from './components/students/list-students';
import { CreateStudentComponent } from './components/students/create-students';
import { UpdateStudentComponent } from './components/students/update-students';

const routes: Routes = [
    { path: 'studentlist', component: ListStudentComponent },
    { path: 'student/:id', component: UpdateStudentComponent },
    { path: 'studentadd', component: CreateStudentComponent }
];
@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}
