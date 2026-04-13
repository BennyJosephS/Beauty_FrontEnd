import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-orders',
  imports: [RouterLink, CommonModule],
  templateUrl: './orders.html',
  styleUrl: './orders.css',
})
export class Orders {
email: string = '';
filteredOrders: any[] = [];
logout() {}
}
