import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Cart } from '../utilities/cart';
import { Product } from '../utilities/product';
import * as cartActions from '../states/Cart/cart.actions'
import * as stockActions from '../states/Stock/stock.actions'
import * as stockSelectors from '../states/Stock/stock.selector'

@Component({
  selector: 'app-product-in-cart',
  templateUrl: './product-in-cart.component.html',
  styleUrls: ['./product-in-cart.component.css']
})
export class ProductInCartComponent implements OnInit {

  @Input() item!:Cart
  product:Product[]=[]
  amount:number=0
  price:number=0


  constructor(private store: Store<any>) { }

  ngOnInit() {
    this.store.select(stockSelectors.selectAllProducts).subscribe(item=>this.product=item)
    this.product.forEach(element=>{
      if(element.id==this.item.product_id)
      {
        this.amount=element.inStock
        this.price=element.price
      }
    })
  }

  minus(){
    if(this.item.quantity==1)
    {
      this.store.dispatch(stockActions.changeProductsList({productId:this.item.product_id,count:this.item.quantity}))
      this.delete()
    }
    else
    {
      this.store.dispatch(stockActions.changeProductsList({productId:this.item.product_id,count:1}))
      this.store.dispatch(cartActions.changeCountInCart({product_id:this.item.product_id,count:-1,price:-this.price}))
    }
  }

  plus(){
    this.store.dispatch(stockActions.changeProductsList({productId:this.item.product_id,count:-1}))
    this.store.dispatch(cartActions.changeCountInCart({product_id:this.item.product_id,count:1,price:this.price}))
  }

  delete(){
    this.store.dispatch(cartActions.removeFromCart({product_id:this.item.product_id}))
}
}
