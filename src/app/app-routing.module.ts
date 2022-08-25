import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { 
    path: 'order', 
    loadChildren: () => import('./order-page/order-page.module').then(m => m.OrderPageModule) 
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
