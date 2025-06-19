import { Component } from '@angular/core';
import { CommonModule, NgForOf } from '@angular/common';
import { listOfProducts } from '../products';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, NgForOf],
  templateUrl: './products.html',
  styleUrls: ['./products.scss']
})
export class ProductsComponent {
  products = listOfProducts;
}
