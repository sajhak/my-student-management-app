import { Component, OnInit} from '@angular/core';
import { StudentService } from '../../services/student-service';
import { Student } from '../../student';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
    selector: 'update-students',
    templateUrl: './create-students.html',
    styleUrls: ['./create-students.css']
})
export class UpdateStudentComponent implements OnInit {

    student = new Student();
    id: number;
    private sub: any;
    errorMessage: string;
    successMessage: string;
    students: Student[];

    constructor(private studentService: StudentService,
        private route: ActivatedRoute,
        private router: Router) {}

    ngOnInit(): void {
        this.sub = this.route.params.subscribe(params => {
            this.id = +params['id']; // (+) converts string 'id' to a number
        });
        this.getStudent(this.id);
    }

    getStudent(id): void {
        console.log('Getting the student with id ' + id);
        this.studentService.getStudent(id)
        .subscribe(
            student => this.student = student,
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

    saveStudent(): void {
        console.log('updating student...' + JSON.stringify(this.student));
        this.studentService.saveStudent(this.student)
            .subscribe( student => {
                this.successMessage = 'Student successfully updated ';
                this.fetchStudents();
                window.confirm(this.successMessage);
                this.router.navigateByUrl('/studentlist');

            },
            error => this.errorMessage = <any>error);
    }
}
