import React from 'react';
import styled from 'styled-components';
import BookList from '../components/BookList/BookList';
import {book} from '../data/book';

const BorrowedWrapper=styled.div`
    margin-right: 200px;
    margin-left:200px;
    margin-top:30px;
`;

const BorrowedPage = () => {
    return ( 
        <BorrowedWrapper>
            {book.map(item=>(
                <BookList key={item.title} {...item}/>
            ))}

            
        </BorrowedWrapper>
     );
}
 
export default BorrowedPage;