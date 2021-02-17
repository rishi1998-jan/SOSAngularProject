



import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
/**
 * ActivatedRoute is used to read route parameters
 */
import { ActivatedRoute } from "@angular/router";
import { StudentService } from '../service/student.service';

/**
 * College controller
 *
 * @author Sunil Sahu
 * @Copyright (c) SunilOS Infotech Pvt Ltd*
*/

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  //College form
  form = {
    "id": 0,
    "firstName": "",
    "lastName": "",
    "dob": "",
    "mobileNumber": "",
    "email": "",
    "college_ID": 0,
  };

  //Input errors
  inputError = {
    "firstName": "",
    "lastName": "",
    "dob": "",
    "mobileNumber": "",
    "email": "",
    "college_ID": 0,
  
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
  constructor(private aroute: ActivatedRoute, private router: Router, private service: StudentService) { }

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
    //console.log("--------------------------------------->",this.form)
    this.service.save(this.form, function (res, error) {
      console.log("--------------------------------------->",res)
      
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
          "firstName": "",
          "lastName": "",
          "dob": "",
          "mobileNumber": "",
          "email": "",
          "college_ID": 0,
        };
      }else{
        _self.message = "Data Error";
       // _self.inputError = res.inputerror
      }
    });
  }
  
  preloadData=[]
  preload() {
    var _self = this;
    this.service.preload( function (res, error) {
      if (error) {
        alert("Error:" + error.message); 
        return;
      }
     
      _self.preloadData=res.preloadList ;
      // console.log("------------------------->",res.preloadList)
    });

  }

  /**
   * Go to search page
   */
  search() {
    this.router.navigateByUrl('/studentlist');
  }
  reset() {
    this.form = {
      "id": 0,
      "firstName": "",
      "lastName": "",
      "dob": "",
      "mobileNumber": "",
      "email": "",
      "college_ID": 0
    };

  }


}
