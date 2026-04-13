import { Component, signal } from '@angular/core';
import { Register } from "./register/register";
import { Userhome } from "../userhome/userhome";
import { Login } from './login/login';
import { Cart } from './cart/cart';
import { Adminhome } from './adminhome/adminhome';
import { AddProduct } from "./add-product/add-product";

@Component({
  selector: 'app-root',
  imports: [Register, Userhome, Adminhome, AddProduct, Login, Cart],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('Beauty');  
}
