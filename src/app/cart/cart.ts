import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router, RouterLink } from "@angular/router";

@Component({
  selector: 'app-cart',
  imports: [RouterLink],
  templateUrl: './cart.html',
  styleUrl: './cart.css',
})
export class Cart {
  email: string = '';

constructor(private router: Router, private http: HttpClient) {}  // inject HttpClient here
placeOrder() {

}
checkout() {

}
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
cartItems: any[] = [];
subtotal: any;
discount: any;
total: any;
removeItem(_t25: any) {

}
increaseQty(_t25: any) {

}
decreaseQty(_t25: any) {

}

}
