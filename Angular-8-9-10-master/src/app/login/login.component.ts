




import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {AuthService} from '../service/auth.service'
import {ActivatedRoute} from '@angular/router'
import {Location} from '@angular/common'
import { Message } from '../../../node_modules/@angular/compiler/src/i18n/i18n_ast';
/**
 * Login controller
 *
 * @author Sunil Sahu
 * @Copyright (c) SunilOS Infotech Pvt Ltd
 */

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  public userId:string = '';
  public password:string = '';
  public loginId=""
  public success=true


  form={
    "login_id":this.userId,
    "password":this.password,
    "message":"",
    "error":""
  }
  inputError = {
    
    "login_id":"",
    "password":""

  }
  constructor(private router: Router,private service:AuthService,private activerouter:ActivatedRoute,private location:Location) { //inject router
  }

  ngOnInit() {
    localStorage.removeItem("loginId")
    if(this.router.url == "/sessionOut")
    { this.success=false;

      this.form.message = "OOPS! Your session had been timeout";
    }

    if(this.router.url == "/logout"){
      this.success=false;
      this.form.message = "You have logged out";
    }
  }

  signIn(){
    var _self = this;

    this.service.auth(this.form,function(info){
      if(info.form.error){
        _self.success = false;
       // _self.message= info.form.error.data.message;
        _self.inputError=info.form.inputError;
        
       }else{
        console.log("aaaaaaaaaaaa",info.form.error)
         localStorage.setItem("loginId",info.form.data.login_id)
        _self.router.navigateByUrl('/welcome');
       }
    })
  }

  logout(){
    var _self = this;

    this.service.logout(this.form,function(info){
      if(info.form.error){
        alert(info.form.error)
       }else{
        _self.loginId="null"
         localStorage.setItem("loginId",_self.loginId)
         console.log("----aaaa----",localStorage.setItem("loginId",_self.loginId))

         _self.router.navigateByUrl('/login');
       }

    })
  }
  onClick(){
    this.router.navigateByUrl("/registration");
}

}
