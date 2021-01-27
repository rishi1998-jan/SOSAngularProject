

 

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
/**
 * ActivatedRoute is used to read route parameters 
 */
import { ActivatedRoute } from "@angular/router";
import { UserService } from '../service/user.service';

/**
 * College controller
 *  
 * @author Sunil Sahu
 * @Copyright (c) SunilOS Infotech Pvt Ltd* 
*/

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  //College form    
  form = {
    "id": 0,
    "firstName": "",
    "lastName": "",
    "login_id": "",
    "password": "",
    "confirmpassword": "",
    "dob": "",
    "address": "",
    "gender": "",
    "mobilenumber": "",
    "role_Id": "",
    "role_Name": ""
  };

  //Input errors
  inputError = {
    "firstName": "",
    "lastName": "",
    "login_id": "",
    "password": "",
    "confirmpassword": "",
    "dob": "",
    "address": "",
    "gender": "",
    "mobilenumber": "",
    "role_Id": "",
    "role_Name": ""
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
  constructor(private aroute: ActivatedRoute, private router: Router, private service: UserService) { }

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
        _self.message = "Record is successfully saved..";
        _self.inputError = {
          "firstName": "",
          "lastName": "",
          "login_id": "",
          "password": "",
          "confirmpassword": "",
          "dob": "",
          "address": "",
          "gender": "",
          "mobilenumber": "",
          "role_Id": "",
          "role_Name": ""  
           };
      }else{
        _self.message = "Data Error";
       // _self.inputError = res.inputerror
      }
    });
  }

  /**
   * Go to search page 
   */
  search() {
    this.router.navigateByUrl('/userlist');
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
      console.log("------------------------->",res.preloadList)
    });

  }
  reset() {
    this.form = {
      "id": 0,
      "firstName": "",
      "lastName": "",
      "login_id": "",
      "password": "",
      "confirmpassword": "",
      "dob": "",
      "address": "",
      "gender": "",
      "mobilenumber": "",
      "role_Id": "",
      "role_Name": ""
    };
    
  }

  
}
