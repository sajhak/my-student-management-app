import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

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

    getStudent(id: number): Observable<Student> {
        const st = this.http
          .get(`${this.baseUrl}/students/${id}`, {headers: this.getHeaders()})
          .map(mapStudent)
          .catch(handleError);
          return st;
    }

    saveStudent(student: Student): Observable<Response> {
        return this
          .http
          .post(`${this.baseUrl}/students/`,
                JSON.stringify(student),
                {headers: this.getHeaders()})
          .catch(handleError);
    }

    udpateStudent(student: Student): Observable<Response> {
        return this
          .http
          .put(`${this.baseUrl}/students/`,
                JSON.stringify(student),
                {headers: this.getHeaders()})
           .map(res => this.extractData(res))
           .catch(handleError);
    }

    deleteStudent(id: number): Observable<Response> {
        return this
          .http
          .delete(`${this.baseUrl}/students/${id}`)
          .catch(handleError);
    }

    private getHeaders() {
        const headers = new Headers();
        headers.append('Accept', 'application/json');
        headers.append('Content-Type', 'application/json');
        return headers;
    }

    private extractData(res) {
        // TODO
    }
}

function mapStudents(response: Response): Student[] {
    return response.json().map(toStudent);
}

function mapStudent(response: Response): Student {
    return toStudent(response.json());
 }

function toStudent(st: any): Student {
    const student = <Student>({
        id: st.id,
        email: st.email,
        firstName: st.firstName,
        lastName: st.lastName,
        date_of_birth: new Date(),
        address: st.address,
        notes: st.notes,
        telephone: st.telephone
    });
    return student;
}

function handleError (error: any) {
    const errorMsg = error.message || `Error occurred!`;
    console.error(errorMsg);
    return Observable.throw(errorMsg);
}
