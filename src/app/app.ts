import { Component, signal } from '@angular/core';
import { Login } from './login/login';
import { Return } from './return/return';
import { Register } from "../register/register";
import { Userhome } from "../userhome/userhome";
import { Adminhome } from './adminhome/adminhome';

@Component({
  selector: 'app-root',
  imports: [Login,Return, Register, Userhome, Adminhome],

  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('Beauty');
}
