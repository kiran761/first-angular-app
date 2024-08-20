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
  visible="none"

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
     this.ngOnInit();
     this.product = new Product('', '', '', 0, 0);
  }

  selectedProduct : Product | null=null
  onEdit(product : Product): void{
    this.visible="block"
    this.selectedProduct={...product}
    console.log(this.selectedProduct)
  }

  OnUpdate(){
    if(this.selectedProduct){
    this.productService.updateProduct(this.selectedProduct).subscribe();
    this.loadProducts();
    this.OnCancel()
    this.ngOnInit()
    }
  
  }
  OnCancel(){
    this.visible="none"
  }

  OnDelete(product : Product): void{
    this.selectedProduct={...product}
    this.productService.deleteProduct(this.selectedProduct).subscribe();
    this.loadProducts();
    this.ngOnInit()
  }
}
