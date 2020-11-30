import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegistrationService } from '../registration.service';

@Component({
  selector: 'app-masterlogin',
  templateUrl: './masterlogin.component.html',
  styleUrls: ['./masterlogin.component.css']
})
export class MasterloginComponent implements OnInit {

  constructor(private _service :RegistrationService, private _router : Router) { }

  ngOnInit(): void {
  }

  goToAdminLogin()
  {
    this._router.navigate(['/login'])
  }

  goTouserLogin()
  {
    this._router.navigate(['/sublogin'])
  }
  
}