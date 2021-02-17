



import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
/**
 * ActivatedRoute is used to read route parameters 
 */
import { ActivatedRoute } from "@angular/router";
import { TimeTableService } from '../service/timetable.service';

/**
 * College controller
 *  
 * @author Sunil Sahu
 * @Copyright (c) SunilOS Infotech Pvt Ltd* 
*/

@Component({
  selector: 'app-timetable',
  templateUrl: './timetable.component.html',
  styleUrls: ['./timetable.component.css']
})
export class TimeTableComponent implements OnInit {

//College form    
form = {
  "id": 0,
  "examTime": "",
  "examDate": "",
  "subject_ID": "",
  "subjectName": "",
  "course_ID": "",
  "courseName": "",
  "semester": ""
};

//Input errors
inputError = {
  "examTime": "",
  "examDate": "",
  "subject_ID": "",
  "subjectName": "",
  "course_ID": "",
  "courseName": "",
  "semester": ""
};

//Server success/fail message
message = "";



//Server error
success: boolean = true;
/**
 * Injects services 
 * 
 * @param aroute 
 * @param router 
 * @param service 
 */
constructor(private aroute: ActivatedRoute, private router: Router, private service: TimeTableService) { }

/**
 * Display record if primary key is received 
 */
ngOnInit() {
  var _self = this;
  this.form.id = parseInt(this.aroute.snapshot.paramMap.get("id"));
  if ( !isNaN(this.form.id) && this.form.id > 0) {
    this.service.get(this.form.id, function (res, error) {
      if (error) {
        alert("Error:" + error.message);
        return;
      }
      _self.form = res.data;
    });
  }
  this.preload()
}

/**
 * Save a record
 */
save() {
  if(isNaN(this.form.id)){
    this.form.id= 0;
  }
  var _self = this;
  this.service.save(this.form, function (res, error) {
    if (res.data.error) {
      _self.success = false;
      _self.message = res.data.message;
      _self.inputError=res.form.inputError;
      return;
    }
    _self.success = res.data.message;
    if(_self.success){
      _self.message = "Data is Successfully saved";
      _self.inputError = {
        "examTime": "",
        "examDate": "",
        "subject_ID": "",
        "subjectName": "",
        "course_ID": "",
        "courseName": "",
        "semester": ""
      };
    }else{
      _self.message = "Data Error";
     // _self.inputError = res.inputerror
    }
  });
}

subData=[]
courseData=[]

preload() {
  var _self = this;
  this.service.preload( function (res, error) {
    if (error) {
      alert("Error:" + error.message); 
      return;
    }
   
    _self.subData=res.subpreload;
    _self.courseData=res.coursedata
     console.log("------------------------->",res.subpreload)
  });

}

/**
 * Go to search page 
 */
search() {
  this.router.navigateByUrl('/timetablelist');
}
reset() {
  this.form = {
    "id": 0,
    "examTime": "",
    "examDate": "",
    "subject_ID": "",
    "subjectName": "",
    "course_ID": "",
    "courseName": "",
    "semester": ""  };
  
 }


}
