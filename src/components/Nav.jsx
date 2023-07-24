import React from "react";
import { Link } from 'react-router-dom'
import '../utility/css/Navbar.css';
import icon from '../assets/game_favicon.png'

const Nav = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg floating-shadow" style={{ backgroundColor: 'rgb(0 0 0)' }} >
        <div className="container-fluid">

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            {/* <span className="navbar-toggler-icon"></span> */}
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" class="bi bi-three-dots-vertical" viewBox="0 0 16 16">
              <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
            </svg>
          </button>

          <div className="d-flex m-auto" style={{cursor:'pointer'}}>
            <img className="anima-icon " src={icon} style={{ width: '40px' }} alt="" />
            <Link className="navbar-brand ms-3 fw-bolder" style={{ color: 'white' }} to="/">
              VIBRANT
            </Link>
          </div>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0" style={{ textTransform: 'uppercase', fontWeight: 'bolder' }}>

              <li className="nav-item mx-4">
                <Link className="nav-link active" style={{ color: 'white' }} aria-current="page" href="/">play</Link>
              </li>

              <li className="nav-item mx-4">
                <Link className="nav-link" style={{ color: 'white' }} to="/shop">Shop</Link>
              </li>

              <li className="nav-item mx-4">
                <Link className="nav-link" style={{ color: 'white' }} to="/explore">Explore</Link>
              </li>


              <li className="nav-item mx-4">
                <Link className="nav-link" style={{ color: 'white' }} to="/help">Help</Link>
              </li>

            </ul>
            <div className="" >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" class="bi bi-search" viewBox="0 0 16 16">
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
              </svg>
            </div>
          </div>



          <div class="dropdown dropstart">
            <div className="ms-4 me-3" data-bs-toggle="dropdown" aria-expanded="false" style={{cursor:'pointer'}}>
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="white" class="bi bi-person-circle" viewBox="0 0 16 16">
                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
              </svg>
            </div>

            <ul class="dropdown-menu">
              <li><Link class="dropdown-item" to="/sign_up">Sign up</Link></li>
              <li><hr class="dropdown-divider"/></li>
              <li><Link class="dropdown-item" to="/sign_in">Sign in</Link></li>
            </ul>
          </div>


        </div>
      </nav>
    </>
  );
};

export default Nav;
