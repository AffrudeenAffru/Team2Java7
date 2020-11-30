import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Dongle } from '../dongle';
import { NgserviceService } from '../ngservice.service';
import { Postpaid } from '../postpaid';
import { Prepaid } from '../prepaid';
import { RegistrationService } from '../registration.service';

@Component({
  selector: 'app-rechargeplans',
  templateUrl: './rechargeplans.component.html',
  styleUrls: ['./rechargeplans.component.css']
})
export class RechargeplansComponent implements OnInit {
  _prepaidlist :Prepaid[];//to show prepaid class
  _postpaidlist :Postpaid[];//to show postpaid class 
  _donglelist:Dongle[];//to show dongle list
  public a='';
  constructor(private _service: NgserviceService, private _route: Router,private _ser1:RegistrationService) {
    this.a=this._ser1.temp1;
    console.log("pbody"+this._ser1.temp1);
  }

  
ngOnInit(): void {
  this._service.fetchProductListFromRemoteprepaid().subscribe(
    data => {this. _prepaidlist =data,
    
    console.log("response recieved",data);
    },
    error => console.log("response not recieved")

  ),
  this._service.fetchProductListFromRemotepostpaid().subscribe(
    data => {this. _postpaidlist =data,
    
    console.log("response recieved",data);
    },
    error => console.log("response not recieved")

  ),
  this._service.fetchProductListFromRemotedongle().subscribe(
    data => {this. _donglelist =data,
    
    console.log("response recieved",data);
    },
    error => console.log("response not recieved")

  );

  
}
//prepaid
goToAddPrepaid() {
  this._route.navigate(['/addprepaid']);
}
goToEditPrepaid(id: number) {

  this._route.navigate(["/paymentportal"]);
}
goToViewPrepaid(id: number) {
  console.log("id" + id);
  this._route.navigate(["/viewprepaid", id]);
}

deletePrepaid(id: number) {
 
  this._service.deleteProductByIdFromprepaid(id).subscribe(
    data => {
      console.log("deleted");
      this._route.navigate(['/prepaidlist']);
    },
    error => 
    
    {
      this._route.navigate(['prepaidlist']),
      console.log("exception")
    
    });
}

//postapid
goToAddPostpaid() {
this._route.navigate(['/addpostpaid']);
}
goToEditPostpaid(id: number) {
console.log("id" + id);
this._route.navigate(["/paymentportal"]);
}
goToViewPostpaid(id: number) {
console.log("id" + id);
this._route.navigate(["/viewpostpaid", id]);
}

deletePostpaid(id: number) {

this._service.deleteProductByIdFrompostpaid(id).subscribe(
  data => {
    console.log("deleted");
    this._route.navigate(['/prepaidlist']);
  },
  error => 
  
  {
    this._route.navigate(['prepaidlist']),
    console.log("exception")
  
  });

}
//dongle
goToAddDongle() {
this._route.navigate(['/adddongle']);
}
goToEditDongle(id: number) {
console.log("id" + id);
this._route.navigate(["/paymentportal"]);
}
goToViewDongle(id: number) {
console.log("id" + id);
this._route.navigate(["/viewdongle", id]);
}

deleteDongle(id: number) {

this._service.deleteProductByIdFromdongle(id).subscribe(
  data => {
    console.log("deleted");
    this._route.navigate(['/prepaidlist']);
  },
  error => 
  
  {
    this._route.navigate(['prepaidlist']),
    console.log("exception")
  
  });

}
///////////////////nav
gotohome(){
  this._route.navigate(['/userlogin'])
}
reg(){
  this._route.navigate(['/subregistration'])
}
log(){
  this._route.navigate(['/sublogin'])
}
gotoplans(){
  this._route.navigate(['/rechargeplans'])
}

gotobill(){
  this._route.navigate(['/paymentportal'])
}
contactus(){
  this._route.navigate(['/contactuss'])
}
faq(){
  this._route.navigate(['/faq'])
}
gotoJoffers(){
  this._route.navigate(['/joffers'])
}
gotoJtitle(){
  this._route.navigate(['/jtitle'])
}

mainpagess(){
  this._route.navigate(['/userlogin'])
}
}
