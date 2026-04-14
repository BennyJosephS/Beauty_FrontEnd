import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router, RouterLink } from "@angular/router";

@Component({
  selector: 'app-orders',
  imports: [RouterLink],
  templateUrl: './orders.html',
  styleUrl: './orders.css',
})
export class Orders {
email: string = '';
constructor(private router: Router, private http: HttpClient) {}  
logout() {
  const token = localStorage.getItem('token');
  const headers = new HttpHeaders({ Authorization: `Bearer ${token}` });
   this.http.post('http://localhost:5000/api/Auth/logout', {}, { headers }).subscribe({
    next: () => {
      localStorage.clear();
      this.router.navigate(['/login']);
    },
    error: () => {
      localStorage.clear();
      this.router.navigate(['/login']);
    }
  });
}
}
