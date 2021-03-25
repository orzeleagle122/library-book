import React, { useEffect } from 'react';
import styled from 'styled-components';
import BookList from '../components/organisms/BookList/BookList';
//redux connect
import {connect} from 'react-redux';
import {
    // GET_TOTALS,
    fetchBooks
} from '../actions';
import Loader from '../components/molecules/Loader/Loader';

const BorrowedWrapper=styled.div`
    display:flex;
    flex-direction:row;
    justify-content:flex-start;
    flex-wrap:wrap;
    width:100%;
`;

const BorrowedPage = ({books=[],totalbooks,fetch}) => {
    useEffect(()=>{
        fetch();  
        // total(); 


    },
    [fetch]
    )

    return ( 
        <> 
            <h2>Number of all books:{totalbooks}</h2>
            {books.length?(
                <BorrowedWrapper>
                    {books.map(item=>(
                        <BookList key={item.id} {...item} borrowed/>
                    ))}            
                </BorrowedWrapper>
            ):(
                <Loader/>
            )}
            
        </>
     );
}

const mapStateToProps=({books,totalbooks,user})=>{
    return {books,totalbooks}
}

const mapDispatchToProps=dispatch=>{
    return {
        
        // total:()=>dispatch({
        //     type: GET_TOTALS
        // }),
        fetch:()=>dispatch(fetchBooks()),
    }
}
 
export default connect(mapStateToProps,mapDispatchToProps)(BorrowedPage);