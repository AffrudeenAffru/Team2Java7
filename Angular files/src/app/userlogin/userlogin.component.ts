import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { RegistrationService } from '../registration.service';
import { Subscriber } from '../subscriber';
import { User } from '../user';
import * as io from 'socket.io-client';
import * as $ from 'jquery';


@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent implements OnInit {

  togglePlayersS;
  toggleranklistS;
  togglePlayerCount=0;
  toggleRanklistCount=0;
  message:string;
  socket = io.connect('http://localhost:3000');


  public a='';
  Subscriber = new Subscriber();
  msg='';
  siteKey: string;
  constructor(private _router : Router,private _service : RegistrationService,private _ser1:RegistrationService) { 
    this.siteKey='6Ld_r-EZAAAAAMBWPsJCvmpequIzTE7brBZuc1Nw';
    this.a=this._ser1.temp1;
    console.log("pbody"+this._ser1.temp1);
  }

  ngOnInit(): void {
  }
  registerUser1(){
    this._service.registerUserFromRemote1(this.Subscriber).subscribe(
     data => {
       console.log("response recieved");
       this._router.navigate(['/userlogin'])
     },
     error => {
       console.log("Error occured");
       this.msg=error.error;
     }
    )
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
  gotoJoffers(){
    this._router.navigate(['/joffers'])
  }
  gotoJtitle(){
    this._router.navigate(['/jtitle'])
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
 

  reg(){
    this._router.navigate(['/subregistration'])
  }
  log(){
    this._router.navigate(['/sublogin'])
  }
  //chat
  togglePlayersF(){
    if(this.togglePlayerCount==0){
      this.togglePlayersS={'width':'150px'};
      this.togglePlayerCount=1;
    }
    else{
      this.togglePlayersS={'width':'0px'};
      this.togglePlayerCount=0;
    }
  }
  rankListToggleF(){
    if(this.toggleRanklistCount==0){
      this.toggleranklistS={'width':'150px'};
      this.toggleRanklistCount=1;
    }
    else{
      this.toggleranklistS={'width':'0px'};  
      this.toggleRanklistCount=0;
    }
  }

  livechat()
  {
    var uname=prompt("What's your name?");
    this.setupSocketConnection();
      // call the server-side function 'adduser' and send one parameter (value of prompt)
      this.socket.emit('adduser',uname ,'484848');
    // listener, whenever the server emits 'updatechat', this updates the chat body
    this.socket.on('updatechat', function (username, data) {
      if(uname==username){
      //  $('.userMsg').append('<b>'+username + ':</b> ' + data + '<br>');
        const element = document.createElement('li');
        element.innerHTML = username+": "+data;
        element.style.background = 'white';
        // element.style.float = 'left';
        element.style.padding =  '5px 10px';
        element.style.margin = '10px';
        element.style.borderRadius = '10px';
        element.style.listStyleType = 'none';
        element.style.textAlign = 'right';
        document.getElementById('convo').appendChild(element);
        this.message = ''; 
      }
      else{
        // $('.playersMsg').append('<b>'+username + ':</b> ' + data + '<br>');
          const element = document.createElement('li');
          element.innerHTML = username+": "+data;
          // element.style.float = 'right';
          element.style.background = 'white';
          element.style.padding =  '7px 10px';
          element.style.borderRadius = '10px';
          element.style.listStyleType = 'none';
          // element.style.listStyleType = 'absolute';
          // element.style.right = '1px';
          element.style.margin = '10px';
          document.getElementById('convo').appendChild(element);
      }
    });
  }
  setupSocketConnection(){
    this.socket.on('updaterooms', function(rooms, current_room) {
      $('#rooms').empty();
      $.each(rooms, function(key, value) {
        if(value == current_room){
          $('#rooms').append('<div>' + value + '</div>');
        }
        else {
          $('#rooms').append('<div><a href="#" onclick="switchRoom(\''+value+'\')">' + value + '</a></div>');
        }
      });
    });
  }

    // when the client clicks SEND
    datasendfun(){
      var message = $('#data').val();
      $('#data').val('');
      // tell server to execute 'sendchat' and send along one parameter
      this.socket.emit('sendchat', message);
    };

}

