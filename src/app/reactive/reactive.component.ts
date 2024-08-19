import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent {

  productForm = new FormGroup({
    productid: new FormControl('',Validators.required),
    brand: new FormControl('',Validators.required),
    description: new FormControl('',Validators.required),
    qty : new FormControl(0,Validators.min(1)),
    price : new FormControl(0,Validators.min(0.1))
  });

  onSubmit() {
   console.error(this.productForm)
    console.warn(this.productForm.value);
    console.log(this.productForm.controls['productid'].value);
  }
}
