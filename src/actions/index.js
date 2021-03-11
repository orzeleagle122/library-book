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

export const LOG_OUT='LOG_OUT';

export const GET_CURRENT_USER_REQUEST='GET_CURRENT_USER_REQUEST';
export const GET_CURRENT_USER_SUCCESS='GET_CURRENT_USER_SUCCESS';
export const GET_CURRENT_USER_FAILURE='GET_CURRENT_USER_FAILURE';

export const REGISTER_REQUEST='REGISTER_REQUEST';
export const REGISTER_SUCCESS='REGISTER_SUCCESS';
export const REGISTER_FAILURE='REGISTER_FAILURE';

export const CLEAR_ERROR='CLEAR_ERROR';


export const fetchBooks=()=>async(dispatch)=>{
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


export const logOut=()=>{
    return {
        type: LOG_OUT
    }
}

export const removeBook=(id)=>{
    return {
        type:REMOVE_BOOK,
        payload:{
            id
        }
    }
}

export const getUserLoginAction=(token)=>async(dispatch)=>{
    dispatch({
        type:GET_CURRENT_USER_REQUEST
    });
    return axios.get('https://reqres.in/api/login/',{
        headers: {
            "Authorization": "Bearer "+token
        }
    })
    .then(payload=>{
        console.log(payload);
        dispatch({
            type:GET_CURRENT_USER_SUCCESS,
            payload
        })
    })
    .catch(err=>{
        console.log(err);
        dispatch({
            type:GET_CURRENT_USER_FAILURE
        })
    })
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
            type:AUTH_FAILURE,
            err
        })
    })
}

export const registerUser=(email,password,name,lastname)=>async(dispatch)=>{
    dispatch({
        type:REGISTER_REQUEST
    })
    return axios.post('https://reqres.in/api/register', {
        // name,
        // lastname,
        email,
        password
    })
    .then(payload=>{
        console.log(payload);
        dispatch({
            type:REGISTER_SUCCESS,
            payload
        })
    })
    .catch(err=>{
        dispatch({
            type:REGISTER_FAILURE,
            err
        })
    })
}

export const cleanErrors=()=>{
    return {
        type:CLEAR_ERROR
    }
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