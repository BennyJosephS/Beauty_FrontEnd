import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './register.html',
  styleUrls: ['./register.css'],
})
export class Register {
Name: string = '';
Email: string = '';
PhoneNumber: string = '';
SkinType: string = '';
Password: string = '';
Gender: string = '';
Age: number=0;
Role: string = '';

onSubmit() {
  // Handle form submission logic here
  console.log('Form submitted!');
  console.log('Name:', this.Name);
  console.log('Email:', this.Email);
  console.log('Phone Number:', this.PhoneNumber);
  console.log('Skin Type:', this.SkinType);
  console.log('Password:', this.Password);
  console
}

}
