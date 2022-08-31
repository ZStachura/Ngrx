import { createReducer, on } from "@ngrx/store";
import { Product } from "src/app/utilities/product";
import { Cart } from "src/app/utilities/cart";
import * as cartActions from 'src/app/states/Cart/cart.actions'
import { state } from "@angular/animations";

export const cartInitialState: Cart={
    products:[]
}

export const cartReducer=createReducer(
    cartInitialState,
    //add products to cart
    on(cartActions.addToCart,(state,{product,count})=>({
        ...state,
        products:[...state.products,...Array(count).fill(product)]
    })),
    on(cartActions.clearCart,(state)=>({
        ...state,
        products:[],inCart:0,value:0
    })),
    on(cartActions.buyFromCart,(state)=>({
        ...state,
        products:[],inCart:0,value:0
    }))
)