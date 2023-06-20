import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserModule } from '../user/user.module';
import { Otp } from '../otp/otp';
import { Token } from '../token';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  mainurl:string = 'http://localhost:8080/api/';


  // user api

  public updateuser(user: any) {
    const tokenStr = 'Bearer ' + sessionStorage.getItem('token');
    const headers= new HttpHeaders().set("Authorization",tokenStr);
    return this.http.post<UserModule>(this.mainurl+"user/update",user,{headers});

  }

  public changeImage(user: any) {
    const tokenStr = 'Bearer ' + sessionStorage.getItem('token');
    const headers= new HttpHeaders().set("Authorization",tokenStr);
    return this.http.post<UserModule>(this.mainurl+"user/image",user,{
      headers: headers ,
      observe: 'response',});

  }



  public changePass(user: any) {
    const tokenStr = 'Bearer ' + sessionStorage.getItem('token');
    const headers= new HttpHeaders().set("Authorization",tokenStr);
    return this.http.post<UserModule>(this.mainurl+"user/changePass",user,{
      headers: headers ,
      observe: 'response',});

  }


  public changeName(user: any) {
    const tokenStr = 'Bearer ' + sessionStorage.getItem('token');
    const headers= new HttpHeaders().set("Authorization",tokenStr);
    return this.http.post<UserModule>(this.mainurl+"user/changeName",user,{
      headers: headers ,
      observe: 'response',});

  }


  public profile(){
    const tokenStr = 'Bearer ' + sessionStorage.getItem('token');
    const headers= new HttpHeaders().set("Authorization",tokenStr);
    return this.http.get(this.mainurl+"user/user",{headers});

  }

  public regotp(f:any){
    return this.http.post<Otp>(this.mainurl+"otp/register",f)
  }

  public loginotp(f:any){
    return this.http.post<Otp>(this.mainurl+"otp/authenticate",f)
  }





  public login(loginuser: any) {
    return this.http.post<Token>(this.mainurl+"auth/authenticate",loginuser);
  }

  public register(user : JSON){
   return this.http.post<Token>(this.mainurl+"auth/register",user)
  }

  public logout(){
    const tokenStr = 'Bearer ' + sessionStorage.getItem('token');
    const headers= new HttpHeaders().set("Authorization",tokenStr);
    return this.http.get(this.mainurl+"logout",{headers});
  }

  public getusers(){
    const tokenStr = 'Bearer ' + sessionStorage.getItem('token');
    const headers= new HttpHeaders().set("Authorization",tokenStr);
    return this.http.get(this.mainurl+"user/users",{headers});
  }

  public getuser(id: any){
    const tokenStr = 'Bearer ' + sessionStorage.getItem('token');
    const headers= new HttpHeaders().set("Authorization",tokenStr);
    return this.http.get(this.mainurl+"user/userid/"+id,{headers});
  }


  // number
  public getnumbers(){
    const tokenStr = 'Bearer ' + sessionStorage.getItem('token');
    const headers= new HttpHeaders().set("Authorization",tokenStr);
    return this.http.get(this.mainurl+"number/all",{headers});
  }


  public saveNumber(number:any,id:any){
    const tokenStr = 'Bearer ' + sessionStorage.getItem('token');
    const headers= new HttpHeaders().set("Authorization",tokenStr);
    return this.http.post(this.mainurl+"number/save/"+id,number,{headers});
  }

  public getByOwner(){
    const tokenStr = 'Bearer ' + sessionStorage.getItem('token');
    const headers= new HttpHeaders().set("Authorization",tokenStr);
    return this.http.get(this.mainurl+"number/owner",{headers});
  }

  public getByCustomer(){
    const tokenStr = 'Bearer ' + sessionStorage.getItem('token');
    const headers= new HttpHeaders().set("Authorization",tokenStr);
    return this.http.get(this.mainurl+"number/customer",{headers});
  }

  // find by date

  public findByDateForCustomer(date:any){
    const tokenStr = 'Bearer ' + sessionStorage.getItem('token');
    const headers= new HttpHeaders().set("Authorization",tokenStr);
    return this.http.post(this.mainurl+"number/dateByCustomer",date,{headers});
  }

  public findByDateForOwner(date:any){
    const tokenStr = 'Bearer ' + sessionStorage.getItem('token');
    const headers= new HttpHeaders().set("Authorization",tokenStr);
    return this.http.post(this.mainurl+"number/dateByOwner",date,{headers});
  }

}
