import { Component } from '@angular/core';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.sass']
})
export class OrdersComponent {

  numbers?:any;

  constructor(private api:ApiService){
    this.get()
  }


  get(){
    this.api.getByOwner().subscribe(
      (data) =>{
        this.numbers = data
        console.log(data);

      }
    )
  }






}
