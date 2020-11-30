import { EventEmitter, Injectable, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';
import {HttpClient } from '@angular/common/http';
import { Subscriber } from './subscriber';
@Injectable({
  providedIn: 'root'
})

export class RegistrationService {
  temp='';
  temp1='';

  constructor(private _http : HttpClient) { }

  public loginUserFromRemote(user:User):Observable<any>{
  return this._http.post<any>("http://localhost:4321/login",user)
  }
  public registerUserFromRemote(user:User):Observable<any>{
    return this._http.post<any>("http://localhost:4321/registeruser",user);
    }
    public loginUserFromRemote1(subscriber:Subscriber):Observable<any>{
      return this._http.post<any>("http://localhost:4321/loginsub",subscriber)
      }
      public registerUserFromRemote1(subscriber:Subscriber):Observable<any>{
        return this._http.post<any>("http://localhost:4321/regsub",subscriber);
        }
    //forget password
    public  updateUserPasswordFromRemote(id2:string,pass:string):Observable<any>{
      return this._http.put<any>("http://localhost:4321/updatepassword/"+id2, pass)
    }
}
