import { Component, signal } from '@angular/core';
import { Register } from "./register/register";
import { Userhome } from "../userhome/userhome";
import { Login } from './login/login';
import { Cart } from './cart/cart';
import { Adminhome } from './adminhome/adminhome';
<<<<<<< HEAD
import { Cart } from "./cart/cart";
import { Orders } from "./orders/orders";
import { RouterModule } from "@angular/router";
import { AddProducts } from "./add-products/add-products";

@Component({
  selector: 'app-root',
  imports: [Login, Return, Register, Userhome, Adminhome, Cart, Orders, RouterModule, AddProducts],

=======
import { AddProduct } from "./add-product/add-product";

@Component({
  selector: 'app-root',
  imports: [Register, Userhome, Adminhome, AddProduct, Login, Cart],
>>>>>>> a599f91f44240ff20bc165a43cb21e065c9cee3a
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('Beauty');  
}
