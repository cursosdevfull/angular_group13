import { Component } from '@angular/core';

import { ProductModelDomain } from '../models/product-model-domain';

@Component({
  selector: 'amb-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  products = [
    new ProductModelDomain('Product 1', 10, 50),
    new ProductModelDomain('Product 2', 20, 100),
    new ProductModelDomain('Product 3', 30, 150),
    new ProductModelDomain('Product 4', 40, 200),
    new ProductModelDomain('Product 5', 50, 250),
  ];
}
