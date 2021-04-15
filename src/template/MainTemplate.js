import React from "react";
import {Route} from "react-router";
import AccountPage from "../view/user/AccountPage";
import BorrowedPage from "../view/user/BorrowedPage";
import LoginPage from "../view/user/LoginPage";
import RegisterPage from "../view/user/RegisterPage";
import MainPage from "../view/user/MainPage";
import {
  GridContainer,
  MainContent,
  ImageWrapper,
  Image,
  MainTemplateWrapper,
  ImageTextContainer,
  HeaderOne,
  SpanText,
  StyledButton,
  SuccessMessage,
  SuccessMessageHeader,
  AdminWrapper,
  FaBookMedicalIcon,
  GiCardExchangeIcon,
  FaBookReaderIcon,
} from "./MainTemplate.elements";
import AddBook from "../view/admin/AddBook";
import main_img from "../assets/layout/main_img.jpg";
import FavoritePage from "../view/user/FavoritePage";
import {routers} from "../data/routers";
import BookDetailsPage from "../view/user/BookDetailsPage";
import AddGenre from "../view/admin/AddGenre";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {closeSuccessMessage, getUserLoginAction} from "../actions";
import {Link} from "react-router-dom";
import SearchPage from "../view/user/SearchPage";
import BorrowedStatusPage from "../view/admin/BorrowedStatusPage";
import EditUserPage from "../view/user/EditUserPage";

class MainTemplate extends React.Component {
  componentDidUpdate() {
    const changeDisplayNotification = () => {
      const notification = document.querySelector(".is-success");
      if (notification) {
        notification.style.display = "none";
      }
      const {close} = this.props;
      close();

      // notification.style.display = "flex";
      //tutaj dodajać czyszczenie błedów! a następnie usunąć ze wszystkich stron!
    };
    if (this.props.succesMessage) {
      setTimeout(changeDisplayNotification, 3000);
    }

    // this.props.getUserLogin(localStorage.getItem("loginToken"));
  }

  render() {
    const isAdmin =
      this.props.role === "MODERATOR" || this.props.role === "ADMIN";
    return (
      <>
        <MainTemplateWrapper>
          {this.props.succesMessage && (
            <SuccessMessage className="message is-success">
              <SuccessMessageHeader className="message-header">
                <p>Success: {this.props.succesMessage}</p>
              </SuccessMessageHeader>
            </SuccessMessage>
          )}
          <ImageWrapper>
            <Image src={main_img} />
            <ImageTextContainer>
              <HeaderOne>Welcome to the library!</HeaderOne>
              <SpanText>
                Reading books is the most beautiful fun humanity has ever
                imagined
              </SpanText>
              {!this.props.isLogin && (
                <Link to={routers.register}>
                  <StyledButton>Register now!</StyledButton>
                </Link>
              )}
            </ImageTextContainer>
          </ImageWrapper>
          {isAdmin && (
            <AdminWrapper>
              <Link to={routers.addBook}>
                <FaBookMedicalIcon />
              </Link>
              <Link to={routers.changeStatus}>
                <GiCardExchangeIcon />
              </Link>
              <Link to={routers.addGenre}>
                <FaBookReaderIcon />
              </Link>
            </AdminWrapper>
          )}

          <GridContainer>
            <MainContent>
              <Route path={routers.home} exact component={MainPage} />
              <Route path={routers.account} exact component={AccountPage} />
              <Route path={routers.borrowed} exact component={BorrowedPage} />
              <Route path={routers.login} exact component={LoginPage} />
              <Route path={routers.register} exact component={RegisterPage} />
              <Route path={routers.favorite} exact component={FavoritePage} />
              <Route path={routers.addBook} exact component={AddBook} />
              <Route path={routers.addGenre} exact component={AddGenre} />
              <Route path={routers.book} exact component={BookDetailsPage} />
              <Route path={routers.user} exact component={AccountPage} />
              <Route path={routers.search} exact component={SearchPage} />
              <Route path={routers.userEdit} exact component={EditUserPage} />
              <Route
                path={routers.changeStatus}
                exact
                component={BorrowedStatusPage}
              />
            </MainContent>
          </GridContainer>
        </MainTemplateWrapper>
      </>
    );
  }
}

MainTemplate.propTypes = {
  succesMessage: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  close: PropTypes.func.isRequired,
  getUserLogin: PropTypes.func.isRequired,
  isLogin: PropTypes.bool,
  role: PropTypes.string,
};

const mapStateToProps = ({succesMessage, user}) => {
  const {isLogin} = user;
  const {role} = user.userinfo;
  return {
    succesMessage,
    isLogin,
    role,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    // add timeout?!
    close: () => dispatch(closeSuccessMessage()),
    getUserLogin: (token) => dispatch(getUserLoginAction(token)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainTemplate);
