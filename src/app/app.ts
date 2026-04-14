import { Component, signal } from '@angular/core';
import { Login } from './login/login';
import { Return } from './return/return';
import { Register } from "./register/register";
import { Userhome } from "./userhome/userhome";
import { Adminhome } from './adminhome/adminhome';
import { Cart } from "./cart/cart";
import { Orders } from "./orders/orders";
import { RouterModule } from "@angular/router";
import { AddProducts } from "./add-products/add-products";

@Component({
  selector: 'app-root',
  imports: [Login, Return, Register, Userhome, Adminhome, Cart, Orders, RouterModule, AddProducts],

  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('Beauty');  
}
