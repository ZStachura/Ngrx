import { Component, OnInit,Input,Output,EventEmitter,OnChanges } from '@angular/core';
import { Store } from '@ngrx/store';
import { ProductCategory } from '../utilities/product';
import * as stockSelectors from '../states/Stock/stock.selector'
import { ProductState } from '../states/Stock/stock.reducer';

@Component({
  selector: 'app-order-page',
  templateUrl: './order-page.component.html',
  styleUrls: ['./order-page.component.css']
})
export class OrderPageComponent implements OnInit {

  products$ = this.store.select(stockSelectors.selectAllProducts);
  categories = ProductCategory;
  filters:string = "BAGUETTES";

  constructor(private store: Store<ProductState>) { }

  ngOnInit(): void {
    this.showProduct(this.filters)
  }

  onFilterSelected(key: string){
    this.showProduct(key);
  }

  showProduct(key: string) {
    this.filters=key
    this.products$=this.store.select(stockSelectors.filterProducts(this.filters))
  }
  
}
