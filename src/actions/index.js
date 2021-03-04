import axios from 'axios';

export const GET_TOTALS='GET_TOTALS';
export const REMOVE_BOOK='REMOVE_BOOK';
export const SEARCH_BOOK='SEARCH_BOOK';
export const SEARCH_FORM_VALUE='SEARCH_FORM_VALUE';
export const FETCH_BOOKS='FETCH_BOOKS';


export const fetchBooks=()=>{
    const fetchData=async()=>{
        const response=await axios.get("https://run.mocky.io/v3/ab9d6e35-04d4-4b52-8710-754180d4d6a6");
        return response.data
    };

    return {
        type:FETCH_BOOKS,
        payload:{
            books: ()=>fetchData()
        }
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