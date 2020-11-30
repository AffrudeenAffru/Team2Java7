import { Component, OnInit } from '@angular/core';
//import { from } from 'rxjs';
import {NgForm} from '@angular/forms';
import { User } from '../user';
import { RegistrationService } from '../registration.service';
import {Router } from '@angular/router';

@Component({
  selector: 'registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  siteKey: string;


  user = new User();
  msg='';
  constructor( private _service : RegistrationService, private _router : Router) {

    this.siteKey='6Ld_r-EZAAAAAMBWPsJCvmpequIzTE7brBZuc1Nw';



   }

  ngOnInit(): void {
  }
 registerUser(){
   this._service.registerUserFromRemote(this.user).subscribe(
    data => {
      console.log("response recieved");
      this._router.navigate(['/login'])
    },
    error => {
      console.log("Error occured");
      this.msg=error.error;
    }
   )
 }
}
