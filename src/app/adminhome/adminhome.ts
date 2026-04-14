import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from "@angular/router";

@Component({
  selector: 'app-adminhome',
  imports: [FormsModule, RouterLink],
  templateUrl: './adminhome.html',
  styleUrl: './adminhome.css',
})
export class Adminhome {
email: string = '';
Gender: string = '';
searchProduct: string = '';
  constructor(private router: Router, private http: HttpClient) {}  // inject HttpClient here

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

