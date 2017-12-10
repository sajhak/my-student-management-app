import { Component, OnInit } from '@angular/core';
import { Student } from '../../../app/student';
import { StudentService } from '../../services/student-service';

@Component({
    selector: 'list-students',
    templateUrl: './list-students.html',
    providers: [StudentService]

})
export class ListStudent implements OnInit {

    students: Student[] = [];

    constructor(private studentService: StudentService) {}

    ngOnInit(): void {
        this.studentService.getStudents()
            .then(students => this.students = students);
            // TODO error handling
    }
}
