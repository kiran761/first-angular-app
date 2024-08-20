import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Product } from '../Product';
import { ProductService } from '../product.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit{

  productData: Product[] = [];
  duplicateProducts: Product[] = []; 

  productBorder: string = "2px solid green";
  searchBrand: string = "";

  constructor(private service: DataService , private productService:ProductService) {
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

  ngOnInit(): void {
    this.loadProducts();
  }

loadProducts(){
  
  this.productService.fetchAllProducts().subscribe(data=>this.productData=data);
  console.log(this.productData);
};



  product: Product = new Product('','','',0,0);
  OnSubmit(): void {
     console.log(this.product);
     this.productData.push(this.product);
     this.productService.saveProduct(this.product).subscribe();
     this.loadProducts();
     this.product = new Product('', '', '', 0, 0);
  }
}
