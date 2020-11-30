// import { Component, OnInit } from '@angular/core';


// export class ForgetpasswordComponent 
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegistrationService } from '../registration.service';
import { Subscriber } from './../subscriber';
@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.component.html',
  styleUrls: ['./forgetpassword.component.css']
})
export class ForgetpasswordComponent implements OnInit {

  
  msg=""; 
     subscriber = new Subscriber();
  constructor(private _service : RegistrationService, private _router : Router) { }
  ngOnInit(): void {
  }
  upUser(id2:string,pass:string){
      
    this._service.updateUserPasswordFromRemote(id2,pass).subscribe(
      data=>{console.log("response received");
    this.msg="response received";
    this._router.navigate(['/sublogin'])
    },
      error=>{console.log("exception occured");
      this.msg="some error occured";},
    )
    }

    goback()
    {
      this._router.navigate(['/sublogin'])
    }

}