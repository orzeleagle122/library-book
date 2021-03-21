import React from 'react';
import {
    Book,
    BookPage
} from './Loader.elements';

const Loader = () => {
    return ( 
        <Book>
            <BookPage/>
            <BookPage/>
            <BookPage/>
        </Book>
     );
}
 
export default Loader;