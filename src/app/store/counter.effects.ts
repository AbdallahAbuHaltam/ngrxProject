import { Actions, createEffect, ofType } from "@ngrx/effects";
import { decrement, increment } from "./counter.actions";
import { tap } from "rxjs";

export class CounterEffects{
    saveCount=createEffect(()=>this.actions$.pipe(
        ofType(increment,decrement),
        tap((actions)=>{
            console.log('save count', actions);
            localStorage.setItem('count',actions.value.toString())
        })
    ),{dispatch:false})

    constructor(private actions$:Actions){}
}