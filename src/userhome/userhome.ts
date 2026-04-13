import { CommonModule, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userhome',
  imports: [FormsModule, CommonModule],
  templateUrl: './userhome.html',
  styleUrl: './userhome.css',
})
export class Userhome {
Age: number=0;
Gender: string = '';
searchProduct: string = '';
SkinType: string = '';
filteredProducts: any[] = [];
constructor(private router: Router) {}

navigate(path: string) {
  this.router.navigate([path]);
}
logout() {

}
email: string = '';

onSubmit() {
  // Handle form submission logic here
  console.log('Form submitted!');
  console.log('Email:', this.email);  
}
}
