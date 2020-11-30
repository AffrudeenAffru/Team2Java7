import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegistrationService } from '../registration.service';
@Component({
  selector: 'app-contactuss',
  templateUrl: './contactuss.component.html',
  styleUrls: ['./contactuss.component.css']
})
export class ContactussComponent implements OnInit {
  public a='';
  constructor(private _router : Router,private _ser1:RegistrationService) { 

    this.a=this._ser1.temp1;
    console.log("pbody"+this._ser1.temp1);
  }

  ngOnInit(): void {
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
  gotorelog(){
    this._router.navigate(['/userlogin'])
  }
  
reg(){
  this._router.navigate(['/subregistration'])
}
log(){
  this._router.navigate(['/sublogin'])
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
gotohome(){
  this._router.navigate(['/userlogin'])
}
mainpagess(){
  this._router.navigate(['/userlogin'])
}
gotoJtitle(){
  this._router.navigate(['/jtitle'])
}
gotoJoffers(){
  this._router.navigate(['/joffers'])
}
}
