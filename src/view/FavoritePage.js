import React from 'react';
import styled from 'styled-components';
import Heading from '../components/atoms/Heading/Heading';
import {bookPopular} from '../data/bookPopular';
import BookList from '../components/organisms/BookList/BookList';

const FavoritePageWrapper=styled.div`
    display:flex;
    flex-direction:row;
    flex-wrap:wrap;
    width:100%;
`;

const FavoritePage = () => {
    return ( 
        <>
            <Heading>
                Favorite Books
            </Heading>
            <FavoritePageWrapper>
            {bookPopular.map(item=>(
                <>
                    <BookList {...item}/>
                </>
                ))}
                           
            </FavoritePageWrapper>
        </>
     );
}
 
export default FavoritePage;