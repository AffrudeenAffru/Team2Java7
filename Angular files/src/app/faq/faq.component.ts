import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegistrationService } from '../registration.service';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {
  public a='';
  constructor(private _router : Router,private _ser1:RegistrationService) { 
    this.a=this._ser1.temp1;
    console.log("pbody"+this._ser1.temp1);

  }

  ngOnInit(): void {
  }
  gotoregistration2(){
    this._router.navigate(['/subregistration'])
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
reg(){
  this._router.navigate(['/subregistration'])
}
log(){
  this._router.navigate(['/sublogin'])
}
gotoJoffers(){
  this._router.navigate(['/joffers'])
}
gotoJtitle(){
  this._router.navigate(['/jtitle'])
}

mainpagess(){
  this._router.navigate(['/userlogin'])
}
}
