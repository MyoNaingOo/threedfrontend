import { Component } from '@angular/core';
import { faHome, faKey, faUser, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { ApiService } from './service/api.service';
import { NgbOffcanvas, OffcanvasDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'telecon-bill';
  massage?: String;

  admin: boolean = false;

  username = sessionStorage.getItem('username');
  faUser:any = faUser;
  faHome :any = faHome;
  fakey :any = faKey;
  faregister:any = faUserPlus

  adminm():boolean{
    var email= sessionStorage.getItem("email");
    if(email == "myonaingoo623@gmail.com"){
      this.admin=true;
      return true;
    }else{
      return false;
    }
  }

  constructor(private api:ApiService,private offcanvasService: NgbOffcanvas){}

  ngOnInit(): void {

    this.isusername();
  }

  loginuser(){
    if(this.isusername()){
      return this.username;
    }else{
      return "Login"
    }
  }


  logout(){
    this.api.logout().subscribe(
      (response)=>{
        this.massage = "Logout is successful"
        sessionStorage.clear();
      },
      (error)=>{
        this.massage = "Something is not right"
      }
    )


  }


  isusername(){
    if(this.username==null){
      return false
    }else{
    return true;
    }
  }






	closeResult = '';



  open(content:any) {
		this.offcanvasService.open(content, { ariaLabelledBy: 'offcanvas-basic-title' }).result.then(
			(result) => {
				this.closeResult = `Closed with: ${result}`;
			},
			(reason) => {
				this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
			},
		);
	}

  private getDismissReason(reason: any): string {
		if (reason === OffcanvasDismissReasons.ESC) {
			return 'by pressing ESC';
		} else if (reason === OffcanvasDismissReasons.BACKDROP_CLICK) {
			return 'by clicking on the backdrop';
		} else {
			return `with: ${reason}`;
		}
	}

}
