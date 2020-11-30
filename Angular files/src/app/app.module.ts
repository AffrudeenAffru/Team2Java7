import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { ProductlistComponent } from "./productlist/ProductlistComponent";
import { EditproductComponent } from './editproduct/editproduct.component';
import { ViewproductComponent } from './viewproduct/viewproduct.component';
import { HttpClientModule } from '@angular/common/http';
import {  FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BodyComponent } from './body/body.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { OurservicesComponent } from './ourservices/ourservices.component';
import { HomeComponent } from './home/home.component';
import { AuthServiceComponent } from './auth-service/auth-service.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { RechargeplansComponent } from './rechargeplans/rechargeplans.component';
import { PaymentportalComponent } from './paymentportal/paymentportal.component';
import { BillComponent } from './bill/bill.component';
import { NgxCaptchaModule } from 'ngx-captcha';
import { MasterloginComponent } from './masterlogin/masterlogin.component';
import { SubregistrationComponent } from './subregistration/subregistration.component';
import { SubloginComponent } from './sublogin/sublogin.component';
import { ContactussComponent } from './contactuss/contactuss.component';
import { PrepaidlistComponent } from './prepaidlist/prepaidlist.component';
import { EditprepaidComponent } from './editprepaid/editprepaid.component';
import { ViewprepaidComponent } from './viewprepaid/viewprepaid.component';
import { AddprepaidComponent } from './addprepaid/addprepaid.component';
import { ViewpostpaidComponent } from './viewpostpaid/viewpostpaid.component';
import { EditpostpaidComponent } from './editpostpaid/editpostpaid.component';
import { AddpostpaidComponent } from './addpostpaid/addpostpaid.component';
import { AdddongleComponent } from './adddongle/adddongle.component';
import { EditdongleComponent } from './editdongle/editdongle.component';
import { ViewdongleComponent } from './viewdongle/viewdongle.component';
import { SubscriberlistComponent } from './subscriberlist/subscriberlist.component';
import { EditsubscriberComponent } from './editsubscriber/editsubscriber.component';
import { AddsubscriberComponent } from './addsubscriber/addsubscriber.component';
import { ViewsubscriberComponent } from './viewsubscriber/viewsubscriber.component';
import { SubchatComponent } from './subchat/subchat.component';
import { FaqComponent } from './faq/faq.component';
import { JoffersComponent } from './joffers/joffers.component';
import { JtitleComponent } from './jtitle/jtitle.component';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';

@NgModule({
  declarations: [
    AppComponent,
    AddproductComponent,
    ProductlistComponent,
    EditproductComponent,
    ViewproductComponent,
    LoginComponent,
    RegistrationComponent,
    HeaderComponent,
    FooterComponent,
    BodyComponent,
    AboutUsComponent,
    OurservicesComponent,
    HomeComponent,
    AuthServiceComponent,
    UserloginComponent,
    RechargeplansComponent,
    PaymentportalComponent,
    BillComponent,
    MasterloginComponent,
    SubregistrationComponent,
    SubloginComponent,
    ContactussComponent,
    PrepaidlistComponent,
    EditprepaidComponent,
    ViewprepaidComponent,
    AddprepaidComponent,
    ViewpostpaidComponent,
    EditpostpaidComponent,
    AddpostpaidComponent,
    AdddongleComponent,
    EditdongleComponent,
    ViewdongleComponent,
    SubscriberlistComponent,
    EditsubscriberComponent,
    AddsubscriberComponent,
    ViewsubscriberComponent,
    SubchatComponent,
    FaqComponent,
    JoffersComponent,
    JtitleComponent,
    ForgetpasswordComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxCaptchaModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent,LoginComponent]
})
export class AppModule { }
