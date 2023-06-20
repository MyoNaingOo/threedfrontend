import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-numbers',
  templateUrl: './numbers.component.html',
  styleUrls: ['./numbers.component.sass']
})
export class NumbersComponent {

  numbers?: any;

  constructor(private api: ApiService) {
    this.get()
   }


  get() {
    this.api.getnumbers().subscribe(
      (data) => {
        this.numbers = data
      }
    )
  }

}
