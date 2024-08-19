import { Component } from '@angular/core';
import { FormBuilder, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-formbuilder',
  templateUrl: './formbuilder.component.html',
  styleUrls: ['./formbuilder.component.css']
})
export class FormbuilderComponent {



  constructor(private formBuilder: FormBuilder) {}
         productForm = this.formBuilder.group({
      productid: ['', [Validators.required, Validators.minLength(8)]],
      brand: [''],
      description: this.formBuilder.group({
        age: [0],
        season: ['']
      }),
      qty: [0],
      price: [0]
    });
  

  onSubmit() {
    console.log(this.productForm.value);
  }
}
