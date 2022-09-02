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
    on(cartActions.addToCart,(state,{category,product_name,imgName,product_id,quantity,price})=>{
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
                modifiedState.push({category:category,product_name:product_name,imgName:imgName,product_id:product_id,quantity:quantity,price:price})
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
    })),
    on(cartActions.changeCountInCart,(state,{product_id,count,price})=>{
        let modifiedState=JSON.parse(JSON.stringify([...state.products]));
        modifiedState.map((data:any)=>{
            if(data.product_id===product_id)
            {
                data.quantity+=count
                data.price+=price
            }
        });
        return{
            ...state,
            products:[...modifiedState]
        }}),
    on(cartActions.removeFromCart,(state,{product_id})=>{
        let modifiedState=JSON.parse(JSON.stringify([...state.products]));
        modifiedState.map((data:any)=>{
            if(data.product_id===product_id)
            {
                modifiedState.splice(modifiedState.indexOf(data),1);
            }
        })
        return{
            ...state,
            products:[...modifiedState]
        }}),
        on(cartActions.displaySuccess, state => state),
        on(cartActions.displayError, state => state),
        on(cartActions.displayWarning, state => state)
)