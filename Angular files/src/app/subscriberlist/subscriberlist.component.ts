import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgserviceService } from '../ngservice.service';
import { RegistrationService } from '../registration.service';
import { Subscriber } from '../subscriber';

@Component({
  selector: 'app-subscriberlist',
  templateUrl: './subscriberlist.component.html',
  styleUrls: ['./subscriberlist.component.css']
})
export class SubscriberlistComponent implements OnInit {
  _subscriberlist:Subscriber[];
  constructor(private _service: NgserviceService, private _route: Router,private _ser1:RegistrationService) {
  }
  ngOnInit(): void {
      this._service.fetchProductListFromRemotesubscriber().subscribe(
        data => {this._subscriberlist=data,
        
        console.log("response recieved",data);
        },
        error => console.log("response not recieved")
  
      );
     
      
    }
  //subscriber list
    goToAddSubscriber() {
      this._route.navigate(['/addsubscriber']);
    }
    goToEditSubscriber(id: number) {
      console.log("id" + id);
      this._route.navigate(["/editsubscriber", id]);
    }
    goToViewSubscriber(id: number) {
      console.log("id" + id);
      this._route.navigate(["/viewsubscriber", id]);
    }
  
    deleteSubscriber(id: number) {
     
      this._service.deleteProductByIdFromsubscriber(id).subscribe(
        data => {
          console.log("deleted");
          this._route.navigate(['/subscriberlist']);
        },
        error => 
        
        {
          this._route.navigate(['subscriberlist']),
          console.log("exception")
        
        });
    }
  
  }
  