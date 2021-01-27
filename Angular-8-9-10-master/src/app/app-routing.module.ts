


import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { MarksheetListComponent } from './marksheet-list/marksheet-list.component';
import { MarksheetComponent } from './marksheet/marksheet.component';
import { PipeTestComponent } from './pipe-test/pipe-test.component';
import { DocumentComponent } from './document/document.component';
import { CollegeComponent } from './college/college.component';
import { CollegeListComponent } from './college-list/college-list.component';
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
import { RegistrationComponent } from './registration/registration.component';
import { OneComponent } from './one/one.component';
import { TwoComponent } from './two/two.component';

/**
 * Constant defines route of application controllers
 */
const routes: Routes = [
	{
		path: '',
		redirectTo: 'login',
		pathMatch: 'full'
	},
	{
		path: 'login',
		component: LoginComponent
	},

  {
		path: 'logout',
		component: LoginComponent
	},
  {
		path: 'sessionOut',
		component: LoginComponent
	},

  {
		path: 'welcome',
		component: WelcomeComponent
	},
	{
		path: 'marksheet',
		component: MarksheetComponent
	},
	{
		//pass route parameter :id
		path: 'marksheet/:id',
		component: MarksheetComponent
	},
	{
		path: 'marksheetlist',
		component: MarksheetListComponent
	},
	{
		path: 'college',
		component: CollegeComponent
	},
	{
		//pass route parameter :id
		path: 'college/:id',
		component: CollegeComponent
	},
	{
		path: 'collegelist',
		component: CollegeListComponent
	},
	{
		path: 'role',
		component: RoleComponent
	},
	{
		//pass route parameter :id
		path: 'role/:id',
		component: RoleComponent
	},
	{
		path: 'rolelist',
		component: RoleListComponent
	},
	{
		path: 'course',
		component: CourseComponent
	},
	{
		//pass route parameter :id
		path: 'course/:id',
		component: CourseComponent
	},
	{
		path: 'courselist',
		component: CourseListComponent
	},
	{
		path: 'student',
		component: StudentComponent
	},
	{
		//pass route parameter :id
		path: 'student/:id',
		component: StudentComponent
	},
	{
		path: 'studentlist',
		component: StudentListComponent
	},
	{
		path: 'subject',
		component: SubjectComponent
	},
	{
		//pass route parameter :id
		path: 'subject/:id',
		component: SubjectComponent
	},
	{
		path: 'subjectlist',
		component: SubjectListComponent
	},
	{
		path: 'user',
		component: UserComponent
	},
	{
		//pass route parameter :id
		path: 'user/:id',
		component: UserComponent
	},
	{
		path: 'userlist',
		component: UserListComponent
	},
	{
		path: 'addfaculty',
		component: AddfacultyComponent
	},
	{
		//pass route parameter :id
		path: 'addfaculty/:id',
		component: AddfacultyComponent
	},
	{
		path: 'addfacultylist',
		component: AddfacultyListComponent
	},
	{
		path: 'timetable',
		component: TimeTableComponent
	},
	{
		//pass route parameter :id
		path: 'timetable/:id',
		component: TimeTableComponent
	},
	{
		path: 'timetablelist',
		component: TimeTableListComponent
  }
  ,
  {
	path: 'registration',
	component: RegistrationComponent
},
	{
		path: '**',
		component: LoginComponent
	}
  ,

	{
		path: 'pipe',
		component: PipeTestComponent
	}
	,
	{
		path: 'document',
		component: DocumentComponent
	}
	,
	{
		path: 'one',
		component: OneComponent
	}
	,
	{
		path: 'two',
		component: TwoComponent
	}
];

/**
 * Angular module defines application route
 *
 * @author Sunil Sahu
 * @Copyright (c) SunilOS Infotech Pvt Ltd
 *
 */
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
