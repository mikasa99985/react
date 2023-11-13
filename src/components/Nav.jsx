import React, { useEffect, useState } from "react";
import { Link, useHistory } from 'react-router-dom'
import '../utility/css/Navbar.css';
import icon from '../assets/game_favicon.png'
// import iconGame from '../assets/favicon.png'
import { database, db, auth } from "../../firebase.config";
import { urlEncode, getCookie } from '../utility/js/util'
import { cookie } from '../utility/js/cookie';

const Nav = (props) => {

  let history = useHistory();

  const [login, setLogin] = useState(false);
  const [query, setQuery] = useState('');
  const [searchHistory, setSearchHistory] = useState([]);
  const [user, setUser] = useState({});
  const [imageUrl, setImageUrl] = useState('https://firebasestorage.googleapis.com/v0/b/online-app-a440d.appspot.com/o/empty-profile.png?alt=media&token=9d884c2e-e9ab-4ac0-9d28-cd7ec5ba917f');

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      console.log(user);
      if (user) {
        db.collection("users").doc(user.uid).get().then((doc) => {
          if (doc.exists) {
            setUser(doc);
            setLogin(true);
            db.collection("users").doc(auth.currentUser.uid).onSnapshot((doc) => {
              if (doc.data().type == 'email-password') {
                if (user.emailVerified) {
                  setImageUrl(doc.data().img);
                }else{
                  history.push('/verify');
                }
              } else {
                setImageUrl(user.photoURL)
              }
            });
          } else {
            history.push('/google_sign_in');
          }
        }).catch((error) => {
          console.log("Error!!!");
        });
      } else {
        console.log("NO acc");
        setLogin(false);
      }
    });
  }, []);

  function SignOut() {
    auth.signOut().then(() => {
      console.log('Sign-out successful.');
    }).catch((error) => {
      console.log(error.message);
    });
  }

  useEffect(() => {
    if (getCookie('search_history') != null) {
      setSearchHistory(cookie.get('search_history'));
    }
  }, []);

  function Search(e) {
    e.preventDefault();
    let arr = [];
    if (getCookie('search_history') != null) {
      arr = cookie.get('search_history');
    }

    arr.push(query);
    cookie.set('search_history', arr, 1);
    history.push(`/collection?search=${query}`);
  }

  function clear_history(){
    cookie.eraseCookie('search_history');
    location.reload();
  }

  return (
    <>
      <nav className="navbar navbar-expand-lg floating-shadow" style={{}}>
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

              <li className={!props.home ? `nav-item mx-4 nav-item-pop` : 'nav-item mx-4'}>
                <Link className={props.home ? 'nav-link active-nav' : 'nav-link'} style={{ color: 'white' }} aria-current="page" to="/">play</Link>
              </li>

              <li className={!props.shop ? `nav-item mx-4 nav-item-pop` : 'nav-item mx-4'}>
                <Link className={props.shop ? 'nav-link active-nav' : 'nav-link'} style={{ color: 'white' }} to="/shop">Shop</Link>
              </li>

              <li className={!props.library ? `nav-item mx-4 nav-item-pop` : 'nav-item mx-4'}>
                <Link className={props.library ? 'nav-link active-nav' : 'nav-link'} style={{ color: 'white' }} to="/library">Library</Link>
              </li>


              <li className={!props.help ? `nav-item mx-4 nav-item-pop` : 'nav-item mx-4'}>
                <Link className={props.help ? 'nav-link active-nav' : 'nav-link'} style={{ color: 'white' }} to="/help">Help</Link>
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
              {/* <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="white" className="bi bi-person-circle" viewBox="0 0 16 16">
                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                <path
                  fillRule="evenodd"
                  d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
                />
              </svg> */}
              <img style={{ borderRadius: '999px' }} src={imageUrl} width="32" height="32" alt="" />
            </div>

            <ul className="dropdown-menu" data-bs-theme='dark'>
              {
                !login ?
                  <>
                    <li><Link className="dropdown-item" to="/sign_up">Sign up</Link></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><Link className="dropdown-item" to="/sign_in">Sign in</Link></li>
                  </>
                  :
                  <>
                    <li>
                      <Link className="dropdown-item" to={`/profile/${user.id}/${urlEncode(user.data().name)}`}>
                        <div className="">
                          <p className="m-0">{user.data().name}</p>
                          <p className="m-0">{user.data().email}</p>
                        </div>
                      </Link>
                    </li>
                    <li><hr className="dropdown-divider" /></li>
                    <li>
                      <Link className="dropdown-item d-flex align-items-center" to="/library">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-collection me-2" viewBox="0 0 16 16">
                          <path d="M2.5 3.5a.5.5 0 0 1 0-1h11a.5.5 0 0 1 0 1h-11zm2-2a.5.5 0 0 1 0-1h7a.5.5 0 0 1 0 1h-7zM0 13a1.5 1.5 0 0 0 1.5 1.5h13A1.5 1.5 0 0 0 16 13V6a1.5 1.5 0 0 0-1.5-1.5h-13A1.5 1.5 0 0 0 0 6v7zm1.5.5A.5.5 0 0 1 1 13V6a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5h-13z" />
                        </svg>
                        Library
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item d-flex align-items-center" to="/my_cards">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-cart-check me-2" viewBox="0 0 16 16">
                          <path d="M11.354 6.354a.5.5 0 0 0-.708-.708L8 8.293 6.854 7.146a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3z" />
                          <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                        </svg>
                        My cards
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item d-flex align-items-center" to="/favorites">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-card-checklist me-2" viewBox="0 0 16 16">
                          <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z" />
                          <path d="M7 5.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 1 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0zM7 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 0 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0z" />
                        </svg>
                        Favorites list
                      </Link>
                    </li>
                    <li><hr className="dropdown-divider" /></li>
                    <li>
                      <button className="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#logoutModel">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-box-arrow-right me-2" viewBox="0 0 16 16">
                          <path fillRule="evenodd" d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z" />
                          <path fillRule="evenodd" d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z" />
                        </svg>
                        Logout
                      </button>
                    </li>
                  </>
              }

            </ul>
          </div>
        </div>
      </nav>

      {/* Mobile Navbar */}
      <div className="offcanvas offcanvas-start" style={{ backgroundColor: 'black' }} data-bs-scroll="true" data-bs-backdrop="false" tabIndex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
        <div className="offcanvas-header">
          <img className="anima-icon" src={icon} style={{ width: '40px' }} alt="" />
          <h5 className="offcanvas-title fw-bolder" style={{ fontSize: '30px', color: 'white' }} id="offcanvasScrollingLabel">VIBRANT</h5>
          {/* <button type="button" className="btn-close" style={{ color: 'white' }} data-bs-dismiss="offcanvas" aria-label="Close"></button> */}
          <svg xmlns="http://www.w3.org/2000/svg" data-bs-dismiss="offcanvas" aria-label="Close" width="46" height="46" fill="white" className="bi bi-x" viewBox="0 0 16 16">
            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
          </svg>
        </div>
        <div className="offcanvas-body">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0" style={{ textTransform: 'uppercase', fontWeight: 'bolder' }}>

            <li className="nav-item mx-4">
              <Link className={props.home ? 'nav-link active-offc' : 'nav-link'} style={{ color: 'white', fontSize: '25px' }} aria-current="page" to="/">play</Link>
            </li>

            <li className="nav-item mx-4">
              <Link className={props.shop ? 'nav-link active-offc' : 'nav-link'} style={{ color: 'white', fontSize: '25px' }} to="/shop">Shop</Link>
            </li>

            <li className="nav-item mx-4">
              <Link className={props.library ? 'nav-link active-offc' : 'nav-link'} style={{ color: 'white', fontSize: '25px' }} to="/library">Library</Link>
            </li>

            <li className="nav-item mx-4">
              <Link className={props.help ? 'nav-link active-offc' : 'nav-link'} style={{ color: 'white', fontSize: '25px' }} to="/help">Help</Link>
            </li>

            <li className="nav-item mx-4 my-4">
              <form className="input-group mb-3">
                <input type="text" className="form-control" data-bs-theme="dark" placeholder="Search" aria-label="Username" aria-describedby="basic-addon1" required />
                <button type="submit" className="btn btn-dark">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                  </svg>
                </button>
              </form>
            </li>

          </ul>
        </div>
      </div>

      {/* Search */}
      <div className="modal fade" id="searchModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-cox">
          <div className="modal-content" style={{ borderRadius: '22px' }}>
            <div className="modal-body p-0">
              <form className="input-group" onSubmit={Search}>
                <button type="submit" data-bs-dismiss="modal" className="btn btn-light" style={{ borderTopRightRadius: '0px', borderTopLeftRadius: '22px', borderBottomRightRadius: '0px', borderBottomLeftRadius: '0px' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                  </svg>
                </button>
                <input type="text" className="form-control bg-light" style={{ borderTopRightRadius: '22px', border: 'none', fontSize: '19px', boxShadow: 'none' }} value={query} onChange={(e) => { setQuery(e.target.value) }} placeholder="Type your search" aria-label="Username" aria-describedby="basic-addon1" required />
              </form>
              <div className="mx-5 my-3" style={{ fontSize: '14px' }}>

                {/* Example */}
                <div className="">
                  <span className="fw-bold">GAMES (recommended)</span>
                  <div className=" d-flex flex-column mx-3">
                    <a href="/shop/Red_Dead_Redemption_2" className="search-rec-link">Red Dead Redemption 2</a>
                    <a href="/shop/The_Last_of_Us_Part_1" className="search-rec-link">The Last of Us Part 1</a>
                    <a href="/shop/Call_of_Duty:_Modern_Warfare_II_(2022)" className="search-rec-link">Call of Duty: Modern Warfare II (2022)</a>
                  </div>
                </div>

                <div className="mt-3">
                  <div className=" d-flex justify-content-between">
                    <span className="fw-bold">Search history</span>
                    <button onClick={clear_history} className="btn p-0" style={{ fontSize: '14px' }}>Clear history</button>
                  </div>
                  <div className=" d-flex flex-column mx-3">
                    {
                      searchHistory.map((element, index) => {
                        return (
                          <a href={`/shop?search=${element}`} key={index} className="search-rec-link">{element}</a>
                        );
                      })
                    }
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="modal fade" id="logoutModel" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered logout-modal" role="document">
          <div className="modal-content rounded-3 shadow">
            <div className="modal-body p-4 text-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" fill="#ff6a6a" className="mb-3 bi bi-exclamation-circle-fill" viewBox="0 0 16 16">
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
              </svg>
              <h5 className="mb-0">Are you want to logout</h5>
            </div>
            <div className="modal-footer flex-nowrap p-0">
              <button type="button" onClick={SignOut} className="btn btn-lg btn-link fs-6 text-decoration-none col-6 py-3 m-0 rounded-0 border-end" data-bs-dismiss="modal"><strong>Yes</strong></button>
              <button type="button" className="btn btn-lg btn-link fs-6 text-decoration-none col-6 py-3 m-0 rounded-0" data-bs-dismiss="modal">No</button>
            </div>
          </div>
        </div>
      </div>

    </>
  );
};

export default Nav;
