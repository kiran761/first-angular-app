import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent {

  productForm = new FormGroup({
    productid: new FormControl(''),
    brand: new FormControl(''),
    description: new FormControl(''),
    qty : new FormControl(''),
    price : new FormControl('')
  });
}
