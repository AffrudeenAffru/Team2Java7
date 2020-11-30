import { Component, OnInit } from '@angular/core';
import { RegistrationService } from '../registration.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public b='';
  constructor(private sc2:RegistrationService) {
    console.log("headerproduct"+this.sc2.temp);
    
   }

  ngOnInit(): void {
    this.b=this.sc2.temp;
    console.log("headerproduct"+this.sc2.temp);
  }

}
