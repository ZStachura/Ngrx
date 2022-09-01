import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';

import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { MenuComponent } from './menu/menu.component';
import { OrderPageComponent } from './order-page/order-page.component';
import { stockReducer } from './states/Stock/stock.reducer';
import { cartReducer } from './states/Cart/cart.reducer';
import { FilterComponent } from './filter/filter.component';
import { MenuCardComponent } from './menu-card/menu-card.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { ProductInCartComponent } from './product-in-cart/product-in-cart.component';

@NgModule({
  declarations: [					
    AppComponent,
      MenuComponent,
      OrderPageComponent,
      FilterComponent,
      MenuCardComponent,
      CartPageComponent,
      ProductInCartComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({}),
    StoreModule.forFeature('stock',stockReducer),
    StoreModule.forFeature('cart',cartReducer),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
