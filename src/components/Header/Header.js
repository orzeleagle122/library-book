import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import {connect} from 'react-redux';
import {
  logOut,
} from '../../actions';

const Header = ({isLogin,out}) => {

  useEffect(()=>{

  },[isLogin])

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
              <NavLink to="/">Home Page</NavLink>
            </li>
            <li>
              <NavLink to="/borrowed">Borrowed book</NavLink>
            </li>
            <li>
              <NavLink to="/search">Search books</NavLink>
            </li>
            {console.log(isLogin)}
            {isLogin?(
              <>
                <li>
                  <NavLink to='/account'>Your account</NavLink>
                </li>
                <li>
                  <NavLink to='/login' onClick={out}>Log out</NavLink>
                </li>
              </>
            ):(
              <>
                <li>
                  <NavLink to="/login">Log in</NavLink>
                </li>
                <li>
                  <NavLink to="/register">Register</NavLink>
                </li>
              </>
            )}            
          </ul>
        </div>
      </nav>
    </div>
  </section>
  )
};


const mapStateToProps=({user})=>{
  const {isLogin,userToken}=user;
  return {
    userToken,
    isLogin
  }
}

const mapDispatchToProps=dispatch=>{
  return {
    out:()=>dispatch(logOut())
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Header);

