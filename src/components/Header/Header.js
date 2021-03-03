import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => (
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
          </ul>
        </div>
      </nav>
    </div>
  </section>
);

export default Header;
