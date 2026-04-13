import { Component, signal } from '@angular/core';
import { Login } from './login/login';
import { Return } from './return/return';
import { Register } from "../register/register";
import { Userhome } from "./userhome/userhome";
import { Adminhome } from './adminhome/adminhome';
import { AddProduct } from "./add-product/add-product";

@Component({
  selector: 'app-root',
  imports: [Login, Return, Register, Userhome, Adminhome, AddProduct],

  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('Beauty');
}
