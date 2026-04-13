import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-adminhome',
  imports: [FormsModule, RouterLink, CommonModule],
  templateUrl: './adminhome.html',
  styleUrl: './adminhome.css',
})
export class Adminhome {
email: string = '';
Gender: string = '';
searchProduct: string = '';
filteredProducts: any[] = [];
logout() {

}
}

