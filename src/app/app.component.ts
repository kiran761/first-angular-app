import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Kiran';
  location = 'Hyderabad';
  company = 'UST Global';

  productId = 'H0808#2002';
  description = 'Black iPhone';
  available = true;
  instock = this.available;
  quantity = 200;
  orderQuantity = 0;
  orderDate: Date = new Date();

  // You can define the delivery color dynamically based on some condition.
  deliverColor = this.orderQuantity < this.quantity ? 'green' : 'red';

  // Placeholder array of products for demonstration purposes
  products = [
    { productId: 'P001', description: 'iPhone 12', price: 999 },
    { productId: 'P002', description: 'Galaxy S21', price: 799 },
    { productId: 'P003', description: 'Pixel 6', price: 699 }
  ];

  printOrder() {
    console.log(`Order placed for ${this.orderQuantity} items.`);
  }

  isOrderQuantityAvailable = () => this.orderQuantity < this.quantity;
}
