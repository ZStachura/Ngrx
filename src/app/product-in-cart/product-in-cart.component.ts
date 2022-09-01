import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Cart } from '../utilities/cart';
import { Product } from '../utilities/product';

@Component({
  selector: 'app-product-in-cart',
  templateUrl: './product-in-cart.component.html',
  styleUrls: ['./product-in-cart.component.css']
})
export class ProductInCartComponent implements OnInit {

  @Input() item!:Cart

  constructor(private store: Store<any>) { }

  ngOnInit() {
  }

}
