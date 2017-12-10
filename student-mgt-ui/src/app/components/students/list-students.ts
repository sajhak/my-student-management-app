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
export class ListStudentComponent implements OnInit {

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
    fetchStudents(): void {
        this.studentService.getStudents()
        .subscribe(
            students => this.students = students,
            error => this.errorMessage = <any>error
        );
    }

    deleteStudent(id): void {
        console.log('Deleting with id ' + id);
        if (window.confirm('Are you sure you want to delete ? ')) {
            // delete
            this.studentService.deleteStudent(id)
                 .subscribe( student => {
                 this.fetchStudents();
            },
            error => this.errorMessage = <any>error);
        }
    }
}
