import { Component, OnInit } from '@angular/core';
import { Student } from '../../../app/student';
import { StudentService } from '../../services/student-service';
import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'list-students',
    templateUrl: './list-students.html',
    styleUrls: ['./list-students.component.css'],
    providers: [StudentService]

})
export class ListStudent implements OnInit {

    students: Student[];
    observableStudents: Observable<Student[]>;
    errorMessage: string;

    constructor(private studentService: StudentService) {}

    ngOnInit(): void {
        this.observableStudents = this.studentService.getStudents();
        this.observableStudents.subscribe(
            students => this.students = students,
            error => this.errorMessage = <any>error
        );
    }
}
