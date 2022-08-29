import { createAction, props } from "@ngrx/store";

export const addToCart=createAction(
    '[Menu Component] Add to cart',
    props<{productId:number,count:number}>()
);

export const removeFromCart=createAction(
    '[Cart Component] Remove from cart',
    props<{productId:number,count:number}>()
);

export const changeCountInCart=createAction(
    '[Cart Component] Change count in cart',
    props<{productId:number,count:number}>()
);

export const clearCart=createAction(
    '[Cart Component] clear cart'
);

export const buyFromCart=createAction(
    '[Cart Component] buy products from cart'
);