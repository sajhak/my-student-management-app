import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ListStudentComponent } from './components/students/list-students';
import { CreateStudentComponent } from './components/students/create-students';
import { UpdateStudentComponent } from './components/students/update-students';
import { AppRoutingModule } from './app-routing.module';

import { Component } from '@angular/core/src/metadata/directives';
import { StudentService } from '../app/services/student-service';


@NgModule({
  declarations: [
    AppComponent,
    ListStudentComponent,
    CreateStudentComponent,
    UpdateStudentComponent
  ],
  imports: [
    HttpModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [StudentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
