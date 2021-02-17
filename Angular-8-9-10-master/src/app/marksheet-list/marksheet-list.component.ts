import { Component, OnInit } from '@angular/core';
import { Router } from '../../../node_modules/@angular/router';
import { MarksheetService } from '../service/marksheet.service';

@Component({
  selector: 'app-marksheet-list',
  templateUrl: './marksheet-list.component.html',
  styleUrls: ['./marksheet-list.component.css']
})
export class MarksheetListComponent implements OnInit {
  //Server response message
  message = "";

  //Contains Marksheet list
  list = [];

  //Search form
  form = {
    "rollNumber": "",
    "pageNo":1,
    "listLength":0
    
  };

  /**
   * Injects services
   *
   * @param router
   * @param service
   */
  constructor(private router: Router, private service: MarksheetService) { }


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
    this.router.navigateByUrl('/marksheet/' + id);
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
  