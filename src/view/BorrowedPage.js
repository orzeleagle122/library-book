import React, {useEffect} from "react";
// import styled from "styled-components";
// import BookList from "../components/organisms/BookList/BookList";
//redux connect
import {connect} from "react-redux";
import // GET_TOTALS,

"../actions";
// import Loader from "../components/molecules/Loader/Loader";
import PropTypes from "prop-types";

// const BorrowedWrapper = styled.div`
//   display: flex;
//   flex-direction: row;
//   justify-content: flex-start;
//   flex-wrap: wrap;
//   width: 100%;
// `;

const BorrowedPage = ({borrows = [], totalbooks}) => {
  useEffect(() => {}, []);

  return (
    <>
      <h2>Number of all books: {totalbooks}</h2>
      {borrows.map((item) => (
        <div key={item.id}>createdAt: {item.createdAt}</div>
      ))}
    </>
  );
};

BorrowedPage.propTypes = {
  borrows: PropTypes.array,
  totalbooks: PropTypes.number.isRequired,
};

const mapStateToProps = ({user, totalbooks}) => {
  const {borrows} = user.userinfo;
  return {borrows, totalbooks};
};

// const mapDispatchToProps = (dispatch) => {
//   return {

//   };
// };

export default connect(mapStateToProps, null)(BorrowedPage);
