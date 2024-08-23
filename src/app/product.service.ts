import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Product } from './Product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private http: HttpClient) { }
  deleteProduct(selectedProduct : Product) {
    let url =`http://localhost:8387/product/api/delete/${selectedProduct.productId}`
    return this.http.delete(url);
  }
  updateProduct(selectedProduct: Product ) {
    
    let url =`http://localhost:8387/product/api/update/${selectedProduct.productId}`
    return this.http.put(url, selectedProduct);
  }

  
  saveProduct(product:Product){
    console.log(product);
    let url ='http://localhost:8387/product/api/add'
    return this.http.post(url,product);
  }

  fetchAllProducts(){
    let url="http://localhost:8387/product/api/fetchall"
    return this.http.get<Product[]>(url);
  }
}
