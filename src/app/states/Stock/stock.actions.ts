import { createAction,props } from "@ngrx/store";
import { Product } from "src/app/utilities/product";

export const getProductsList=createAction(
    '[Menu Component] Get Products List',
    props<{products:Product[]}>()
);

export const changeProductsList=createAction(
    '[Menu Component] Change Products List',
    props<{productId:number,count:number}>()
);