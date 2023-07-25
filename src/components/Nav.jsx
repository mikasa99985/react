import React from "react";
import { Link } from 'react-router-dom'
import '../utility/css/Navbar.css';
import icon from '../assets/game_favicon.png'
import iconGame from '../assets/favicon.png'

const Nav = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg floating-shadow" style={{ backgroundColor: 'rgb(0 0 0)' }} >
        <div className="container-fluid">

          {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" className="bi bi-three-dots-vertical" viewBox="0 0 16 16">
              <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
            </svg>
          </button> */}

          <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" className="bi bi-three-dots-vertical" viewBox="0 0 16 16">
              <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
            </svg>
          </button>

          <div className="d-flex m-auto" style={{ cursor: 'pointer' }}>
            <img className="anima-icon " src={icon} style={{ width: '40px' }} alt="" />
            <Link className="navbar-brand ms-3 fw-bolder" style={{ color: 'white' }} to="/">
              VIBRANT
            </Link>
          </div>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0" style={{ textTransform: 'uppercase', fontWeight: 'bolder' }}>

              <li className="nav-item nav-item-pop mx-4">
                <Link className="nav-link active" style={{ color: 'white' }} aria-current="page" to="/">play</Link>
              </li>

              <li className="nav-item nav-item-pop mx-4">
                <Link className="nav-link" style={{ color: 'white' }} to="/shop">Shop</Link>
              </li>

              <li className="nav-item nav-item-pop mx-4">
                <Link className="nav-link" style={{ color: 'white' }} to="/explore">Explore</Link>
              </li>


              <li className="nav-item nav-item-pop mx-4">
                <Link className="nav-link" style={{ color: 'white' }} to="/help">Help</Link>
              </li>

            </ul>
            <div className="" >
              <svg xmlns="http://www.w3.org/2000/svg" data-bs-toggle="modal" data-bs-target="#searchModal" style={{ cursor: 'pointer' }} width="20" height="20" fill="white" className="bi bi-search" viewBox="0 0 16 16">
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
              </svg>
            </div>
          </div>

          <div className="dropdown dropstart">
            <div className="ms-4 me-3" data-bs-toggle="dropdown" aria-expanded="false" style={{ cursor: 'pointer' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="white" className="bi bi-person-circle" viewBox="0 0 16 16">
                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
              </svg>
            </div>

            <ul className="dropdown-menu">
              <li><Link className="dropdown-item" to="/sign_up">Sign up</Link></li>
              <li><hr className="dropdown-divider" /></li>
              <li><Link className="dropdown-item" to="/sign_in">Sign in</Link></li>
            </ul>
          </div>


        </div>
      </nav>

      {/* <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling">Enable body scrolling</button> */}

      <div class="offcanvas offcanvas-start" style={{ backgroundColor: 'black' }} data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
        <div class="offcanvas-header">
          <img className="anima-icon" src={icon} style={{ width: '40px' }} alt="" />
          <h5 class="offcanvas-title fw-bolder" style={{ fontSize: '30px', color: 'white' }} id="offcanvasScrollingLabel">VIBRANT</h5>
          {/* <button type="button" class="btn-close" style={{ color: 'white' }} data-bs-dismiss="offcanvas" aria-label="Close"></button> */}
          <svg xmlns="http://www.w3.org/2000/svg" data-bs-dismiss="offcanvas" aria-label="Close" width="46" height="46" fill="white" class="bi bi-x" viewBox="0 0 16 16">
            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
          </svg>
        </div>
        <div class="offcanvas-body">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0" style={{ textTransform: 'uppercase', fontWeight: 'bolder' }}>

            <li className="nav-item mx-4">
              <Link className="nav-link active" style={{ color: 'white', fontSize: '25px' }} aria-current="page" to="/">play</Link>
            </li>

            <li className="nav-item mx-4">
              <Link className="nav-link" style={{ color: 'white', fontSize: '25px' }} to="/shop">Shop</Link>
            </li>

            <li className="nav-item mx-4">
              <Link className="nav-link" style={{ color: 'white', fontSize: '25px' }} to="/explore">Explore</Link>
            </li>

            <li className="nav-item mx-4">
              <Link className="nav-link" style={{ color: 'white', fontSize: '25px' }} to="/help">Help</Link>
            </li>

            <li className="nav-item mx-4 my-4">
              <form class="input-group mb-3">
                <input type="text" class="form-control" data-bs-theme="dark" placeholder="Search" aria-label="Username" aria-describedby="basic-addon1" required />
                <button type="submit" class="btn btn-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                  </svg>
                </button>
              </form>
            </li>

          </ul>
        </div>
      </div>



      {/* <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#searchModal">
        Launch demo modal
      </button> */}

      <div class="modal fade" id="searchModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-body">
              <form class="input-group">
                <input type="text" class="form-control" placeholder="Search" aria-label="Username" aria-describedby="basic-addon1" required />
                <button type="submit" class="btn btn-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                  </svg>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

    </>
  );
};

export default Nav;
