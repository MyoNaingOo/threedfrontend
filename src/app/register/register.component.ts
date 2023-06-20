import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { ApiService } from '../service/api.service';
import { Token } from '../token';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass']
})
export class RegisterComponent {

  token?:Token;
  massage?: string;
  massagebg ?: boolean;
  passwordshow: boolean =false;

  faEye:any =faEye;
  faEyeSlash:any =faEyeSlash;

  constructor(private api:ApiService,private router:Router){}

  passwordeye(){
    if(this.passwordshow === true){
      this.passwordshow= false

    }else{
      this.passwordshow= true
    }
  }


  register(f:NgForm){
    console.log(f.value);


    if(f.value.password === f.value.cpassword ){
      console.log('success');


    this.api.register(f.value).subscribe(
      data=>{
        this.token =data;
        if(this.token.user?.email != undefined ){
          sessionStorage.setItem("email",this.token.user?.email)
        }
          this.router.navigate(['register-otp'])

        // sessionStorage.setItem('token', this.token.token);
      },
      (error)=> {
        this.massage= "Register failed"
        this.massagebg = false
      }
    )
   }else{
    this.massage= "password not same"
   }


  }

}
