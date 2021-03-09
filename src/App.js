import 'bulma/css/bulma.css'
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from './components/Header/Header';
import AccountPage from './view/AccountPage';
import BorrowedPage from './view/BorrowedPage';
import SearchPage from './view/SearchPage';
import LoginPage from './view/LoginPage';
import {connect} from 'react-redux';
import {getUserLoginAction} from './actions';
import MainPage from './view/MainPage';
import GlobalStyle from './globalStyles';
import RegisterPage from './view/RegisterPage';

const App=({getUserLogin})=>{
  useEffect(()=>{
    if(localStorage.getItem('loginToken')){
      getUserLogin(localStorage.getItem('loginToken'));
    }
  },[])

  return (
    <>  
      <GlobalStyle/>
        <Router>
          <Header/>
          <Switch>
            <Route path="/" exact component={MainPage} />
            <Route path="/register" exact component={RegisterPage} />
            <Route path="/account" exact component={AccountPage} />
            <Route path="/borrowed" exact component={BorrowedPage} />
            <Route path="/search" exact component={SearchPage} />
            <Route path="/login" exact component={LoginPage} />
          </Switch>
        </Router>          
    </>
  );
}

const mapDispatchToProps=dispatch=>{
  return {
    getUserLogin: (token)=>dispatch(getUserLoginAction(token))
  }
}

export default connect(null, mapDispatchToProps)(App);
