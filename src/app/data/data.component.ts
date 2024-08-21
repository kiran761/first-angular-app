import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { DataService } from '../data.service';
import { Product } from '../Product';
import { ProductService } from '../product.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {

 @Input() productData: Product[] = [];
  duplicateProducts: Product[] = []; 
  editVisible="none"


  constructor(private datatService: DataService , private productService:ProductService) {
    this.productService.fetchAllProducts().subscribe(data =>
      this.productData = data
    );
        
    this.duplicateProducts = [...this.productData]; 
    console.log(this.productData );
    console.log("hello")
  }

  productBorder: string = "2px solid green";
  searchBrand: string = "";


  sortProductsByPriceLowtoHigh() {
    this.productData.sort((a, b) => a.price - b.price);
  }

  sortProductsByPriceHightoLow() {
    this.productData.sort((a, b) => b.price - a.price);
  }

  originalOrder() {
    this.loadProducts();
  
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
  this.productService.saveProduct(this.product).subscribe(() => {
    this.loadProducts(); 
  });
   
      this.product = new Product('', '', '', 0, 0);  
}
 

  selectedProduct : Product | null=null
  onEdit(product : Product): void{
    this.editVisible="block"
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
    this.editVisible="none"
  }

  OnDelete(product : Product): void{
    this.selectedProduct={...product}
    this.productService.deleteProduct(this.selectedProduct).subscribe();
    this.loadProducts();
    this.ngOnInit()
  }
}
