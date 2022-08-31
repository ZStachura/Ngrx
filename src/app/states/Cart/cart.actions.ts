import { createAction, props } from "@ngrx/store";
import { Product } from "src/app/utilities/product";

export const addToCart=createAction(
    '[Menu Component] Add to cart',
    props<{product:Product,count:number}>()
);

export const removeFromCart=createAction(
    '[Cart Component] Remove from cart',
    props<{product:Product,count:number}>()
);

export const changeCountInCart=createAction(
    '[Cart Component] Change count in cart',
    props<{product:Product,count:number}>()
);

export const clearCart=createAction(
    '[Cart Component] clear cart'
);

export const buyFromCart=createAction(
    '[Cart Component] buy products from cart'
);