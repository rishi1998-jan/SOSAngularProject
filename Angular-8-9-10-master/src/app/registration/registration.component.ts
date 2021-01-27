

  

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
/**
 * ActivatedRoute is used to read route parameters 
 */
import { ActivatedRoute } from "@angular/router";
import { RegistrationService } from '../service/registration.service';

/**
 * College controller
 *  
 * @author Sunil Sahu
 * @Copyright (c) SunilOS Infotech Pvt Ltd* 
*/

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
            
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
    "role_Id": 2
   
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
    "mobilenumber": ""
   
    
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
  constructor(private aroute: ActivatedRoute, private router: Router, private service: RegistrationService ) { }

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
          "mobilenumber": ""
         
         
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
      "role_Id": 2
      
    };
    
  }

  
}


