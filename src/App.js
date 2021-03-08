import 'bulma/css/bulma.css'
import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from './components/Header/Header';
import AccountPage from './view/AccountPage';
import BorrowedPage from './view/BorrowedPage';
import SearchPage from './view/SearchPage';
import LoginPage from './view/LoginPage';

const App=()=>{
  return (
    <>
        <Router>
          <Header/>
          <Route path="/" exact component={AccountPage} />
          <Route path="/borrowed" exact component={BorrowedPage} />
          <Route path="/search" exact component={SearchPage} />
          <Route path="/login" exact component={LoginPage} />
        </Router>          
    </>
  );
}

export default (App);
