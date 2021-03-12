import React from 'react';
import {
    BookPopularWrapper
} from './BookPopular.elements';

const BookPopular = ({title}) => {
    return ( 
        <>
            <BookPopularWrapper>
                {title}
            </BookPopularWrapper>
        </>
     );
}
 
export default BookPopular;