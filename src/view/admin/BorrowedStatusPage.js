import React, {useState} from "react";
import {Input} from "../../components/atoms/Input/Input";
import Heading from "../../components/atoms/Heading/Heading";
import {connect} from "react-redux";
import {searchEmailUser} from "../../actions";
import PropTypes from "prop-types";

const BorrowedStatusPage = ({searchUsers, search}) => {
  const [searchUser, setSearchUser] = useState("");

  const handleSearchUser = (e) => {
    setSearchUser(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    search(searchUser);
  };
  return (
    <>
      <Heading>Search user by email</Heading>
      <form>
        <Input onChange={handleSearchUser} value={searchUser} />
        <button onClick={handleSearch}>szukaj</button>
        {/* {searchUsers.map((item) => (
        <div key={item.id}>{item.email}</div>
      ))} */}
      </form>
      {searchUsers.email}
    </>
  );
};

BorrowedStatusPage.propTypes = {
  searchUsers: PropTypes.array,
  search: PropTypes.func.isRequired,
};

const mapStateToProps = ({searchUsers}) => {
  return {searchUsers};
};

const mapDispatchToProps = (dispatch) => {
  return {
    search: (email) => dispatch(searchEmailUser(email)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BorrowedStatusPage);
