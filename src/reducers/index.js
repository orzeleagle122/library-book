import {
  REMOVE_BOOK,
  SEARCH_FORM_VALUE,
  // FETCH_BOOKS_REQUEST,
  FETCH_BOOKS_SUCCESS,
  // FETCH_BOOKS_FAILURE,
  AUTH_SUCCESS,
  LOG_OUT,
  GET_CURRENT_USER_REQUEST,
  GET_CURRENT_USER_SUCCESS,
  GET_CURRENT_USER_FAILURE
} from '../actions';
 
 //initial store
 const initialStore={
   books:[],
   totalbooks:0,
   user:{
     userToken:'',
     isLogin: false,
     id:0
   },
   searchFormValue:''
 }
 
 //reducer(old-state,action) return update or old state
 export const reducer=(state=initialStore,action)=>{
  if(action.type===FETCH_BOOKS_SUCCESS){
    console.log(action.payload.data);
    return {
      ...state,
      books: action.payload.data,
      totalbooks: action.payload.data.length
    }
  }
  if(action.type===AUTH_SUCCESS){
    console.log(action.payload.data.token);
    localStorage.setItem('loginToken', action.payload.data.token)
    return {
      ...state,
      user:{
        userToken: action.payload.data.token,
        isLogin:true
      }
    }
  }
  if(action.type===LOG_OUT){
    localStorage.removeItem('loginToken');
    return {
      ...state,
      user:{
        userToken:'',
        isLogin:false
      }
    }
  }
  if(action.type===GET_CURRENT_USER_SUCCESS){
    return {
      ...state,
      user:{
        isLogin:true
      }
    }
  }
   
  //  if(action.type===GET_TOTALS){
  //    return {
  //      ...state,
  //      totalbooks:state.books.length
  //    }
  //  }
   if(action.type===REMOVE_BOOK){
     return {
       ...state,
       books:state.books.filter(item=>item.id!==action.payload.id),
       totalbooks: state.books.length-1
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