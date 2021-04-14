import React from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import BorrowedStatusList from "../../components/organisms/BorrowedStatusList/BorrowedStatusList";
import Heading from "../../components/atoms/Heading/Heading";

const BorrowedPage = ({borrows = []}) => {
  return (
    <>
      <Heading>Your borrowed book</Heading>
      <h2>Number of borrows: {borrows.length}</h2>
      <br />
      {borrows.map((item) => (
        <BorrowedStatusList key={item.id} {...item} borrow />
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
