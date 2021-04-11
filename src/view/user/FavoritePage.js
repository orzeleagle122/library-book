import React from "react";
import styled from "styled-components";
import Heading from "../../components/atoms/Heading/Heading";
import BookList from "../../components/organisms/BookList/BookList";
import {connect} from "react-redux";
import PropTypes from "prop-types";

const FavoritePageWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const FavoritePage = ({favoriteBooks}) => {
  return (
    <>
      <Heading>Favorite Books</Heading>
      <FavoritePageWrapper>
        {favoriteBooks.map((item) => (
          <BookList key={item.id} {...item} isLogin={true} favorite />
        ))}
        {favoriteBooks.length === 0 && <>You dont like any books yet!</>}
      </FavoritePageWrapper>
    </>
  );
};

FavoritePage.propTypes = {
  favoriteBooks: PropTypes.array,
  getUserLogin: PropTypes.func.isRequired,
};

const mapStatetoProps = ({user}) => {
  const {favoriteBooks} = user.userinfo;
  return {
    favoriteBooks,
  };
};

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

export default connect(mapStatetoProps, null)(FavoritePage);
