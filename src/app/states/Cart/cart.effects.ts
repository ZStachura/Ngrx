import { Inject, Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { ToastrService } from "ngx-toastr";
import { map, tap } from "rxjs/operators";
import * as cartActions from '../Cart/cart.actions'

var options={
  timeOut:1000,
  maxOpened:1,
  autoDismiss:true,
  positionClass: 'toast-bottom-left',
}

@Injectable()

export class cartEffects{

 
    
    constructor(private toastr: ToastrService,private actions$: Actions) {}

    displaySuccess$ = createEffect(
        () =>
          this.actions$.pipe(
            ofType(cartActions.displaySuccess),
            tap(action => {
              this.toastr.success(action.description, action.title,options);
            })
          ),
        { dispatch: false }
      );
    displayWarning$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(cartActions.displayWarning),
        tap(action => {
          this.toastr.warning(action.description, action.title,options);
        })
      ),
    { dispatch: false }
  );

  displayError$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(cartActions.displayError),
        tap(action => {
          this.toastr.error(action.description, action.title,options);
        })
      ),
    { dispatch: false }
  );
    

  addToCart$=createEffect(()=>
  this.actions$.pipe(
    ofType(cartActions.addToCart),
    map(action=>
      cartActions.displaySuccess({
        title:"Success",
        description: "Product has been added to the cart"
      }))
  ));

  changeCountInCart$=createEffect(()=>
  this.actions$.pipe(
    ofType(cartActions.changeCountInCart),
    map(action=>
      cartActions.displayWarning({
        title:"Change in cart",
        description: "The quantity of the product in the cart has been changed"
      }))
  ));

  removeFromCart$=createEffect(()=>
  this.actions$.pipe(
    ofType(cartActions.removeFromCart),
    map(action=>
      cartActions.displayWarning({
        title:"Delete",
        description: "Product has been removed from the cart"
      }))
  ))

  clearCart$=createEffect(()=>
  this.actions$.pipe(
    ofType(cartActions.clearCart),
    map(action=>
      cartActions.displayWarning({
        title:"Empty cart",
        description: "Cart has been emptied"
      }))
  ))

  buyFromCart$=createEffect(()=>
  this.actions$.pipe(
    ofType(cartActions.buyFromCart),
    map(action=>
      cartActions.displaySuccess({
        title:"Success",
        description: "Products in cart has been purchased"
      }))
  ))
}