import React, {useEffect} from "react";
import {Link, NavLink} from "react-router-dom";
import NavbarButton from "../../atoms/NavbarButton/NavbarButton";
import {connect} from "react-redux";
import {logOut} from "../../../actions";
import {
  Wrapper,
  LogoLink,
  LinkList,
  LogoutButton,
  SpanText,
  BsFillPersonFillIcon,
  BsFillBookmarkFillIcon,
  MdFavoriteIcon,
  BsHouseDoorFillIcon,
  RiLogoutBoxLineIcon,
  ItemList,
} from "./Sidebar.elements";
import PropTypes from "prop-types";

const Sidebar = ({isLogin, out}) => {
  useEffect(() => {}, [isLogin]);

  return (
    <Wrapper>
      <Link to="/">
        <LogoLink>
          <RiLogoutBoxLineIcon />
        </LogoLink>
      </Link>
      <LinkList isLogin={isLogin}>
        <ItemList>
          <NavLink exact to="/">
            <NavbarButton>
              <BsHouseDoorFillIcon />
              <SpanText>Home</SpanText>
            </NavbarButton>
          </NavLink>
        </ItemList>
        {/* <li>
                    <NavLink exact to='/search'>
                        <NavbarButton><BsSearchIcon/><SpanText>Explore</SpanText></NavbarButton>
                    </NavLink> 
                </li> */}
        {isLogin && (
          <>
            <ItemList>
              <NavLink exact to="/borrowed">
                <NavbarButton>
                  <BsFillBookmarkFillIcon />
                  <SpanText>Borrowed</SpanText>
                </NavbarButton>
              </NavLink>
            </ItemList>
            <ItemList>
              <NavLink exact to="/favorite">
                <NavbarButton>
                  <MdFavoriteIcon />
                  <SpanText>Favorite</SpanText>
                </NavbarButton>
              </NavLink>
            </ItemList>
          </>
        )}
        <ItemList>
          <NavLink exact to="/login">
            <NavbarButton>
              <BsFillPersonFillIcon />
              <SpanText>{isLogin ? "Profile" : "Sign in"}</SpanText>
            </NavbarButton>
          </NavLink>
        </ItemList>
      </LinkList>
      <LogoutButton>
        {isLogin && (
          <NavLink exact to="/login" onClick={out}>
            <NavbarButton>
              <RiLogoutBoxLineIcon />
              <SpanText>Logout</SpanText>{" "}
            </NavbarButton>
          </NavLink>
        )}
      </LogoutButton>
    </Wrapper>
  );
};

Sidebar.propTypes = {
  isLogin: PropTypes.bool.isRequired,
  out: PropTypes.func.isRequired,
};

const mapStateToProps = ({user}) => {
  const {isLogin, userToken} = user;
  return {
    userToken,
    isLogin,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    out: () => dispatch(logOut()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
