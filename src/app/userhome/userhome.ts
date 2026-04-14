import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';  
import { FormsModule, } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common'; 
import { Productservices } from '../Services/productservices';


@Component({
  selector: 'app-userhome',
  standalone: true,
  imports: [FormsModule, CommonModule],  // CommonModule added
  templateUrl: './userhome.html',
  styleUrl: './userhome.css',
})
export class Userhome implements OnInit {

  email: string = '';
  searchProduct: string = '';
  products: any[] = [];
  filteredProducts: any[] = [];
  Gender: string = '';
  Age: number = 0;
  SkinType: string = '';
  constructor(
    private router: Router,
    private http: HttpClient,
    private productService: Productservices
  ) {}

  ngOnInit() {
    this.email = localStorage.getItem('email') || '';
    this.loadProducts();
  }

  loadProducts() {
    this.productService.viewProducts().subscribe({
      next: (res: any) => {
        this.products = res;
        this.filteredProducts = res;
      },
      error: (err) => console.error('Failed to load products:', err)
    });
  }

  onSearch() {
    const query = this.searchProduct.toLowerCase().trim();
    if (!query) {
      this.filteredProducts = this.products;
      return;
    }
    this.filteredProducts = this.products.filter(p =>
      p.productName.toLowerCase().includes(query)
    );
  }

  navigate(path: string) {
    this.router.navigate([path]);
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
}