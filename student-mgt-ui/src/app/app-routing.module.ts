import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListStudent } from './components/students/list-students';
import { CreateStudent } from './components/students/create-students';


const routes: Routes = [
    { path: 'studentlist', component: ListStudent },
    // { path: 'student/:id', component: CreateStudent }
    { path: 'student/add', component: CreateStudent }
];
@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}
