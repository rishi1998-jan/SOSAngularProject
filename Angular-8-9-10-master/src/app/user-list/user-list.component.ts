



import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  //Server response message
  message = "";

  //Contains Marksheet list
  list = [];

  //Search form
  form = {
    "firstName": "",
    "login_id": "",
  };

  /**
   * Injects services
   *
   * @param router
   * @param service
   */
  constructor(private router: Router, private service: UserService) { }


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
    this.router.navigateByUrl('/user/' + id);
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
  search() {
    var _self = this;
    console.log("000000000000000000------------->",this.form)
    this.service.search(this.form, function (res, error) {
      if (error) {
        alert("Error " + res.message);
        return;
      }
      _self.list = res.data.data;
    });
  }

}
