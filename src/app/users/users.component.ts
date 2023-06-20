import { Component } from '@angular/core';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.sass']
})
export class UsersComponent {

  users?: any;

  constructor(private api: ApiService) {
    this.get()
  }


  get(){
    this.api.getusers().subscribe(
      (data) =>{
        this.users = data;
      }
    )
  }

}
