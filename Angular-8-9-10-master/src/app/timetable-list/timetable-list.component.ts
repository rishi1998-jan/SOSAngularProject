



import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TimeTableService } from '../service/timetable.service';

@Component({
  selector: 'app-timetable-list',
  templateUrl: './timetable-list.component.html',
  styleUrls: ['./timetable-list.component.css']
})
export class TimeTableListComponent implements OnInit {

//Server response message
message = "";

//Contains Marksheet list
list = [];

//Search form
form = {
  "subjectName": "",
  "pageNo":1,
  "listLength":0
    
};

// form = {
//   "id": 0,
//   "examTime": "",
//   "examDate": "",
//   "subject_ID": "",
//   "subjectName": "",
//   "course_ID": "",
//   "courseName": "",
//   "semester": ""
// };

/**
 * Injects services
 *
 * @param router
 * @param service
 */
constructor(private router: Router, private service: TimeTableService) { }


/**
 * Loads list
 */
ngOnInit() {
  this.search(); //Loads list
}

/**
 * Edits a Marksheet
 *
 * @param id
 */
edit(id) {
  this.router.navigateByUrl('/timetable/' + id);
}

/**
 * Deletes a record
 * @param id
 */
delete(id) {
  var _self = this;
  this.service.delete(id, function (res, error) {
    if (res.data.error) {
      alert("Error " + res.data.message);
      return;
    }else{
      _self.message = res.data.message
    }
    _self.search();
  });
}

/**
 * Searches and get list
 */
next(){
  this.form["pageNo"]++;
  this.search()
 }
 previous(){
   this.form["pageNo"]--;
   this.search()
  }
  search() {
    var _self = this;
    this.service.search(this.form, function (res, error) {
      if (error) {
        alert("Error " + res.message);
        return;
      }
      _self.list = res.result.data;
      _self.form["listLength"]=_self.list.length
  
    });
  }

}