import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ListStudent } from './components/students/list-students';
import { CreateStudent } from './components/students/create-students';
import { AppRoutingModule } from './app-routing.module';

import { Component } from '@angular/core/src/metadata/directives';
import { StudentService } from '../app/services/student-service';


@NgModule({
  declarations: [
    AppComponent,
    ListStudent,
    CreateStudent
  ],
  imports: [
    HttpModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [StudentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
