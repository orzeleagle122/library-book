import axios from 'axios';

export const REMOVE_BOOK='REMOVE_BOOK';

export const SEARCH_BOOK_REQUEST='SEARCH_BOOK_REQUEST';
export const SEARCH_BOOK_SUCCESS='SEARCH_BOOK_SUCCESS';
export const SEARCH_BOOK_FAILURE='SEARCH_BOOK_FAILURE';
export const MIN_THREE_CHAR='MIN_THREE_CHAR';

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

export const ADD_BOOK_REQUEST='ADD_BOOK_REQUEST';
export const ADD_BOOK_SUCCESS='ADD_BOOK_SUCCESS';
export const ADD_BOOK_FAILURE='ADD_BOOK_FAILURE';

export const BOOK_DETAILS_REQUEST='BOOK_DETAILS_REQUEST';
export const BOOK_DETAILS_SUCCESS='BOOK_DETAILS_SUCCESS';
export const BOOK_DETAILS_FAILURE='BOOK_DETAILS_FAILURE';

export const GET_GENRE_REQUEST='GET_GENRE_REQUEST';
export const GET_GENRE_SUCCESS='GET_GENRE_SUCCESS';
export const GET_GENRE_FAILURE='GET_GENRE_FAILURE';
export const SEND_REMOVE_GENRELIST='SEND_REMOVE_GENRELIST';
export const SEND_ADD_GENRELIST='SEND_ADD_GENRELIST';
export const REMOVE_GENRE='REMOVE_GENRE';
export const REMOVE_GENRE2='REMOVE_GENRE2';
export const REMOVE_GENRE3='REMOVE_GENRE3';
export const ADD_GENRE='ADD_GENRE';


const API='http://localhost:8080/api';

export const addGenre=(id,genre)=>{
    console.log(genre);
    return {
        type: ADD_GENRE,
        payload: {
            id,
            genre
        }
    }
}

export const removeGenre=(item)=>{
    return {
        type:REMOVE_GENRE,
        payload:{
            item
        }
    }
}

// usuwanie usunietych gatunków
export const removeGenre2=(item)=>{
    return {
        type:REMOVE_GENRE2,
        payload:{
            item
        }
    }
}
// usuwanie dodanych gatunków
export const removeGenre3=(item)=>{
    return {
        type:REMOVE_GENRE3,
        payload:{
            item
        }
    }
}

export const sendRemoveListGenre=(removeList)=>async(dispatch)=>{
    dispatch({
        type: SEND_REMOVE_GENRELIST
    })
    return axios.delete(API+"/book/genre/delete", {data:{removeList}})
}
export const sendNewsListGenre=(addList)=>async(dispatch)=>{
    dispatch({
        type: SEND_ADD_GENRELIST
    })
    return axios.post(API+"/book/genre/add", {
        addList
    })
}

export const fetchGenres=()=>async(dispatch)=>{
    dispatch({
        type:GET_GENRE_REQUEST
    });
    return axios.get(API+"/bookGenre/search/all")
    .then(payload=>{
        dispatch({
            type:GET_CURRENT_USER_SUCCESS,
            payload
        })
    })
    .catch(err=>{
        dispatch({
            type: GET_GENRE_FAILURE,
            err
        })
    })
}

export const fetchBooks=()=>async(dispatch)=>{
    dispatch({
        type:FETCH_BOOKS_REQUEST
    });
    return axios.get(API+"/book/search/random",{ params: { number: 10 } })
    .then(payload=>{
        console.log(payload);
        dispatch({
            type:FETCH_BOOKS_SUCCESS,
            payload
        })
    })
    .catch(err=>{
        // console.log(err);
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
        // console.log(payload);
        dispatch({
            type:GET_CURRENT_USER_SUCCESS,
            payload
        })
    })
    .catch(err=>{
        // console.log(err);
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
        // console.log(payload);
        dispatch({
            type:AUTH_SUCCESS,
            payload
        })
    })
    .catch(err=>{
        // console.log(err);
        dispatch({
            type:AUTH_FAILURE,
            err
        })
    })
}

export const addBook=(title,author,publisher,genres,amount)=>async(dispatch)=>{
    dispatch({
        type:ADD_BOOK_REQUEST
    })
    return axios.post(API+"/book/add",{
        title,
        author,
        publisher,
        genres,
        amount
    })
    .then(payload=>{
        console.log(payload);
        dispatch({
            type:ADD_BOOK_SUCCESS,
            payload
        })        
    })
    .catch(err=>{
        console.log(err.response.data.message);
        console.log(err.response.data.details);
        dispatch({
            type:ADD_BOOK_FAILURE,
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
        // console.log(payload);
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


export const bookRequest=(id,title)=>async(dispatch)=>{
    dispatch({
        type:BOOK_DETAILS_REQUEST
    })
    return axios.get(API+`/book/${id}/${title}`)
    .then(payload=>{
        dispatch({
            type:BOOK_DETAILS_SUCCESS,
            payload
        })        
    })
    .catch(err=>{
        dispatch({
            type:BOOK_DETAILS_FAILURE,
            err
        })
    })
}






















// test below

export const searchBook=(phrase)=>async(dispatch)=>{
    dispatch({
        type:SEARCH_BOOK_REQUEST
    })
    if(phrase.length>=3){
        return axios.get(API+"/book/search/phrase",{ params: { phrase } })
        .then(payload=>{
            console.log(payload);
            dispatch({
                type:SEARCH_BOOK_SUCCESS,
                payload
            })
        })
        .catch(err=>{
            dispatch({
                type:SEARCH_BOOK_FAILURE
            })
        })
    } else {
        return dispatch({
            type: MIN_THREE_CHAR
        })
    }
}


// export const addBook=(title,author,publisher,bookType,amount)=>async(dispatch)=>{
//     dispatch({
//         type:ADD_BOOK_REQUEST
//     })
//     return axios.post('http://localhost:8080/api/book/add',{
//         title,
//         author,
//         publisher,
//         bookType,
//         amount
//     })
//     .then(payload=>{
//         console.log(payload);
//         dispatch({
//             type:ADD_BOOK_SUCCESS,
//             payload
//         })        
//     })
//     .catch(err=>{
//         console.log(err.response.data.message);
//         console.log(err.response.data.details);
//         dispatch({
//             type:ADD_BOOK_FAILURE,
//             err
//         })  
//     })
// }