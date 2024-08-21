import { Injectable } from '@angular/core';
import { Product } from './Product';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  products : Product[]=[];
  constructor() {

    

    this.products = [
      // new Product("s103", "Tata", "Dish", 10, 70),
      // new Product("s104", "Apple", "iPhone", 20, 999),
      // new Product("s105", "Samsung", "Galaxy", 15, 850),
      // new Product("s106", "Sony", "PlayStation", 5, 499),
      // new Product("s107", "LG", "TV", 8, 1200),
      // new Product("s108", "LG", "Laptop", 12, 1100),
      // new Product("s109", "Nike", "Shoes", 50, 150),
      // new Product("s110", "Adidas", "Jacket", 30, 200),
      // new Product("s111", "Apple", "Mustang", 3, 700),
    ];
    
      

    }
    getProducts(): Product[] {
      return this.products;
    }

    addProduct(product: Product) {
      this.products.push(product);
    }

    
   }

