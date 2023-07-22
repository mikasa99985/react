import React from "react";
import {Link} from 'react-router-dom'
import '../utility/css/Style.css';

const Nav = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
        <div class="collapse navbar-collapse" id="navbarSupportedContent"></div>
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
        <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul class="dropdown-menu">
          <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"></hr></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li class="nav-item">
        <a class="nav-link disabled">Disabled</a>
        </li>
        </ul>
        <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        </input>
        <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
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
