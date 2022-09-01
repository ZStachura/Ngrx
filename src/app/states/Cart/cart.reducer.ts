import { createReducer, on } from "@ngrx/store";
import { Product } from "src/app/utilities/product";
import { Cart } from "src/app/utilities/cart";
import * as cartActions from 'src/app/states/Cart/cart.actions'
import { state } from "@angular/animations";
import { getProductsList } from "../Stock/stock.actions";


export interface CartState{
    products:Cart[]
}

export const cartInitialState: CartState={
    products:[]
}

export const cartReducer=createReducer(
    cartInitialState,
    //add products to cart
    on(cartActions.addToCart,(state,{category,product_name,product_id,quantity,price})=>{
        let alreadyIn=false
        let modifiedState=JSON.parse(JSON.stringify([...state.products]));
        modifiedState.map((data:any)=>{
            if(data.product_id===product_id)
            {
                data.quantity+=quantity
                data.price+=price
                alreadyIn=true;
            }
        });
        if(alreadyIn==false)
            {
                modifiedState.push({category:category,product_name:product_name,product_id:product_id,quantity:quantity,price:price})
            }
        return{
            ...state,
            products:[...modifiedState]
        }}),
    on(cartActions.clearCart,(state)=>({
        ...state,
        products:[]
    })),
    on(cartActions.buyFromCart,(state)=>({
        ...state,
        products:[]
    }))
)