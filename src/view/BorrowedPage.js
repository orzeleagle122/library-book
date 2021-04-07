import React, {useEffect} from "react";
import styled from "styled-components";
import BookList from "../components/organisms/BookList/BookList";
//redux connect
import {connect} from "react-redux";
import {
  // GET_TOTALS,
  fetchBooks,
} from "../actions";
import Loader from "../components/molecules/Loader/Loader";
import PropTypes from "prop-types";

const BorrowedWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  flex-wrap: wrap;
  width: 100%;
`;

const BorrowedPage = ({books = [], totalbooks, fetch, favoriteBooks}) => {
  useEffect(() => {
    fetch();
    // total();
  }, [fetch]);

  return (
    <>
      <h2>Number of all books:{totalbooks}</h2>
      {books.length ? (
        <BorrowedWrapper>
          {books.map((item) => (
            <BookList
              key={item.id}
              {...item}
              isFavorite={favoriteBooks.filter((item2) => item2.id === item.id)}
              borrowed
            />
          ))}
        </BorrowedWrapper>
      ) : (
        <Loader />
      )}
    </>
  );
};

BorrowedPage.propTypes = {
  books: PropTypes.array,
  favoriteBooks: PropTypes.array,
  totalbooks: PropTypes.number.isRequired,
  fetch: PropTypes.func.isRequired,
};

const mapStateToProps = ({books, totalbooks, user}) => {
  const {favoriteBooks} = user.userinfo;
  return {books, totalbooks, favoriteBooks};
};

const mapDispatchToProps = (dispatch) => {
  return {
    // total:()=>dispatch({
    //     type: GET_TOTALS
    // }),
    fetch: () => dispatch(fetchBooks()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BorrowedPage);
