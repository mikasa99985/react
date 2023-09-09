import React, { useEffect, useState } from 'react'
import { auth, db, database } from '../../firebase.config'
import Iframe from 'react-iframe';
import '../utility/css/contacts.css';
import { jsonConcat } from '../utility/js/util';
import Nav from '../components/Nav';

const Contact = () => {
  const [report, setReport] = useState({
    name: '',
    email: '',
    desc: ''
  });
  const [isLogin, setLogin] = useState(false);
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState(false);

  let name, value;
  const getData = (even) => {
    name = even.target.name
    value = even.target.value;

    setReport({ ...report, [name]: value });
  }

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
    setLoading(true);
    if (isLogin) {
      let report_json = jsonConcat({ userId: auth.currentUser.uid }, report);

      database.ref('contacts').push().set(report_json).then(() => {
        setTimeout(() => {
          setLoading(false);
          setReport({
            name: '',
            email: '',
            desc: ''
          });
          setAlert({ status: true, message: 'Successfully send this form' });
        }, 100);

      }).catch(() => {
        setLoading(false);
        setAlert({ status: true, message: 'This Form is not able to send' });
      });
    } else {
      setLoading(false);
      setAlert({ status: false, message: 'You are not login' })
    }
  }

  return (
    <>
      <Nav/>
      {
        alert ?
          <div className={`alert ${alert.status ? 'alert-success' : 'alert-danger'} alert-dismissible fade show`} role="alert">
            <strong>{alert.status ? 'Success !!!' : 'ERROR !!!'}</strong> {alert.message}
            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
          </div>
          :
          <></>

      }

      <h1 className='text-center my-5'>Contact us</h1>

      <div className=" container d-lg-flex mb-5">
        <div className="left-con">
          <div className="con-container p-3 rounded-4">
            <h5 className='mb-3'>Contact us</h5>
            <div className="">
              <div className="">
                <h6>+91 1234567890</h6>
                <h6>example@gmail.com</h6>
              </div>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore reiciendis enim quam commodi. Corrupti pariatur dicta at beatae est rerum, neque nisi, explicabo fugiat in odit commodi minima nesciunt aliquid.</p>
            </div>
          </div>
        <Iframe
              url="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d124410.3394253335!2d77.58495242202125!3d12.983163304641854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sisro!5e0!3m2!1sen!2sin!4v1692887290402!5m2!1sen!2sin"
              width="100%"
              height="65%"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="map-iframe absolute inset-0 rounded-4"
            />
        </div>

        <div className="right-con">
          <form className="report-form mt-5" onSubmit={submit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Your Name</label>
              <input type="text" className="form-control" id="name" name='name' value={report.name} onChange={getData} placeholder="name" required />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email address</label>
              <input type="email" className="form-control" id="email" name='email' value={report.email} onChange={getData} placeholder="name@example.com" required />
            </div>
            <div className="mb-3">
              <label htmlFor="desc" className="form-label">Description</label>
              <textarea className="form-control" id="desc" name='desc' value={report.desc} onChange={getData} rows="10" placeholder="Enter description" required></textarea>
            </div>
            <div className="d-flex align-items-center">
              <button type="submit" className="btn-cus btn-cus-con btn-blue-glow" style={{ fontSize: "14px", padding: "14px 40px", borderRadius: "7px" }}>Submit Report</button>
            </div>
            <div className="loading my-2 d-flex justify-content-center">
              {
                loading ?
                  <div className="spinner-border" style={{ width: "45px", height: "45px" }} role="status">
                    <span className="visually-hidden">Loading...</span>
                  </div>
                  :
                  <></>
              }
            </div>
          </form>
        </div>
      </div>



    </>
  )
}

export default Contact
