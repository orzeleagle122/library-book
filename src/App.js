import "bulma/css/bulma.css";
import React, {useEffect} from "react";
import {BrowserRouter as Router} from "react-router-dom";
import {connect} from "react-redux";
import {getUserLoginAction} from "./actions";
import Sidebar from "./components/organisms/Sidebar/Sidebar";
import GlobalStyle from "./globalStyles";
import MainTemplate from "./template/MainTemplate";

const App = ({getUserLogin}) => {
  useEffect(() => {
    if (localStorage.getItem("loginToken")) {
      getUserLogin(localStorage.getItem("loginToken"));
    }
  }, [getUserLogin]);

  return (
    <>
      <GlobalStyle />
      <Router>
        <MainTemplate />
        <Sidebar />
      </Router>
    </>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    getUserLogin: (token) => dispatch(getUserLoginAction(token)),
  };
};

export default connect(null, mapDispatchToProps)(App);
