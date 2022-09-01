import { Product } from "./product";
import { ProductCategory } from "./product";

export interface Cart {
    category:ProductCategory;
    product_name:string;
    imgName:string;
    product_id:number;
    quantity:number;
    price:number;
}
