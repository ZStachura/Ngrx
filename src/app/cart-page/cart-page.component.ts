import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';
import * as cartSelectors from '../states/Cart/cart.selectors'

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {

  cartProducts$ = this.store.select(cartSelectors.selectAllFromCart);
  baguettes$=this.store.select(cartSelectors.filterProducts("BAGUETTES"));
  frogs$=this.store.select(cartSelectors.filterProducts("FROGS"));
  snails$=this.store.select(cartSelectors.filterProducts("SNAILS"));

  constructor(private store: Store<any>) { }

  ngOnInit() {
    
  }

}
