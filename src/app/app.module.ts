import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RegisterOtpComponent } from './otp/register-otp/register-otp.component';
import { LoginOtpComponent } from './otp/login-otp/login-otp.component';
import { OrdersComponent } from './orders/orders.component';
import { YourNumComponent } from './your-num/your-num.component';
import { DateFindComponent } from './date-find/date-find.component';
import { DatefindcustomerComponent } from './datefindcustomer/datefindcustomer.component';
import { BuyComponent } from './buy/buy.component';
import { UsersComponent } from './users/users.component';
import { NumbersComponent } from './numbers/numbers.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    RegisterOtpComponent,
    LoginOtpComponent,
    OrdersComponent,
    YourNumComponent,
    DateFindComponent,
    DatefindcustomerComponent,
    BuyComponent,
    UsersComponent,
    NumbersComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
