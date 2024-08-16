import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { Product } from '../Product';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent {

  productData :Product[]=[];

  constructor(private service:DataService){
    this.productData=service.getProducts();
    console.log(this.productData);
  }

}
