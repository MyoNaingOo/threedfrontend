import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
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


const routes: Routes = [
  {path: '', component: HomeComponent },
  {path: 'login', component: LoginComponent},
  {path: "register", component: RegisterComponent},
  {path: "login-otp",component: LoginOtpComponent},
  {path:"register-otp",component: RegisterOtpComponent},
  {path:"orders",component: OrdersComponent},
  {path:"your_num",component:YourNumComponent},
  {path:"datefind",component:DateFindComponent},
  {path:"datefindcustomer",component:DatefindcustomerComponent},
  {path:"buy/:id",component:BuyComponent},
  {path:"users",component:UsersComponent},
  {path:"numbers",component:NumbersComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
