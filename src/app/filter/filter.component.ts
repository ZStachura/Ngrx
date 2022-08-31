import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProductCategory } from '../utilities/product';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  @Output() selectedFilter = new EventEmitter<any>();
  @Input() filters!:string[]; 
  productCategories=ProductCategory;
  
  filterProducts(key:string):void{
    this.selectedFilter.emit(key)
    console.log(key)
  }
  
  constructor() { }

  ngOnInit() {
  }

}
