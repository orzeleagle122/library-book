import React, {useEffect} from "react";
import styled from "styled-components";
import Heading from "../../components/atoms/Heading/Heading";
import BookList from "../../components/organisms/BookList/BookList";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {getUserLoginAction} from "../../actions";

const FavoritePageWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const FavoritePage = ({userFavorites, getUserLogin}) => {
  useEffect(() => {
    getUserLogin(localStorage.getItem("id"));
  }, []);
  return (
    <>
      <Heading>Favorite Books</Heading>
      <FavoritePageWrapper>
        {userFavorites.map((item) => (
          <BookList key={item.id} {...item} isLogin={true} favorite />
        ))}
        {userFavorites.length === 0 && <>You dont like any books yet!</>}
      </FavoritePageWrapper>
    </>
  );
};

FavoritePage.propTypes = {
  userFavorites: PropTypes.array,
  getUserLogin: PropTypes.func.isRequired,
};

const mapStatetoProps = ({userFavorites}) => {
  return {
    userFavorites,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getUserLogin: (id) => dispatch(getUserLoginAction(id)),
  };
};

// const mapDispatchToProps=(dispatch,ownProps)=>{
//     //ownProps - all props transferred to component
//     // console.log(ownProps);
// }

export default connect(mapStatetoProps, mapDispatchToProps)(FavoritePage);
