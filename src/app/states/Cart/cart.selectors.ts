import { createFeatureSelector, createSelector } from "@ngrx/store";
import { CartState } from "./cart.reducer";

const select = createFeatureSelector<CartState>(
    "cart"
);

export const selectAllFromCart=createSelector(
    select,
    (state)=>state.products
)

export const filterProducts=(categories:string)=>
createSelector(select,(product:CartState)=>
{
    return product.products.filter((value)=>{
        return categories.includes(value.category);
    });
});

export const quantityInCart=createSelector(
    select,(state)=>
    state.products.reduce((previous,current)=>previous+current.quantity,0)
);

export const valueInCart=createSelector(
    select,(state)=>
    state.products.reduce((previous,current)=>previous+current.price,0)
)