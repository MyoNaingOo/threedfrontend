import { Component } from '@angular/core';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-your-num',
  templateUrl: './your-num.component.html',
  styleUrls: ['./your-num.component.sass']
})
export class YourNumComponent {

  numbers?:any;

  constructor(private api:ApiService){
    this.get()
  }


  get(){
    this.api.getByCustomer().subscribe(
      (data) =>{
        this.numbers = data
      }
    )
  }

}
