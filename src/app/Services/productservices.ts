import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Productservices {
   private baseUrl = 'http://localhost:5000/api/Home';

  constructor(private http: HttpClient) {}

  private getHeaders() {
    const token = localStorage.getItem('token');
    return new HttpHeaders({ Authorization: `Bearer ${token}` });
  }

  viewProducts() {
    return this.http.get(`${this.baseUrl}/ViewProducts`, { headers: this.getHeaders() });
  }

  addProduct(product: any) {
    return this.http.post(`${this.baseUrl}/AddProducts`, product, { headers: this.getHeaders() });
  }

  searchProducts(request: any) {
    return this.http.get(`${this.baseUrl}/SearchProducts`, { headers: this.getHeaders()});
  }
}
