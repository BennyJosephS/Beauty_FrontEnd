import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Productservices } from '../Services/productservices';

@Component({
  selector: 'app-add-products',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],  // ReactiveFormsModule not FormsModule
  templateUrl: './add-products.html',
  styleUrl: './add-products.css',
})
export class AddProducts implements OnInit {

  productForm!: FormGroup;

  skinTypes = ['oily', 'dry', 'combination', 'sensitive'];
  genders = [];

  constructor(
    private fb: FormBuilder,
    private productservice: Productservices,
    private router: Router
  ) {}

  ngOnInit() {
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
    this.productservice.addProduct(this.productForm.value).subscribe({
      next: () => {
        this.router.navigate(['/admin']);
      },
      error: (err) => console.error('Add product failed:', err)
    });
  }
} 