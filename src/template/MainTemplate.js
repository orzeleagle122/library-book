import React from "react";
import {Route} from "react-router";
import AccountPage from "../view/AccountPage";
import BorrowedPage from "../view/BorrowedPage";
import LoginPage from "../view/LoginPage";
import RegisterPage from "../view/RegisterPage";
import MainPage from "../view/MainPage";
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
} from "./MainTemplate.elements";
import AddBook from "../view/AddBook";
import main_img from "../assets/layout/main_img.jpg";
import FavoritePage from "../view/FavoritePage";
import {routers} from "../data/routers";
import BookDetailsPage from "../view/BookDetailsPage";
import AddGenre from "../view/AddGenre";

const MainTemplate = () => {
  return (
    <>
      <MainTemplateWrapper>
        <ImageWrapper>
          <Image src={main_img} />
          <ImageTextContainer>
            <HeaderOne>Welcome to the lending library!</HeaderOne>
            <SpanText>
              Reading books is the most beautiful fun humanity has ever imagined
            </SpanText>
            <StyledButton>Register now!</StyledButton>
          </ImageTextContainer>
        </ImageWrapper>
        <GridContainer>
          <MainContent>
            <Route path={routers.home} exact component={MainPage} />
            <Route path={routers.account} exact component={AccountPage} />
            <Route path={routers.borrowed} exact component={BorrowedPage} />
            <Route path={routers.login} exact component={LoginPage} />
            <Route path={routers.register} exact component={RegisterPage} />
            <Route path={routers.favorite} exact component={FavoritePage} />
            <Route path={routers.addBook} exact component={AddBook} />
            <Route path={routers.addBook} exact component={AddBook} />
            <Route path={routers.addGenre} exact component={AddGenre} />
            <Route path={routers.book} exact component={BookDetailsPage} />
          </MainContent>
        </GridContainer>
      </MainTemplateWrapper>
    </>
  );
};

export default MainTemplate;
