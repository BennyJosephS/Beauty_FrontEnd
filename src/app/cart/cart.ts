import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-cart',
  imports: [RouterLink],
  templateUrl: './cart.html',
  styleUrl: './cart.css',
})
export class Cart {
  email: string = '';

placeOrder() {

}
checkout() {

}
logout() {}
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
