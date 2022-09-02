import { createAction, props } from "@ngrx/store";
import { Product } from "src/app/utilities/product";
import { ProductCategory } from "src/app/utilities/product";


export const addToCart=createAction(
    '[Menu Component] Add to cart',
    props<{category:ProductCategory,product_name:string,imgName:string,product_id:number,quantity:number,price:number}>()
);

export const removeFromCart=createAction(
    '[Cart Component] Remove from cart',
    props<{product_id:number}>()
);

export const changeCountInCart=createAction(
    '[Cart Component] Change count in cart',
    props<{product_id:number,count:number,price:number}>()
);

export const clearCart=createAction(
    '[Cart Component] clear cart'
);

export const buyFromCart=createAction(
    '[Cart Component] buy products from cart'
);

//notifications

export const displaySuccess = createAction(
    "[Toastr Notification] Display Success",
    props<{ title: string; description: string }>()
  );
  export const displayWarning = createAction(
    "[Toastr Notification] Display Warning",
    props<{ title: string; description: string }>()
  );
  export const displayError = createAction(
    "[Toastr Notification] Display Error",
    props<{ title: string; description: string }>()
  );