import React, {useEffect} from "react";
import avatar from "../../assets/layout/avatar.svg";
import stat from "../../assets/layout/stat.svg";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import styled from "styled-components";
import Heading from "../../components/atoms/Heading/Heading";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faExclamationCircle} from "@fortawesome/free-solid-svg-icons";
import Button from "../../components/atoms/Button/Button";
import {Redirect} from "react-router-dom";
import {routers} from "../../data/routers";
import {Link} from "react-router-dom";
import {logOut, getUserLoginAction} from "../../actions";
import $ from "jquery";

const AccountWrapper = styled.div`
  display: flex;
  gap: 40px;
  margin-bottom: 20px;

  @media screen and (max-width: 480px) {
    flex-direction: column;
    align-items: center;
  }

  h2 {
    font-size: 30px;
    margin-top: 36px;
    margin-bottom: 20px;
    font-weight: 700;
    letter-spacing: 1px;
    position: relative;
    text-align: center;
  }
`;

const Img = styled.img`
  width: 200px;
`;

const InfoSection = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 18px;
`;

const SpanContent = styled.p`
  display: none;

  &.is-active {
    display: block;
  }
`;

$(document).ready(function () {
  $("#tabs li").on("click", function () {
    var tabs = $(this).data("tabs");

    $("#tabs li").removeClass("is-active");
    $(this).addClass("is-active");

    $("#tabs-content p").removeClass("is-active");
    $('p[data-content="' + tabs + '"]').addClass("is-active");
  });
});

const AccountPage = ({
  firstName,
  isLogin,
  lastName,
  email,
  out,
  userFavorites,
  userBorrow,
  getUserLogin,
}) => {
  useEffect(() => {
    getUserLogin(localStorage.getItem("id"));
  }, []);
  if (!isLogin) {
    return <Redirect to={routers.login} />;
  }
  return (
    <>
      <AccountWrapper>
        <Img src={avatar} alt="avatar" />
        <InfoSection>
          <h2>
            {firstName} {lastName}
          </h2>
          {email}
          <Link to={routers.userEdit}>
            <Button>Edit profil</Button>
          </Link>
          <Button
            onClick={() => {
              out();
            }}
          >
            Logout
          </Button>
        </InfoSection>
      </AccountWrapper>
      <div className="tabs is-boxed" id="tabs">
        <ul>
          <li className="is-active" data-tabs="1">
            <a>
              <span>Notifications</span>
            </a>
          </li>
          <li data-tabs="2">
            <a>
              <span>Your statistic</span>
            </a>
          </li>
          {/* <li>
            <a>
              <span className="icon is-small">
                <i className="fas fa-film" aria-hidden="true"></i>
              </span>
              <span>Videos</span>
            </a>
          </li>
          <li>
            <a>
              <span className="icon is-small">
                <i className="far fa-file-alt" aria-hidden="true"></i>
              </span>
              <span>Documents</span>
            </a>
          </li> */}
        </ul>
      </div>
      <div id="tabs-content">
        <SpanContent className="is-active" data-content="1">
          <Heading>Notifications</Heading>
          <div className="notification is-warning">
            <FontAwesomeIcon icon={faExclamationCircle} /> Lorem ipsum dolor sit
            amet, consectetur adipiscing elit. Nam vel nulla non ex dignissim
            molestie. Mauris consectetur mollis blandit!
          </div>
          <div className="notification is-danger">
            <FontAwesomeIcon icon={faExclamationCircle} /> Lorem ipsum dolor sit
            amet, consectetur adipiscing elit. Nam vel nulla non ex dignissim
            molestie. Mauris consectetur mollis blandit!
          </div>
          <div className="notification is-info">
            <FontAwesomeIcon icon={faExclamationCircle} /> Lorem ipsum dolor sit
            amet, consectetur adipiscing elit. Nam vel nulla non ex dignissim
            molestie. Mauris consectetur mollis blandit!
          </div>
        </SpanContent>
        <SpanContent data-content="2">
          {" "}
          <Heading>Your statistic</Heading>
          <AccountWrapper>
            <Img src={stat} alt="stat" />
            <InfoSection>
              Favorites book: {userFavorites.length}
              <br />
              Borrowed book: {userBorrow.length}
              {/* <br />
              Borrowed so far: number
              <br />
              The best genre: genre 1, genre 2, genre 3<br /> */}
            </InfoSection>
          </AccountWrapper>
        </SpanContent>
      </div>
    </>
  );
};

AccountPage.propTypes = {
  firstName: PropTypes.string,
  email: PropTypes.string,
  lastName: PropTypes.string,
  isLogin: PropTypes.bool.isRequired,
  out: PropTypes.func.isRequired,
  getUserLogin: PropTypes.func.isRequired,
  userFavorites: PropTypes.array,
  userBorrow: PropTypes.array,
};

const mapStateToProps = ({user, userFavorites, userBorrow}) => {
  const {isLogin} = user;
  const {firstName, lastName, email} = user.userinfo;
  return {
    firstName,
    lastName,
    email,
    isLogin,
    userFavorites,
    userBorrow,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    out: () => dispatch(logOut()),
    getUserLogin: (id) => dispatch(getUserLoginAction(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AccountPage);
