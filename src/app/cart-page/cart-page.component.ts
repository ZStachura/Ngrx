import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';
import { cartInitialState } from '../states/Cart/cart.reducer';
import { Cart } from '../utilities/cart';
import { Product } from '../utilities/product';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {

  cartProducts$!:Observable<Cart[]>

  constructor(private store: Store<any>) { }

  ngOnInit() {
    this.cartProducts$=this.store.pipe(
      map(state=>state.cart.products))
  }

}
