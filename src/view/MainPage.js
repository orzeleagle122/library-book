import React from 'react';
import Input from '../components/atoms/Input/Input';
import Heading from '../components/atoms/Heading/Heading';
import styled from 'styled-components';
import {bookPopular} from '../data/bookPopular.js';
import BookPopular from '../components/molecules/BookPopular/BookPopular';

const PopularBookWrapper=styled.div`
    display:flex;
    justify-content: space-between;
    gap: 10px
`;

const MainPage = () => {
    return ( 
        <>
            <Input placeholder="Search your favorite book and check if it is available"/>
            <Heading>Popular Books</Heading>
            <PopularBookWrapper>
                {bookPopular.map(item=>(
                    <BookPopular key={item.id} {...item} />
                ))}
            </PopularBookWrapper>

        </>
     );
}
 
export default MainPage;