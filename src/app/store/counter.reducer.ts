import { createReducer, on ,Action} from "@ngrx/store";
// import { CounterActions, INCREMENT, IncrementAction } from "./counter.actions";
import { decrement, increment, init, set } from "./counter.actions";

const initialState = 0;
 export const counterReducer = createReducer(
     initialState,
     on(increment, (state,actions) =>
         state + actions.value
     ),
     on(decrement, (state,actions) =>
         state - actions.value
     ),
     on(set, (state,actions) =>
         actions.value
     ),
 );

// export function counterReducer(state = initialState,actions:CounterActions|Action) {
//     if(actions.type===INCREMENT){
//         return state+(actions as IncrementAction).value;
//     }
//      return state;
//  }