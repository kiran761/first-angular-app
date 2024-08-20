import { Component } from '@angular/core';
import { FormBuilder, FormArray, Validators } from '@angular/forms';
import { Product } from '../Product';

@Component({
  selector: 'app-formbuilder',
  templateUrl: './formbuilder.component.html',
  styleUrls: ['./formbuilder.component.css']
})
export class FormbuilderComponent {

  Product: Product= new Product("","","",0,0);

  constructor(private formBuilder: FormBuilder) {}

  productForm = this.formBuilder.group({
    productid: ['', [Validators.required, Validators.minLength(8)]],
    brand: [''],
    description: this.formBuilder.group({
      age: [0],
      season: ['']
    }),
    qty: [0],
    price: [0],
    suppliers: this.formBuilder.array([this.formBuilder.control('')]),
  });

  

  get suppliers(): FormArray {
    return this.productForm.get('suppliers') as FormArray;
  }

  addSupplier() {
    this.suppliers.push(this.formBuilder.control(''));
  }


  onSubmit() {
    console.log(this.productForm.value);
    console.error(this.productForm);
    console.error(this.productForm.value);

    console.warn(this.productForm.controls['productid'].value);

    console.error(this.productForm.controls['description'].controls['age'].value)
   
  }
}
