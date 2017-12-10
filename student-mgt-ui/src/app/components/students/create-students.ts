import { Component, OnInit, NgZone } from '@angular/core';
import { StudentService } from '../../services/student-service';
import { Student } from '../../student';
import { Router } from '@angular/router';

@Component({
    selector: 'create-students',
    templateUrl: './create-students.html',
    styleUrls: ['./create-students.css']
})
export class CreateStudent implements OnInit {

    student = new Student();
    students: Student[];
    errorMessage: string;
    successMessage: string;

    constructor(private studentService: StudentService,
                private zone: NgZone,
                private router: Router) {}

    ngOnInit(): void {
    }

    fetchStudents(): void {
        this.studentService.getStudents()
        .subscribe(
            students => this.students = students,
            error => this.errorMessage = <any>error
        );
    }

    addStudent(): void {
        console.log('adding student...' + JSON.stringify(this.student));
        this.studentService.saveStudent(this.student)
            .subscribe( student => {
                this.successMessage = 'Student successfully added ';
                this.fetchStudents();
                window.confirm(this.successMessage);
                this.router.navigateByUrl('/studentlist');

            },
            error => this.errorMessage = <any>error);
      }

}
