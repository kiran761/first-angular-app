import { Component } from '@angular/core';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent {

  fontsize: number = 0;
  toggleTheme() {
    if (document.body.style.backgroundColor == "black") {
      document.body.style.backgroundColor = "white"
      document.body.style.color = "black"
    }
    else {
      document.body.style.backgroundColor = "black"
      document.body.style.color = "white"
    }
  }
  
displayFont(){
  console.log(this.fontsize)
  document.body.style.fontSize=`${this.fontsize}px`
}

products = [
  { productId: 'P001', description: 'iPhone 12', price: 999 },
  { productId: 'P002', description: 'Galaxy S21', price: 799 },
  { productId: 'P003', description: 'Pixel 6', price: 699 }
];

evencolor:string="orange"

}
