import { createAction, props } from "@ngrx/store";
import { Product } from "src/app/utilities/product";
import { ProductCategory } from "src/app/utilities/product";


export const addToCart=createAction(
    '[Menu Component] Add to cart',
    props<{category:ProductCategory,product_name:string,product_id:number,quantity:number,price:number}>()
);

export const removeFromCart=createAction(
    '[Cart Component] Remove from cart',
    props<{product_id:number,count:number}>()
);

export const changeCountInCart=createAction(
    '[Cart Component] Change count in cart',
    props<{product_id:number,count:number}>()
);

export const clearCart=createAction(
    '[Cart Component] clear cart'
);

export const buyFromCart=createAction(
    '[Cart Component] buy products from cart'
);