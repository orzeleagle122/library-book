import axios from 'axios';

export const GET_TOTALS='GET_TOTALS';
export const REMOVE_BOOK='REMOVE_BOOK';
export const SEARCH_BOOK='SEARCH_BOOK';
export const SEARCH_FORM_VALUE='SEARCH_FORM_VALUE';

export const FETCH_BOOKS_REQUEST='FETCH_BOOKS_REQUEST';
export const FETCH_BOOKS_SUCCESS='FETCH_BOOKS_SUCCESS';
export const FETCH_BOOKS_FAILURE='FETCH_BOOKS_FAILURE';

export const fetchBooks=()=>(dispatch)=>{
    dispatch({
        type:FETCH_BOOKS_REQUEST
    })
    return axios.get("https://run.mocky.io/v3/ab9d6e35-04d4-4b52-8710-754180d4d6a6")
    .then(payload=>{
        console.log(payload.data);
        dispatch({
            type:FETCH_BOOKS_SUCCESS,
            payload
        })
    })
    .catch(err=>{
        console.log(err);
        dispatch({
            type:FETCH_BOOKS_FAILURE
        })
    })
}

export const removeBook=(id)=>{
    return {
        type:REMOVE_BOOK,
        payload:{
            id
        }
    }
}

export const searchBook=(title)=>{
    return {
        type:SEARCH_BOOK,
        payload:{
            title
        }
    }
}

export const searchFormValue=(searchFormValue)=>{
        return {
            type: SEARCH_FORM_VALUE,
            payload:{
                searchFormValue
            }
        }
}