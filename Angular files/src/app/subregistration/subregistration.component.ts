import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscriber } from '../subscriber';
import { RegistrationService } from '../registration.service';

@Component({
  selector: 'app-subregistration',
  templateUrl: './subregistration.component.html',
  styleUrls: ['./subregistration.component.css']
})
export class SubregistrationComponent implements OnInit {

  Subscriber = new Subscriber();
  msg='';
  siteKey: string;
  constructor( private _service : RegistrationService, private _router : Router) {
    this.siteKey='6Ld_r-EZAAAAAMBWPsJCvmpequIzTE7brBZuc1Nw';
   }

  ngOnInit(): void {
  }
 registerUser1(){
   this._service.registerUserFromRemote1(this.Subscriber).subscribe(
    data => {
      console.log("response recieved");
      this._router.navigate(['/sublogin'])
    },
    error => {
      console.log("Error occured");
      this.msg=error.error;
    }
   )
 }

 
 reg(){
  this._router.navigate(['/subregistration'])
}
log(){
  this._router.navigate(['/sublogin'])
}

  gotorecharge(){
    this._router.navigate(['/rechargeplans'])
  }
  gotocontactus(){
    this._router.navigate(['/contactuss'])
  }
  gotomaster(){
    this._router.navigate(['/masterlogin'])
  }

  gotoplans(){
    this._router.navigate(['/rechargeplans'])
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

  loginUser2(){
   
    this._service.loginUserFromRemote1(this.Subscriber).subscribe(
      data => {
      
      console.log("response recieved");
      //user name display28th 
     // this._service.temp=data.userName;
    
      //this._service.setUserLoggedInStatus(data.userName);
      
        this._router.navigate(['/userlogin'])
      },
      error => {
        console.log("Error received");
        this.msg="Wrong credentials, please enter valid user name,password";}
    )
  }
  mainpage(){
    this._router.navigate(['/userlogin'])
  }
 





}