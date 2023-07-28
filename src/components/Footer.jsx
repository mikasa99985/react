import React from 'react'
import { Link } from "react-router-dom";
import icon from '../assets/favicon.png'

export default function Footer() {
  return (
    <>
      <div className="container">
        <footer className="pt-5">
          <div className="row">
            <div className="col-6 col-md-2 mb-3">
              <h5>PLAY</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2"><Link to="#" className="nav-link p-0 text-body-secondary">Home</Link></li>
                <li className="nav-item mb-2"><Link to="#" className="nav-link p-0 text-body-secondary">About</Link></li>
                <li className="nav-item mb-2"><Link to="#" className="nav-link p-0 text-body-secondary">Contact us</Link></li>
                <li className="nav-item mb-2"><Link to="#" className="nav-link p-0 text-body-secondary">Help</Link></li>
              </ul>
            </div>

            <div className="col-6 col-md-2 mb-3">
              <h5>LOGIN</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2"><Link to="#" className="nav-link p-0 text-body-secondary">Sign up</Link></li>
                <li className="nav-item mb-2"><Link to="#" className="nav-link p-0 text-body-secondary">Sign in</Link></li>
                <li className="nav-item mb-2"><Link to="#" className="nav-link p-0 text-body-secondary">Favorites list</Link></li>
                <li className="nav-item mb-2"><Link to="#" className="nav-link p-0 text-body-secondary">My cards</Link></li>
              </ul>
            </div>

            <div className="col-6 col-md-2 mb-3">
              <h5>HELP</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2"><Link to="#" className="nav-link p-0 text-body-secondary">Live chat report</Link></li>
                <li className="nav-item mb-2"><Link to="#" className="nav-link p-0 text-body-secondary">Email report</Link></li>
              </ul>
            </div>

            <div className="col-md-5 offset-md-1 mb-3">
              <form>
                <h5>Feedback</h5>
                <p>Give feedback to our webside</p>
                <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                  <label for="feedback" className="visually-hidden">Feedback</label>
                  <input id="feedback" type="text" className="form-control" placeholder="Feedback" />
                  <button className="btn btn-dark" type="button">Send</button>
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
              <li className="ms-3"><a className="link-body-emphasis" href="#"><svg className="bi" width="24" height="24"><use xlink: href="#twitter"></use></svg></a></li>
              <li className="ms-3"><a className="link-body-emphasis" href="#"><svg className="bi" width="24" height="24"><use xlink: href="#instagram"></use></svg></a></li>
              <li className="ms-3"><a className="link-body-emphasis" href="#"><svg className="bi" width="24" height="24"><use xlink: href="#facebook"></use></svg></a></li>
            </ul>
          </div>
        </footer>
      </div>
    </>
  )
}

