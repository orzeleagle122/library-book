import React, {useEffect, useState} from "react";
import {Input} from "../../components/atoms/Input/Input";
import Heading from "../../components/atoms/Heading/Heading";
import {connect} from "react-redux";
import {searchEmailUser, cleanErrors} from "../../actions";
import PropTypes from "prop-types";
import Button from "../../components/atoms/Button/Button";
import BorrowedStatusList from "../../components/organisms/BorrowedStatusList/BorrowedStatusList";
import Loader from "../../components/molecules/Loader/Loader";
import {routers} from "../../data/routers";
import {Redirect} from "react-router-dom";

const BorrowedStatusPage = ({
  searchUsers,
  search,
  borrows = [],
  showErrors,
  clean,
  rules,
}) => {
  const [searchUser, setSearchUser] = useState("");
  useEffect(() => {
    return () => clean();
  }, []);

  const handleSearchUser = (e) => {
    setSearchUser(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    clean();
    search(searchUser);
    setSearchUser("");
  };

  const isAdmin =
    rules?.toString() === "MODERATOR" || rules?.toString() === "ADMIN";
  if (!isAdmin) {
    return <Redirect to={routers.home} />;
  }

  return (
    <>
      <Heading>Change borrow book status</Heading>
      <h2>Search user by email</h2>
      <form onSubmit={handleSearch}>
        <Input onChange={handleSearchUser} value={searchUser} type="email" />
        {searchUser.length > 0 && <Button>Search</Button>}
      </form>
      <Loader />
      {showErrors}
      <h2>
        {searchUsers.firstName} {searchUsers.lastName}
      </h2>

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
  rules: PropTypes.array,
};

const mapStateToProps = ({searchUsers, showErrors, user}) => {
  const {borrows} = searchUsers;
  const {role} = user.userinfo;
  const rules = role?.map((item) => item.name);
  return {searchUsers, borrows, showErrors, rules};
};

const mapDispatchToProps = (dispatch) => {
  return {
    search: (email) => dispatch(searchEmailUser(email)),
    clean: () => dispatch(cleanErrors()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BorrowedStatusPage);
