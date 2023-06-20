import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ApiService } from '../service/api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent {

  numbers: Array<number> = [];
  id?: any;

  constructor(private api: ApiService, private route: ActivatedRoute) { }

  add(f: NgForm) {
    console.log(f.value.number);
    console.log(this.numbers?.unshift(f.value.number))

  }

  send() {
    this.id = this.route.snapshot.paramMap.get('id');
    console.log(this.id);

    console.log(this.numbers);
  }


}
