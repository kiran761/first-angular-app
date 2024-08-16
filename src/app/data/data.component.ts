import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { Product } from '../Product';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent {

  productData: Product[] = [];
  duplicateProducts: Product[] = []; 

  productBorder: string = "2px solid green";
  searchBrand: string = "";

  constructor(private service: DataService) {
    this.productData = this.service.getProducts();
    this.duplicateProducts = [...this.productData]; 
  }

  

  sortProductsByPriceLowtoHigh() {
    this.productData.sort((a, b) => a.price - b.price);
  }

  sortProductsByPriceHightoLow() {
    this.productData.sort((a, b) => b.price - a.price);
  }

  originalOrder() {
    this.productData = [...this.duplicateProducts];
  
  }
}
