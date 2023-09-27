import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import icon from '../assets/fav_icon.png';
import { auth, database } from '../../firebase.config';
import '../utility/css/footer.css';
import bot_img from '../assets/Botlogo.svg';
import Slack from '../assets/Slack.png'
import Chatbanner from "../assets/Chatbanner.png"
import Chatbody from "../assets/Chatbody.png"


export default function Footer() {
  const [isZoomed, setIsZoomed] = useState(false);
  const zoomClass = isZoomed ? 'zoomed' : '';

  const [feedback, setFeedback] = useState('');
  const [isLogin, setLogin] = useState(false);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setLogin(true);
      } else {
        setLogin(false);
      }
    });
  }, []);

  function submit(e) {
    e.preventDefault();
    if (isLogin) {
      database.ref('feedback').push().set({
        uid: auth.currentUser.uid,
        feedback: feedback
      }).then(() => {
        console.log('done');
      }).catch(() => {
        console.log('error');
      });
      setFeedback('');
    } else {
      console.log('You are not login');
    }
  }

  return (
    <>
      <div className="container">
        <footer className="pt-5">
          <div className="row">
            <div className="col-6 col-md-2 mb-3">
              <h5>PLAY</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text-body-secondary">Home</Link></li>
                <li className="nav-item mb-2"><Link to="/about" className="nav-link p-0 text-body-secondary">About</Link></li>
                <li className="nav-item mb-2"><Link to="/contact" className="nav-link p-0 text-body-secondary">Contact us</Link></li>
                <li className="nav-item mb-2"><Link to="/help" className="nav-link p-0 text-body-secondary">Help</Link></li>
              </ul>
            </div>

            <div className="col-6 col-md-2 mb-3">
              <h5>LOGIN</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2"><Link to="/sign_up" className="nav-link p-0 text-body-secondary">Sign up</Link></li>
                <li className="nav-item mb-2"><Link to="/sign_in" className="nav-link p-0 text-body-secondary">Sign in</Link></li>
                <li className="nav-item mb-2"><Link to="/favorites" className="nav-link p-0 text-body-secondary">Favorites list</Link></li>
                <li className="nav-item mb-2"><Link to="/my_cards" className="nav-link p-0 text-body-secondary">My cards</Link></li>
              </ul>
            </div>

            <div className="col-6 col-md-2 mb-3">
              <h5>HELP</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2"><button data-bs-toggle="modal" data-bs-target="#exampleModal" className="nav-link p-0 text-body-secondary">Live chat report</button></li>
                <li className="nav-item mb-2"><Link to="/report" className="nav-link p-0 text-body-secondary">Email report</Link></li>
              </ul>
            </div>

            <div className="col-md-5 offset-md-1 mb-3">
              <form onSubmit={submit}>
                <h5>Feedback</h5>
                <p>Give feedback to our webside</p>
                <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                  <label htmlFor="feedback" className="visually-hidden">Feedback</label>
                  <input id="feedback" value={feedback} onChange={event => setFeedback(event.target.value)} type="text" className="form-control" placeholder="Feedback" required />
                  <button className="btn btn-dark" type="submit">Send</button>
                </div>
              </form>
            </div>
          </div>

          <div className="d-flex flex-column flex-sm-row justify-content-between pt-4 mt-4 mb-2 border-top">
            <p className='d-flex align-items-md-center align-items-start flex-md-row flex-column'>
              <img src={icon} className='me-md-4 mb-2 mb-md-0' width={30} alt="" />
              <strong className='me-md-3 mb-2 mb-md-0'>VIBRANT</strong>
              <span>© 2023 Company, Inc. All rights reserved.</span>
            </p>
            <ul className="list-unstyled d-flex">
              <li className="ms-3">
                <a className="link-body-emphasis" href="https://twitter.com/" target="_blank">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#00acee" className="bi bi-twitter" viewBox="0 0 16 16">
                    <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                  </svg>
                </a>
              </li>
              <li className="ms-3">
                <a className="link-body-emphasis" href="https://www.instagram.com/" target="_blank">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#d62976" className="bi bi-instagram" viewBox="0 0 16 16">
                    <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                  </svg>
                </a>
              </li>
              <li className="ms-3">
                <a className="link-body-emphasis" href="https://www.facebook.com/" target="_blank">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#1877F2" className="bi bi-facebook" viewBox="0 0 16 16">
                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </footer>
      </div>

      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-cos">
          <div className="modal-content mb-4 chatbot-modal">

            <div className="modal-header chatbot-modal-header" >
              <img src={Slack} style={{ padding: "3px" }} width={28} alt="" />

              <div className="modal-title fs-5 modaltitlebot" id="exampleModalLabel" > BT 2.0 </div>

              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body botmodalbody" >



            </div>
            <div className="chatfooter botfooter">

              <input className='botbox' placeholder='Type your message...' >  
              </input>

              {/* <button type="button" className={`btn btn-primary rgbbutton1 ${zoomClass}`} onMouseEnter={() => setIsZoomed(true)} onMouseLeave={() => setIsZoomed(false)}> */}

              {/* <div className='test' >
                
              </div> */}

              <svg xmlns="http://www.w3.org/2000/svg" className='svgbutton' width="30" height="30" style={{}} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-send"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>


              {/* </button> */}

            </div>
          </div>
        </div>
      </div>
    </>
  )
}