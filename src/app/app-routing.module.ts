import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderPageComponent } from './order-page/order-page.component';


const routes: Routes = [
  { 
    path: 'order', 
    component:OrderPageComponent
  },
  {
    path:'',
    redirectTo:'/order',
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
