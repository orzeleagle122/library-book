import React, {useEffect, useState} from "react";
import {Input} from "../../components/atoms/Input/Input";
import Heading from "../../components/atoms/Heading/Heading";
import {connect} from "react-redux";
import {searchEmailUser, cleanErrors} from "../../actions";
import PropTypes from "prop-types";
import Button from "../../components/atoms/Button/Button";
import BorrowedStatusList from "../../components/organisms/BorrowedStatusList/BorrowedStatusList";
import Loader from "../../components/molecules/Loader/Loader";

const BorrowedStatusPage = ({
  searchUsers,
  search,
  borrows = [],
  showErrors,
  clean,
}) => {
  const [searchUser, setSearchUser] = useState("");
  useEffect(() => {
    return () => clean();
  }, [borrows]);

  const handleSearchUser = (e) => {
    setSearchUser(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    clean();
    search(searchUser);
    setSearchUser("");
  };

  return (
    <>
      <Heading>Search user by email</Heading>
      <form onSubmit={handleSearch}>
        <Input onChange={handleSearchUser} value={searchUser} type="email" />
        {searchUser.length > 0 && <Button>Search</Button>}
      </form>
      <Loader />
      {showErrors}
      <Heading>
        {searchUsers.firstName} {searchUsers.lastName}
      </Heading>

      {borrows.map((item) => (
        <BorrowedStatusList key={item.id} {...item} />
      ))}
    </>
  );
};

BorrowedStatusPage.propTypes = {
  searchUsers: PropTypes.array,
  borrows: PropTypes.array,
  search: PropTypes.func.isRequired,
  showErrors: PropTypes.any,
  clean: PropTypes.func.isRequired,
};

const mapStateToProps = ({searchUsers, showErrors}) => {
  const {borrows} = searchUsers;
  return {searchUsers, borrows, showErrors};
};

const mapDispatchToProps = (dispatch) => {
  return {
    search: (email) => dispatch(searchEmailUser(email)),
    clean: () => dispatch(cleanErrors()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BorrowedStatusPage);
