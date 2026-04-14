import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder,FormGroup } from '@angular/forms';
@Component({
  selector: 'app-add-product',
  imports: [FormsModule,ReactiveFormsModule],
  templateUrl: './add-product.html',
  styleUrl: './add-product.css',
})
export class AddProduct {
   productForm!: FormGroup;  // ✅ THIS LINE IS IMPORTANT

  constructor(private fb: FormBuilder) {
    this.productForm = this.fb.group({
      id: [''],
      name: [''],
      count: [''],
      expiryDate: [''],
      skinType: [''],
      gender: [''],
      age: [''],
      price: [''],
      description: [''],
      dateTime: ['']
    });
  }

  onSubmit() {
    console.log(this.productForm.value);
  }
}
 
