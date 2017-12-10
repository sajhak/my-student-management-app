import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListStudent } from './components/students/list-students';


const routes: Routes = [
    { path: 'studentlist', component: ListStudent }
];
@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}
