import axios from 'axios';

export const REMOVE_BOOK='REMOVE_BOOK';
export const SEARCH_BOOK='SEARCH_BOOK';
export const SEARCH_FORM_VALUE='SEARCH_FORM_VALUE';

export const AUTH_REQUEST='AUTH_REQUEST';
export const AUTH_SUCCESS='AUTH_SUCCESS';
export const AUTH_FAILURE='AUTH_FAILURE';


export const FETCH_BOOKS_REQUEST='FETCH_BOOKS_REQUEST';
export const FETCH_BOOKS_SUCCESS='FETCH_BOOKS_SUCCESS';
export const FETCH_BOOKS_FAILURE='FETCH_BOOKS_FAILURE';

export const fetchBooks=()=>(dispatch)=>{
    dispatch({
        type:FETCH_BOOKS_REQUEST
    });
    return axios.get("https://run.mocky.io/v3/ab9d6e35-04d4-4b52-8710-754180d4d6a6?mocky-delay=1000ms")
    .then(payload=>{
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

export const authUser=(email,password)=>async(dispatch)=>{
    dispatch({
        type:AUTH_REQUEST
    })
    return axios.post('https://reqres.in/api/login',{
        email,
        password
    })
    .then(payload=>{
        console.log(payload);
        dispatch({
            type:AUTH_SUCCESS,
            payload
        })
    })
    .catch(err=>{
        console.log(err);
        dispatch({
            type:AUTH_FAILURE
        })
    })
}


// test below

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