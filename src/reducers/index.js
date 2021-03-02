import {
    CLEAN_CART,
    DECREASE,
    INCREASE,
    REMOVE,
    GET_TOTALS,
    TOOGLE_AMOUNT
  } from '../actions';
  
  //initial store
  const initialStore={
    id:0
  }
  
  //reducer(old-state,action) return update or old state
  export const reducer=(state=initialStore,action)=>{
    console.log(action.type);  
    return state;
 
    }