import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Product } from './Product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  updateProduct(selectedProduct: Product ) {
    
    let url =`http://localhost:8387/product/api/update/${selectedProduct.productId}`
    return this.http.put(url, selectedProduct);
  }

  constructor(private http: HttpClient) { }
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
