import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as cartSelectors from '../states/Cart/cart.selectors'

@Component({
  selector: 'app-cart-summary',
  templateUrl: './cart-summary.component.html',
  styleUrls: ['./cart-summary.component.css']
})
export class CartSummaryComponent implements OnInit {

  constructor(private store: Store<any>) { }

  quantityInCart$=this.store.select(cartSelectors.quantityInCart)
  valueInCart$=this.store.select(cartSelectors.valueInCart)

  ngOnInit() {
  }

}
