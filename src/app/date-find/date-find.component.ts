import { Component } from '@angular/core';
import { ApiService } from '../service/api.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-date-find',
  templateUrl: './date-find.component.html',
  styleUrls: ['./date-find.component.sass']
})
export class DateFindComponent {

  numbers?: any;
  constructor(private api: ApiService) { }
  send(f: NgForm) {
    console.log(f.value.date);

    this.get(f.value)
  }


  get(date: any) {
    this.api.findByDateForOwner(date).subscribe(
      (data) => {
        this.numbers = data
      }
    )
  }


}
