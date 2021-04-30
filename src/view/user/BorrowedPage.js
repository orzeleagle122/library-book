import React, {useEffect} from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import BorrowedStatusList from "../../components/organisms/BorrowedStatusList/BorrowedStatusList";
import Heading from "../../components/atoms/Heading/Heading";
import {getUserLoginAction} from "../../actions";
import {goTop} from "../../data/function";

const BorrowedPage = ({borrows = [], getUserLogin}) => {
  useEffect(() => {
    goTop();
    getUserLogin(localStorage.getItem("id"));
  }, []);

  const awaiting = borrows.filter((item) => item.status === "NOT_APPROVED");
  const borrowed = borrows.filter((item) => item.status === "APPROVED");
  const returned = borrows.filter((item) => item.status === "DEVOTED");

  return (
    <>
      <Heading>Your borrowed book</Heading>
      <br />
      {borrows.length === 0 ? (
        "No borrowings"
      ) : (
        <>
          <h2>Books waiting for pick up ({awaiting.length})</h2>
          {awaiting.map((item) => (
            <BorrowedStatusList key={item.id} {...item} borrow />
          ))}
          <h2>Books borrowed ({borrowed.length})</h2>
          {borrowed.map((item) => (
            <BorrowedStatusList key={item.id} {...item} borrow />
          ))}
          <h2>Your history ({returned.length})</h2>
          {returned.map((item) => (
            <BorrowedStatusList key={item.id} {...item} borrow />
          ))}
        </>
      )}
    </>
  );
};

BorrowedPage.propTypes = {
  borrows: PropTypes.array,
  getUserLogin: PropTypes.func.isRequired,
};

const mapStateToProps = ({user}) => {
  const {borrows} = user.userinfo;
  return {borrows};
};

const mapDispatchToProps = (dispatch) => {
  return {
    getUserLogin: (token) => dispatch(getUserLoginAction(token)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BorrowedPage);
