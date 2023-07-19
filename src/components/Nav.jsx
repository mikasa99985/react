import React from "react";
import {Link} from 'react-router-dom'
import '../utility/css/Style.css';

const Nav = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Navbar
          </Link>
          <Link className="navbar-brand" to="/sign_up">
            Sign Up
          </Link>
          <Link className="navbar-brand" to="/sign_in">
            Sign In
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Nav;
