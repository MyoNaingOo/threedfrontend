import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class UserModule {
  id?: string;
  email?:string;
  name?:string;
  password?:string;
  role?:string;
  user_img?:string;
}
