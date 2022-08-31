import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Product } from '../utilities/product';
import * as stockActions from '../states/Stock/stock.actions'
import * as cartActions from '../states/Cart/cart.actions'

@Component({
  selector: 'app-menu-card',
  templateUrl: './menu-card.component.html',
  styleUrls: ['./menu-card.component.css']
})
export class MenuCardComponent implements OnInit {

  @Input() dish!:Product
  count:number=0
  constructor(private store: Store<any>) { }

  ngOnInit() {
  }

  plus(){
    this.count++
  }

  minus(){
    this.count--
  }

  toCart(){
    this.count=0
    this.store.dispatch(cartActions.addToCart({product:this.dish,count:this.count}))
    this.count=-this.count
    this.store.dispatch(stockActions.changeProductsList({productId:this.dish.id,count:this.count}))
  }
}
