import { Route } from '@angular/compiler/src/core';
import { Component, OnInit, Output } from '@angular/core';
import { NgForm} from '@angular/forms';
import { Router } from '@angular/router';
import {RegistrationService } from '../registration.service';
import { User } from '../user';
@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
 user = new User();
 msg='';
  constructor(private _service :RegistrationService, private _router : Router) { }
//imported from regservice 
  ngOnInit(): void {
  }

  loginUser(){
  
    this._service.loginUserFromRemote(this.user).subscribe(
      data => {
      
      console.log("response recieved",data.userName);
      //user name display28th 
      this._service.temp=data.userName;
    
      //this._service.setUserLoggedInStatus(data.userName);
      
        this._router.navigate(['/productlist'])
      },
      error => {
        console.log("Error received");
        this.msg="Wrong credentials, please enter valid user name,password";}
    )
  }
  gotoregistration(){
    this._router.navigate(['/registration'])
  }
  

}
