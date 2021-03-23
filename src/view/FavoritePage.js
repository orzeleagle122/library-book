import React from 'react';
import styled from 'styled-components';
import Heading from '../components/atoms/Heading/Heading';
import {bookPopular} from '../data/bookPopular';
import BookList from '../components/organisms/BookList/BookList';

const FavoritePageWrapper=styled.div`
    display:flex;
    flex-direction:row;
    justify-content:space-around;
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
                    <BookList key={item.id} {...item} isLogin={true} favorite/>
                </>
                ))}
                           
            </FavoritePageWrapper>
        </>
     );
}

//future - delete favorite book - should be in BookList component
// const mapDispatchToProps=(dispatch,ownProps)=>{
//     //ownProps - all props transferred to component
//     // console.log(ownProps);
//     const {id}=ownProps;
//     return {
//         //action creator
//         remove:()=>dispatch(removeBook(id)),
//     }
// }
 
export default FavoritePage;