import { Component,OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'restauracja-ngrx';
  constructor(private titleService:Title,private router:Router){
    this.titleService.setTitle('Les Escargots')
  }

  ngOnInit(){
  }
}
