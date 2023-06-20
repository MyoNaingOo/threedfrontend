import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-datefindcustomer',
  templateUrl: './datefindcustomer.component.html',
  styleUrls: ['./datefindcustomer.component.sass']
})
export class DatefindcustomerComponent {

  numbers?: any;

  constructor(private api: ApiService) { }


  send(f: NgForm) {
    this.get(f.value)
  }


  get(date: any) {
    this.api.findByDateForCustomer(date).subscribe(
      (data) => {
        this.numbers = data
      }
    )
  }
}
