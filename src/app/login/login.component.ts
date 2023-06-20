import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { ApiService } from '../service/api.service';
import { Token } from '../token';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent {

  token ?: Token;
  massage?: String;
  massagebg ?: boolean ;
  passwordshow: boolean =false;

  faEye:any =faEye;
  faEyeSlash:any =faEyeSlash;

  constructor(private api:ApiService,private router: Router){}

  passwordeye(){
    if(this.passwordshow === true){
      this.passwordshow= false

    }else{
      this.passwordshow= true
    }
  }



  login(f: NgForm) {
    console.log(f);

    this.api.login(f.value)
    .subscribe(
      (data) => {
        this.token =data;
      if(this.token.user?.email != undefined ){
        sessionStorage.setItem("email",this.token.user?.email)
      }
        this.router.navigate(['login-otp'])

    },
    (error)=> {
      this.massage= "pleasse check"
      this.massagebg= false

    }

    );

  }

}
