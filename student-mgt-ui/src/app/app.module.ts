import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { ListStudent } from './components/students/list-students';

import { Component } from '@angular/core/src/metadata/directives';
import { StudentService } from '../app/services/student-service';


@NgModule({
  declarations: [
    AppComponent,
    ListStudent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: 'studentlist',
        component: ListStudent
      }
    ]
    )
  ],
  providers: [StudentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
