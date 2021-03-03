export const GET_TOTALS='GET_TOTALS';
export const REMOVE_BOOK='REMOVE_BOOK';
export const SEARCH_BOOK='SEARCH_BOOK';

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