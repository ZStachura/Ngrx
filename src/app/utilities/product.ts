export enum ProductCategory{
    SNAILS=0,
    BAGUETTES=1,
    FROGS=2
}

export interface Product {
    id:number;
    name:string;
    stars:number;
    inStock:number;
    imgName:string;
    price:number;
    category:ProductCategory
}
