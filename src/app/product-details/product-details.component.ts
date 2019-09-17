import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Products } from '../products';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product;

  addToCart(product) {
    window.alert('Your product has veeb added to the cart!');
    this.cartService.addToCart(product);

  }

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService,
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.product = Products[+params.get('productId')];
    })
  }

}