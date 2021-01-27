


import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

//import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
// import { MarksheetListComponent } from './marksheet-list/marksheet-list.component';
import { MarksheetComponent } from './marksheet/marksheet.component';
import { MarksheetService } from './service/marksheet.service';
import { PipeTestComponent } from './pipe-test/pipe-test.component';
import { RsPipe } from './pipe-test/rs';
import { DocumentComponent } from './document/document.component';
import { DocumentService } from './service/document.service';
import { MyDirDirective } from './my-dir.directive';
// import { RoleComponent } from './role/role.component';
import { CollegeComponent } from './college/college.component';
import { CollegeListComponent } from './college-list/college-list.component';
import { OneComponent } from './one/one.component';
import { TwoComponent } from './two/two.component';
import { DataComponent } from './data/data.component';
import { RoleComponent } from './role/role.component';
import { RoleListComponent } from './role-list/role-list.component';
import { CourseComponent } from './course/course.component';
import { CourseListComponent } from './course-list/course-list.component';
import { StudentComponent } from './student/student.component';
import { StudentListComponent } from './student-list/student-list.component';
import { SubjectComponent } from './subject/subject.component';
import { SubjectListComponent } from './subject-list/subject-list.component';
import { UserComponent } from './user/user.component';
import { UserListComponent } from './user-list/user-list.component';
import { AddfacultyComponent } from './addfaculty/addfaculty.component';
import { AddfacultyListComponent } from './addfaculty-list/addfaculty-list.component';
import { TimeTableComponent } from './timetable/timetable.component';
import { TimeTableListComponent } from './timetable-list/timetable-list.component';
import { MenuComponent } from './menu/menu.component';
import { MarksheetListComponent } from './marksheet-list/marksheet-list.component';
import { RegistrationComponent } from './registration/registration.component';


/**
 * Application module configure application conponents
 *
 * @author Sunil Sahu
 * @Copyright (c) SunilOS Infotech Pvt Ltd
 *
 */
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    WelcomeComponent,
    MarksheetListComponent,
    MarksheetComponent,
    PipeTestComponent,
    RsPipe,
    DocumentComponent,
    MyDirDirective,
    // RoleComponent,
    CollegeComponent,
    CollegeListComponent,
    OneComponent,
    TwoComponent,
    DataComponent,
    RoleComponent,
    RoleListComponent,
    CourseComponent,
    CourseListComponent,
    StudentComponent,
    StudentListComponent,
    SubjectComponent,
    SubjectListComponent,
    UserComponent,
    UserListComponent,
    AddfacultyComponent,
    AddfacultyListComponent,
    TimeTableComponent,
    TimeTableListComponent,
    MenuComponent,
    MarksheetListComponent,
    RegistrationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
    //  ReactiveFormsModule,
  ],
  providers: [
    MarksheetService,
    DocumentService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
