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
    LeftPage,
    RightPage
} from './MainTemplate.elements';
import AddBook from '../view/AddBook';

const MainTemplate = () => {

    return ( 
        <>
            <GridContainer>
                <LeftPage> 
                    <Route path="/" exact component={MainPage} />
                    <Route path="/account" exact component={AccountPage} />
                    <Route path="/borrowed" exact component={BorrowedPage} />
                    <Route path="/search" exact component={SearchPage} />
                    <Route path="/login" exact component={LoginPage} />
                    <Route path="/register" exact component={RegisterPage} />
                    <Route path="/add" exact component={AddBook} />
                </LeftPage>
                {/* <RightPage>
                            tytul nazwa ksiazki itp po kliknieciu w ksiązkę                    
                </RightPage> */}

            </GridContainer>
            
        </>
     );
}
 
export default MainTemplate;