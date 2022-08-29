import { createReducer,on } from "@ngrx/store";
import { Product,ProductCategory } from "src/app/utilities/product";
import * as stockActions from 'src/app/states/Stock/stock.actions'

export interface ProductState{
    products:Product[]
}

const stockInitialState:ProductState={
products:[
    {
        id:1,
        name:"Fresh baguette with tomato dip",
        stars:4,
        inStock:25,
        imgName:'baguette-1.png',
        price:16,
        category:ProductCategory.BAGUETTES
    },
    {
        id:2,
        name:'Baguette with cheese and herbs',
        stars:3,
        inStock:10,
        imgName:'baguette-2.png',
        price:20,
        category:ProductCategory.BAGUETTES
    },
    {
        id:3,
        name:'Garlic baguette',
        stars:5,
        inStock:20,
        imgName:'baguette-3.png',
        price:13,
        category:ProductCategory.BAGUETTES
    },
    {
        id:4,
        name:'Frog soup',
        stars:4,
        inStock:17,
        imgName:'frog-1.png',
        price:18,
        category:ProductCategory.FROGS
    },
    {
        id:5,
        name:'Frog legs on rice',
        stars:5,
        inStock:27,
        imgName:'frog-2.png',
        price:28,
        category:ProductCategory.FROGS
    },
    {
        id:6,
        name:'Fried frog legs',
        stars:4,
        inStock:9,
        imgName:'frog-3.png',
        price:23,
        category: ProductCategory.FROGS
    },
    {
        id:7,
        name:'Snails with herb butter',
        stars:5,
        inStock:15,
        imgName:'snail-1.png',
        price:30,
        category:ProductCategory.SNAILS
    },
    {
        id:8,
        name:"Stewed snails",
        stars:4,
        inStock:27,
        imgName:'snail-2.png',
        price:33,
        category:ProductCategory.SNAILS
    },
    {
        id:9,
        name:'Snails with chilli oil',
        stars:3,
        inStock:7,
        imgName:'snail-3.png',
        price:29,
        category: ProductCategory.SNAILS
    }
]};

export const stockReducer=createReducer(
    stockInitialState,
    //get products from stock
    on(stockActions.getProductsList,(state,{products})=>({
        ...state,
        products:products.map((product)=>({...product}))
    }))
);