import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { AdddongleComponent } from './adddongle/adddongle.component';
import { AddpostpaidComponent } from './addpostpaid/addpostpaid.component';
import { AddprepaidComponent } from './addprepaid/addprepaid.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { AddsubscriberComponent } from './addsubscriber/addsubscriber.component';
import { AppComponent } from './app.component';
import { BillComponent } from './bill/bill.component';
import { ContactussComponent } from './contactuss/contactuss.component';
import { EditdongleComponent } from './editdongle/editdongle.component';
import { EditpostpaidComponent } from './editpostpaid/editpostpaid.component';
import { EditprepaidComponent } from './editprepaid/editprepaid.component';
import { EditproductComponent } from './editproduct/editproduct.component';
import { EditsubscriberComponent } from './editsubscriber/editsubscriber.component';
import { FaqComponent } from './faq/faq.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MasterloginComponent } from './masterlogin/masterlogin.component';
import { OurservicesComponent } from './ourservices/ourservices.component';
import { PaymentportalComponent } from './paymentportal/paymentportal.component';
import { PrepaidlistComponent } from './prepaidlist/prepaidlist.component';
import { ProductlistComponent } from "./productlist/ProductlistComponent";
import { RechargeplansComponent } from './rechargeplans/rechargeplans.component';
import { RegistrationComponent } from './registration/registration.component';
import { SubchatComponent } from './subchat/subchat.component';
import { SubloginComponent } from './sublogin/sublogin.component';
import { SubregistrationComponent } from './subregistration/subregistration.component';
import { SubscriberlistComponent } from './subscriberlist/subscriberlist.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { ViewdongleComponent } from './viewdongle/viewdongle.component';
import { ViewpostpaidComponent } from './viewpostpaid/viewpostpaid.component';
import { ViewprepaidComponent } from './viewprepaid/viewprepaid.component';
import { ViewproductComponent } from './viewproduct/viewproduct.component';
import { ViewsubscriberComponent } from './viewsubscriber/viewsubscriber.component';
import { JoffersComponent } from './joffers/joffers.component';
import { JtitleComponent } from './jtitle/jtitle.component';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'login',component:LoginComponent},
  {path:'addproduct',component:AddproductComponent  },
  {path:'editproduct/:id',component:EditproductComponent},
  {path:'editproduct',component:EditproductComponent},
  {path:'viewproduct/:id',component:ViewproductComponent},
  {path:'viewproduct',component:ViewproductComponent},
  {path:'productlist',component:ProductlistComponent},
  {path: 'registration',component:RegistrationComponent},
  {path: 'login', component:ProductlistComponent},
  {path:'home',component:HomeComponent},
  {path:'AboutUS', component:AboutUsComponent},
  {path:'services',component:OurservicesComponent},
  {path:'userlogin',component:UserloginComponent},
   {path:'rechargeplans',component:RechargeplansComponent},
   {path:'paymentportal',component:PaymentportalComponent},
   {path:'masterlogin',component:MasterloginComponent},
   {path:'sublogin',component:SubloginComponent},
   {path:'subregistration',component:SubregistrationComponent},
   {path:'bill',component:BillComponent},
   {path:'contactuss',component:ContactussComponent},
   {path:'joffers',component:JoffersComponent },
   {path:'jtitle',component:JtitleComponent },
   ///prepaid
   {path:'prepaidlist',component:PrepaidlistComponent},
   {path:'viewprepaid/:id',component:ViewprepaidComponent},
   {path:'editprepaid/:id',component:EditprepaidComponent},
   {path:'viewprepaid',component:ViewprepaidComponent},
   {path:'editprepaid',component:EditprepaidComponent},
   {path:'addprepaidplans',component:AddprepaidComponent},
   {path:'addprepaid',component:AddprepaidComponent  },
   //prepaid

   {path:'prepaidlist',component:PrepaidlistComponent},
   {path:'viewpostpaid/:id',component:ViewpostpaidComponent},
   {path:'editpostpaid/:id',component:EditpostpaidComponent},
   {path:'viewpostpaid',component:ViewpostpaidComponent},
   {path:'editpostpaid',component:EditpostpaidComponent},
   {path:'addpostpaid',component:AddpostpaidComponent},
   
   //dongle

   {path:'prepaidlist',component:PrepaidlistComponent},
   {path:'viewdongle/:id',component:ViewdongleComponent},
   {path:'editdongle/:id',component:EditdongleComponent},
   {path:'viewdongle',component:ViewdongleComponent},
   {path:'editdongle',component:EditdongleComponent},
   {path:'adddongle',component:AdddongleComponent},


   //subscriber list
   {path:'subscriberlist',component:SubscriberlistComponent},
   {path:'viewsubscriber/:id',component:ViewsubscriberComponent},
   {path:'editsubscriber/:id',component:EditsubscriberComponent},
   {path:'viewsubscriber',component:ViewsubscriberComponent},
   {path:'editsubscriber',component:EditsubscriberComponent},
   {path:'addsubscriber',component:AddsubscriberComponent},
  //chat
  {path:'subchat',component:SubchatComponent},
//faq
{path:'faq',component:FaqComponent},
//forget password
{path:'forgetpassword',component:ForgetpasswordComponent},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
