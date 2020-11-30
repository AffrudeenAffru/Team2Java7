import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscriber } from './../subscriber';
import { RegistrationService } from '../registration.service';

@Component({
  selector: 'app-sublogin',
  templateUrl: './sublogin.component.html',
  styleUrls: ['./sublogin.component.css']
})
export class SubloginComponent implements OnInit {
  subscriber = new Subscriber();
  msg='';
   constructor(private _service :RegistrationService, private _router : Router) { }
 //imported from regservice 
   ngOnInit(): void {
   }
 
   loginUser2(){
   
     this._service.loginUserFromRemote1(this.subscriber).subscribe(
       data => {
       
       console.log("response recieved");
       this._router.navigate(['/userlogin'])
       console.log("response recieved",data.userName);  
       //user name display28th 
       this._service.temp1=data.userName;
       //user name display28th 
      // this._service.temp=data.userName;
      
       //this._service.setUserLoggedInStatus(data.userName);
       
        // this._router.navigate(['/userlogin'])
       },
       error => {
         console.log("Error received");
         this.msg="Wrong credentials, please enter valid user name,password";}
     )
   }
   gotoregistration2(){
     this._router.navigate(['/subregistration'])
   }
   gotoplans(){
    this._router.navigate(['/rechargeplans'])
  } mainpage(){
    this._router.navigate(['/userlogin'])
  }
 

  gotobill(){
    this._router.navigate(['/paymentportal'])
  }
  contactus(){
    this._router.navigate(['/contactuss'])
  }
  faq(){
    this._router.navigate(['/faq'])
  }
  reg(){
    this._router.navigate(['/subregistration'])
  }
  log(){
    this._router.navigate(['/sublogin'])
  }
  gotoForgetPassword(){
    this._router.navigate(['/forgetpassword'])
  }

  
  }