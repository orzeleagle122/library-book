import React from "react";
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
import {logOut} from "../../actions";

const AccountWrapper = styled.div`
  display: flex;
  gap: 40px;
  margin-bottom: 20px;

  @media screen and (max-width: 480px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Img = styled.img`
  width: 200px;
`;

const InfoSection = styled.div`
  display: flex;
  flex-direction: column;
`;

const AccountPage = ({firstName, isLogin, lastName, email, out}) => {
  if (!isLogin) {
    return <Redirect to={routers.login} />;
  }
  return (
    <>
      <AccountWrapper>
        <Img src={avatar} alt="avatar" />
        <InfoSection>
          <Heading>
            {firstName} {lastName}
          </Heading>
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
      <div className="tabs is-boxed">
        <ul>
          <li className="is-active" data-tab="1">
            <a>
              <span>Notifications</span>
            </a>
          </li>
          <li data-tab="2">
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
      <Heading>Your statistic</Heading>
      <AccountWrapper>
        <Img src={stat} alt="stat" />
        <InfoSection>
          Favorites book: number
          <br />
          Active Borrowed book: number
          <br />
          Borrowed so far: number
          <br />
          The best genre: genre 1, genre 2, genre 3<br />
        </InfoSection>
      </AccountWrapper>
    </>
  );
};

AccountPage.propTypes = {
  firstName: PropTypes.string,
  email: PropTypes.string,
  lastName: PropTypes.string,
  isLogin: PropTypes.bool.isRequired,
  out: PropTypes.func.isRequired,
};

const mapStateToProps = ({user}) => {
  const {isLogin} = user;
  const {firstName, lastName, email} = user.userinfo;
  return {
    firstName,
    lastName,
    email,
    isLogin,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    out: () => dispatch(logOut()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AccountPage);
