import React, {useEffect} from "react";
// import styled from "styled-components";
// import BookList from "../components/organisms/BookList/BookList";
//redux connect
import {connect} from "react-redux";
import // GET_TOTALS,

"../../actions";
// import Loader from "../components/molecules/Loader/Loader";
import PropTypes from "prop-types";

// const BorrowedWrapper = styled.div`
//   display: flex;
//   flex-direction: row;
//   justify-content: flex-start;
//   flex-wrap: wrap;
//   width: 100%;
// `;

const BorrowedPage = ({borrows = []}) => {
  useEffect(() => {}, []);
  console.log(borrows);
  return (
    <>
      <h2>Number of all books: {borrows.length}</h2>
      {borrows.map((item) => (
        <div key={item.id}>
          createdAt: {item.createdAt}, expired: {item.expired}, status:{" "}
          {item.status}, book title: {item.book.title}
        </div>
      ))}
    </>
  );
};

BorrowedPage.propTypes = {
  borrows: PropTypes.array,
};

const mapStateToProps = ({user}) => {
  const {borrows} = user.userinfo;
  return {borrows};
};

// const mapDispatchToProps = (dispatch) => {
//   return {

//   };
// };

export default connect(mapStateToProps, null)(BorrowedPage);
