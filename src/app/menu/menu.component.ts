import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';
import { Product } from '../utilities/product';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  @Input() category!:string;

  productOfSelectedCategory$!:Observable<any>;

  constructor(private store: Store<any>) { }

  ngOnInit() {
    this.productOfSelectedCategory$=this.store.pipe(
      map(state=>[...new Set(state.cart.stock.filter((item:Product)=>item.category===this.category).map((item:Product)=>item.id))])
    )
  }

}
