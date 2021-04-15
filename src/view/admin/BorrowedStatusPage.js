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
  role,
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

  const isAdmin = role === "MODERATOR" || role === "ADMIN";
  if (!isAdmin) {
    return <Redirect to={routers.home} />;
  }

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
  role: PropTypes.string,
};

const mapStateToProps = ({searchUsers, showErrors, user}) => {
  const {borrows} = searchUsers;
  const {role} = user.userinfo;
  return {searchUsers, borrows, showErrors, role};
};

const mapDispatchToProps = (dispatch) => {
  return {
    search: (email) => dispatch(searchEmailUser(email)),
    clean: () => dispatch(cleanErrors()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BorrowedStatusPage);
