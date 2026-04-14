import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

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
  Age: number = 0;
  Role: string = '';

  errorMessage: string = '';
  successMessage: string = '';
  isLoading: boolean = false;

  private baseUrl = 'http://localhost:5000/api/Auth';

  constructor(private http: HttpClient, private router: Router) {}

  onSubmit() {
    this.errorMessage = '';
    this.successMessage = '';
    this.isLoading = true;

    const payload = {
      name: this.Name,
      email: this.Email,
      phoneNumber: this.PhoneNumber,
      skinType: this.SkinType,
      passwordHash: this.Password,
      gender: this.Gender,
      age: this.Age,
      role: this.Role
    };

    this.http.post(`${this.baseUrl}/Register`, payload).subscribe({
      next: (res: any) => {
        this.isLoading = false;
        this.successMessage = 'Account created successfully!';
        setTimeout(() => this.router.navigate(['/login']), 1500);
      },
      error: (err) => {
        this.isLoading = false;
        this.errorMessage = err.error?.message || 'Registration failed. Try again.';
      }
    });
  }
}