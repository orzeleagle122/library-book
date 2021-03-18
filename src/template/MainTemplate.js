import React from 'react';
import { Route } from 'react-router';
import AccountPage from '../view/AccountPage';
import BorrowedPage from '../view/BorrowedPage';
import SearchPage from '../view/SearchPage';
import LoginPage from '../view/LoginPage';
import RegisterPage from '../view/RegisterPage';
import MainPage from '../view/MainPage';
import {
    GridContainer,
    MainContent,
    ImageWrapper,
    Image,
    MainTemplateWrapper,
    ImageTextContainer,
    HeaderOne,
    SpanText,
    StyledButton
} from './MainTemplate.elements';
import AddBook from '../view/AddBook';
import main_img from '../assets/layout/main_img.jpg';
import FavoritePage from '../view/FavoritePage';

const MainTemplate = () => {

    return ( 
        <>
            <MainTemplateWrapper>
                <ImageWrapper>
                    <Image src={main_img} />
                    <ImageTextContainer>
                        <HeaderOne>
                            Welcome to the lending library!
                        </HeaderOne>
                        <SpanText>
                            Reading books is the most beautiful fun humanity has ever imagined
                        </SpanText>
                        <StyledButton>
                            Register now!
                        </StyledButton>
                    </ImageTextContainer>
                </ImageWrapper>
                <GridContainer>
                    <MainContent> 
                        <Route path="/" exact component={MainPage} />
                        <Route path="/account" exact component={AccountPage} />
                        <Route path="/borrowed" exact component={BorrowedPage} />
                        <Route path="/search" exact component={SearchPage} />
                        <Route path="/login" exact component={LoginPage} />
                        <Route path="/register" exact component={RegisterPage} />
                        <Route path="/favorite" exact component={FavoritePage} />
                        <Route path="/add" exact component={AddBook} />
                    </MainContent>
                </GridContainer>
            </MainTemplateWrapper>
        </>
     );
}
 
export default MainTemplate;