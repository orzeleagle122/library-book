import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import {connect} from 'react-redux';

const Header = ({isLogin,userToken}) => {

  useEffect(()=>{
    const localLogin=localStorage.getItem('loginToken')
    console.log(`zalogowany: ${isLogin}`);
    console.log(localLogin);

    if(localLogin===userToken){
      console.log("ok");
    }

  },[isLogin,userToken])

  return (
  <section className="hero is-primary">
    <div className="hero-body">
      <div className="container has-text-centered">
        <h1 className="title is-1">Book Library</h1>
        <h2 className="subtitle">front+back portfolio</h2>
      </div>
    </div>
    <div className="hero-foot">
      <nav className="tabs">
        <div className="container">
          <ul>
            <li>
              <NavLink to="/">Your account</NavLink>
            </li>
            <li>
              <NavLink to="/borrowed">Borrowed book</NavLink>
            </li>
            <li>
              <NavLink to="/search">Search books</NavLink>
            </li>
            {isLogin?(
            <li>
              <NavLink to="/login">Log out</NavLink>
            </li>
            ):(
            <li>
              <NavLink to="/login">Log in</NavLink>
            </li>
            )}            
          </ul>
        </div>
      </nav>
    </div>
  </section>
  )
};


const mapDispatchToProps=({user})=>{
  const {isLogin,userToken}=user;
  return {
    userToken,
    isLogin
  }
}

export default connect(mapDispatchToProps)(Header);

