


import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RoleService } from '../service/role.service';

@Component({
  selector: 'app-role-list',
  templateUrl: './role-list.component.html',
  styleUrls: ['./role-list.component.css']
})
export class RoleListComponent implements OnInit {

  //Server response message
  message = "";

  //Contains Marksheet list
  list = [];

  //Search form 
  form = {
    "name": "",
    "description": "",
    "pageNo":1,
    "listLength":0
  };

  /**
   * Injects services 
   * 
   * @param router 
   * @param service 
   */
  constructor(private router: Router, private service: RoleService) { }


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
    this.router.navigateByUrl('/role/' + id);
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
  
