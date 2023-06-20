import { Component } from '@angular/core';
import { ApiService } from '../service/api.service';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { NumberModule } from '../number/number.module';

@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.sass']
})
export class BuyComponent {
  num: Array<number> = [];
  numberList: NumberModule[] = [];
  id?: any;
  message?: string;

  constructor(private api: ApiService, private route: ActivatedRoute) { }

  add(f: NgForm) {
    console.log(f.value);
    this.numberList.unshift(f.value);

  }

  send(){
    this.id = this.route.snapshot.paramMap.get('id');
    console.log(this.id);
    console.log(this.numberList);
    this.api.saveNumber(this.numberList,this.id).subscribe(
      (data)=>{
        console.log("success");

      },(Error)=>{
        console.log("failed");

      }
    )




  }
}
