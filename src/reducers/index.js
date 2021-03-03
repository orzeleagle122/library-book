 import {book} from '../data/book';
 import {
   GET_TOTALS,
   REMOVE_BOOK,
   SEARCH_BOOK
 } from '../actions';
  
  //initial store
  const initialStore={
    books:book,
    totalbooks:0
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
    if(action.type===SEARCH_BOOK){
      return{
        ...state,
        books:state.books.title.include(`${action.payload.title}`)
      }
    }
    
    return state;
 
    }