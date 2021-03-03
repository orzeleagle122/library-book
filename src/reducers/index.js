 import {book} from '../data/book';
 import {
   GET_TOTALS,
   REMOVE_BOOK,
   SEARCH_FORM_VALUE
 } from '../actions';
  
  //initial store
  const initialStore={
    books:book,
    totalbooks:0,
    searchFormValue:''
  }
  
  //reducer(old-state,action) return update or old state
  export const reducer=(state=initialStore,action)=>{
    
    if(action.type===GET_TOTALS){
      return {
        ...state,
        totalbooks:state.books.length
      }
    }
    if(action.type===REMOVE_BOOK){
      return {
        ...state,
        books:state.books.filter(item=>item.id!==action.payload.id),
      }
    }
    if(action.type===SEARCH_FORM_VALUE){
      console.log(action.payload.searchFormValue);
      // return{
      //   ...state,
      //   books:state.books.title.include(action.payload.searchFormValue)
      // }
    }
    
    return state;
 
    }