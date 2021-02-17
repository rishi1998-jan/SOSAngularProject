



import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
/**
 * ActivatedRoute is used to read route parameters
 */
import { ActivatedRoute } from "@angular/router";
import { CollegeService } from '../service/college.service';

/**
 * College controller
 *
 * @author Sunil Sahu
 * @Copyright (c) SunilOS Infotech Pvt Ltd*
*/
@Component({
  selector: 'app-college',
  templateUrl: './college.component.html',
  styleUrls: ['./college.component.css']
})
export class CollegeComponent implements OnInit {

  //College form
  form = {
    "id": 0,
    "collegeName": "",
    "collegeAddress": "",
    "collegeState": "",
    "collegeCity": "",
    "collegePhoneNumber": "",
    
  };

  //Input errors
  inputError = {
    "collegeName": "",
    "collegeAddress": "",
    "collegeState": "",
    "collegeCity": "",
    "collegePhoneNumber": ""
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
  constructor(private aroute: ActivatedRoute, private router: Router, private service: CollegeService) { }

  /**
   * Display record if primary key is received
   */
  ngOnInit() {
    console.log("Display record if primary key is received");
    var _self = this;
    this.form.id = parseInt(this.aroute.snapshot.paramMap.get("id"));
    if (!isNaN(this.form.id) && this.form.id > 0) {
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
    console.log("Save a record");
    if (isNaN(this.form.id)) {
      this.form.id = 0;
    }
    var _self = this;
    this.service.save(this.form, function (res, error) {
      if (res.data.error) {
        _self.success = false;
        _self.message = res.data.message;
        _self.inputError = res.form.inputError;
        return;
      }
      _self.success = res.data.message;
      if (_self.success) {
        _self.message = "Data is Successfully saved";
        _self.inputError = {
          "collegeName": "",
          "collegeAddress": "",
          "collegeState": "",
          "collegeCity": "",
          "collegePhoneNumber": ""
        };
      } else {
        _self.message = "Data Error";
        // _self.inputError = res.inputerror
      }
    });
  }

  /**
   * Go to search page
   */
  search() {
    console.log("search a record");
    this.router.navigateByUrl('/collegelist');
  }
  reset() {

    this.form = {
      "id": 0,
      "collegeName": "",
      "collegeAddress": "",
      "collegeState": "",
      "collegeCity": "",
      "collegePhoneNumber": "",
    };
    this.inputError = {
      "collegeName": "",
      "collegeAddress": "",
      "collegeState": "",
      "collegeCity": "",
      "collegePhoneNumber": ""
    };
  }


}
