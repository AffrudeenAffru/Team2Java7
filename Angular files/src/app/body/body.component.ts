import { Component, OnInit } from '@angular/core';
import { RegistrationService } from '../registration.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  public a='';
  constructor(private _ser1:RegistrationService) { 
    this.a=this._ser1.temp;
    console.log("pbody"+this._ser1.temp);
  }

  ngOnInit(): void {
  }

}
