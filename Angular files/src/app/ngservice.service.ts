import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient} from '@angular/common/http';
import { Product } from './product';
import { Prepaid } from './prepaid';
import { Postpaid } from './postpaid';
import { Dongle } from './dongle';
import { Subscriber } from './subscriber';



@Injectable({
  providedIn: 'root'
})
export class NgserviceService {
  resMail;

  constructor(private _http:HttpClient) { }

  fetchProductListFromRemote():Observable<any>
  {
      return this._http.get<any>("http://localhost:4321/users");
  }
  addproductToRemote(product: Product):Observable<any>{
    return this._http.post<any>("http://localhost:4321/registeruser",product);
  }
  fetchProductByIdFromRemote(id:number):Observable<any>{
    return this._http.get<any>("http://localhost:4321/edit/"+id);
  }
  deleteProductByIdFromRemote(id:number):Observable<any>{
    console.log(id);
    return this._http.delete<any>("http://localhost:4321/deletebyid/"+id);
   
  }
////mail
mailtoremainder(mail){ 
  console.log("service"+ mail);
    this._http.get<any>("http://localhost:4321/testEmail/"+mail).subscribe(
      data => console.log("respData", data),
      error => console.error("Error in req", error)
    )
}

//marketting msg
sendmarkettingmsg()
  {console.log("from servoice" );
      return this._http.get<any>("http://localhost:1234/txt").subscribe(
        data => console.log("msg sent", data),
        error => console.error("Error in req", error))
  }

  //marketing call
  sendmarkettingcall(){
    console.log("from servoice");
    return this._http.get<any>("http://localhost:1234/voicecall").subscribe(
      data => console.log("caling", data),
      error => console.error("Error in calling", error))
  }

  
  ///prepaidlist
  fetchProductListFromRemoteprepaid():Observable<any>
  {
      return this._http.get<any>("http://localhost:4321/prepaidplans");
  }
  addproductToRemoteprepaid(prepaid:Prepaid):Observable<any>{
    return this._http.post<any>("http://localhost:4321/addplan",prepaid);
  }
  fetchProductByIdFromRemoteprepaid(id:number):Observable<any>{
    return this._http.get<any>("http://localhost:4321/editprepaid/"+id);
  }
  deleteProductByIdFromprepaid(id:number):Observable<any>{
    console.log(id);
    return this._http.delete<any>("http://localhost:4321/deletebyidprepaid/"+id);
   
  }
  //postpaid

  fetchProductListFromRemotepostpaid():Observable<any>
  {
      return this._http.get<any>("http://localhost:4321/prepaidplans2");
  }
  addproductToRemotepostpaid(postpaid:Postpaid):Observable<any>{
    return this._http.post<any>("http://localhost:4321/addplan2",postpaid);
  }
  fetchProductByIdFromRemotepostpaid(id:number):Observable<any>{
    return this._http.get<any>("http://localhost:4321/editprepaid2/"+id);
  }
  deleteProductByIdFrompostpaid(id:number):Observable<any>{
    console.log(id);
    return this._http.delete<any>("http://localhost:4321/deletebyidprepaid2/"+id);
   
  }
  //dongle
  fetchProductListFromRemotedongle():Observable<any>
  {
      return this._http.get<any>("http://localhost:4321/prepaidplans3");
  }
  addproductToRemotedongle(dongle:Dongle):Observable<any>{
    return this._http.post<any>("http://localhost:4321/addplan3",dongle);
  }
  fetchProductByIdFromRemotedongle(id:number):Observable<any>{
    return this._http.get<any>("http://localhost:4321/editprepaid3/"+id);
  }
  deleteProductByIdFromdongle(id:number):Observable<any>{
    console.log(id);
    return this._http.delete<any>("http://localhost:4321/deletebyidprepaid3/"+id);
   
  }
//subscriber list
fetchProductListFromRemotesubscriber():Observable<any>
  {
      return this._http.get<any>("http://localhost:4321/subscribers");
  }
  addproductToRemotesubscriber(subscriber:Subscriber):Observable<any>{
    return this._http.post<any>("http://localhost:4321/regsub",subscriber);
  }
  fetchProductByIdFromRemotesubscriber(id:number):Observable<any>{
    return this._http.get<any>("http://localhost:4321/editsub/"+id);
  }
  deleteProductByIdFromsubscriber(id:number):Observable<any>{
    console.log(id);
    return this._http.delete<any>("http://localhost:4321/deletebyidsub/"+id);
}
}
