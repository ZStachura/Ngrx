import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Product } from "src/app/utilities/product";
import { ProductState, stockReducer} from "./stock.reducer";

//const select=(state:productAppState)=>state.product;
const select = createFeatureSelector<ProductState>(
    "stock"
);

export const selectAllProducts=createSelector(
    select,
    (state)=>state.products
);

export const filterProducts=(categories:string)=>
createSelector(select,(product:ProductState)=>
{
    return product.products.filter((value)=>{
        return categories.includes(value.category);
    });
});

export const selectId=(id:number)=>
createSelector(
    select,
    (state)=>state.products.find((exact:Product)=>{
        return exact.id===id})
)