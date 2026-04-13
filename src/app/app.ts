import { Component, signal } from '@angular/core';
import { Login } from './login/login';
import { Return } from './return/return';

@Component({
  selector: 'app-root',
  imports: [Login,Return],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Beauty');
}
