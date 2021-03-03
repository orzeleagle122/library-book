import React, { useEffect } from 'react';
import styled from 'styled-components';
import BookList from '../components/BookList/BookList';
//redux connect
import {connect} from 'react-redux';
import {
    GET_TOTALS
} from '../actions';

const BorrowedWrapper=styled.div`
    margin-right: 200px;
    margin-left:200px;
    margin-top:30px;
`;

const BorrowedPage = ({books=[],totalbooks,dispatch}) => {
    useEffect(()=>{
        dispatch({
            type: GET_TOTALS
        })
    },[books,dispatch])

    if(books.length===0){
        return (
            <>
                brak ksiazek
            </>
        )
    }

    return ( 
        <> 
            <h2>Number of books:{totalbooks}</h2>
            <BorrowedWrapper>
                {books.map(item=>(
                    <BookList key={item.id} {...item}/>
                ))}            
            </BorrowedWrapper>
        </>
     );
}

const mapStateToProps=({books,totalbooks})=>{
    return {books,totalbooks}
}
 
export default connect(mapStateToProps)(BorrowedPage);