import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  Email: string = '';
  Password: string = '';

  private baseUrl = 'http://localhost:5000/api/Auth';

  constructor(private http: HttpClient, private router: Router) {}

  onSubmit() {
    const payload = {
      email: this.Email,
      password: this.Password
    };

    this.http.post(`${this.baseUrl}/Login`, payload).subscribe({
      next: (res: any) => {
        localStorage.setItem('token', res.token);
        localStorage.setItem('email', res.email);
        localStorage.setItem('name', res.name);
        localStorage.setItem('role', res.role);
        localStorage.setItem('refreshToken', res.refeshToken);

        if (res.role === 'admin') {
          this.router.navigate(['/admin']);
        } else {
          this.router.navigate(['/home']);
        }
      },
      error: (err) => {
        console.error('Login failed:', err.error?.message);
      }
    });
  }
  
}
