import "bulma/css/bulma.css";
import React, {useEffect} from "react";
import {HashRouter as Router} from "react-router-dom";
import {connect} from "react-redux";
import {getUserLoginAction} from "./actions";
import Sidebar from "./components/organisms/Sidebar/Sidebar";
import GlobalStyle from "./globalStyles";
import MainTemplate from "./template/MainTemplate";
import PropTypes from "prop-types";

const App = ({getUserLogin}) => {
  useEffect(() => {
    if (localStorage.getItem("loginToken")) {
      getUserLogin(localStorage.getItem("id"));
    }
  }, [getUserLogin]);

  return (
    <>
      <GlobalStyle />
      <Router basename={process.env.PUBLIC_URL}>
        <MainTemplate />
        <Sidebar />
      </Router>
    </>
  );
};

App.propTypes = {
  getUserLogin: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => {
  return {
    getUserLogin: (token) => dispatch(getUserLoginAction(token)),
  };
};

export default connect(null, mapDispatchToProps)(App);
