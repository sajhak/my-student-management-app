import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Student } from '../student';
import { STUDENTS } from './mock-students';

@Injectable()
export class StudentService {

    private baseUrl = 'http://localhost:8080';
    constructor(private http: Http) {}

    getStudents(): Observable<Student[]> {
        const st = this.http
          .get(`${this.baseUrl}/students`)
          .map(mapStudents)
          .catch(handleError);
        return st;
    }
}

function mapStudents(response: Response): Student[] {
    return response.json().map(toStudent);
}

function toStudent(st: any): Student {
    const student = <Student>({
        id: st.id,
        email: st.email,
        first_name: st.firstName,
        last_name: st.lastName,
        date_of_birth: new Date(),
        address: st.address,
        courses: st.notes,
        telephone: st.telephone
    });
    return student;
}

function handleError (error: any) {
    const errorMsg = error.message || `Error occurred!`;
    console.error(errorMsg);
    return Observable.throw(errorMsg);
}
