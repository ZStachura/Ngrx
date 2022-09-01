import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';
import * as cartSelectors from '../states/Cart/cart.selectors'
import * as cartActions from '../states/Cart/cart.actions'
import * as stockActions from '../states/Stock/stock.actions'
import { Cart } from '../utilities/cart';

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

  productsInCart:Cart[]=[]

  constructor(private store: Store<any>) { }

  ngOnInit() {
    
  }

  emptyCart(){
    this.cartProducts$.subscribe(cart=>this.productsInCart=cart)
    this.productsInCart.forEach((element)=>
    {
      this.store.dispatch(stockActions.changeProductsList({productId:element.product_id,count:element.quantity}))
    })
    this.store.dispatch(cartActions.clearCart())
  }

  buyCart(){
    this.store.dispatch(cartActions.clearCart())
  }

}
