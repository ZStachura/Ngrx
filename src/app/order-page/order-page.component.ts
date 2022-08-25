import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-page',
  templateUrl: './order-page.component.html',
  styleUrls: ['./order-page.component.css']
})
export class OrderPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  snail:boolean=false
  baguette:boolean=true
  frog:boolean=true

  filter(){
    alert("work")
  }
}
