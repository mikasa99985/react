import React, { useState } from "react";
import '../utility/css/Sign.css';
import { Link, useHistory } from "react-router-dom";
import '../utility/css/btn_glow.css';
import { filter } from '../utility/js/util.js'
import { db, auth, provider } from '../../firebase.config';


const SignIn = () => {

  let history = useHistory();

  provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
  auth.languageCode = 'it';
  provider.setCustomParameters({
    'login_hint': 'user@example.com'
  });

  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState('');
  const [user, setUser] = useState({
    email: '',
    password: ''
  });

  let name, value;
  const getUserData = (even) => {
    name = even.target.name
    value = even.target.value

    setUser({ ...user, [name]: value })
  }

  function Signin(e) {
    e.preventDefault();
    setLoading(true);
    auth.signInWithEmailAndPassword(user.email, user.password)
      .then((userCredential) => {
        setLoading(false);
        history.push('/');
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        setLoading(false);
        setAlert(filter(errorMessage));
      });

  }

  function Google() {
    auth.signInWithPopup(provider).then((result) => {
    
      var credential = result.credential;
      var token = credential.accessToken;
      var user = result.user;

      db.collection("users").doc(user.uid).get().then((doc) => {
        if (doc.exists) {
          history.push('/');
        } else {
          history.push('/google_sign_in');
        }
      }).catch((error) => {
        console.log("Error!!!");
      });

    }).catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      var email = error.email;
      var credential = error.credential;
      console.log(errorMessage);
      setAlert(filter(errorMessage));
    });
  }

  return (
    <>
      <div className="container-sign">
        <h1 className="mb-4 text-uppercase fw-bolder text-light">Login</h1>
        <form onSubmit={(e) => { Signin(e) }} className="form-sign">

          <div className="form-floating mb-3">
            <input type="email" className="form-control" value={user.email} onChange={getUserData} id="email" name="email" placeholder="name@example.com" required />
            <label htmlFor="floatingInput">Email</label>
          </div>

          <div className="form-floating mb-3">
            <input type="password" className="form-control" value={user.password} onChange={getUserData} id="password" name="password" placeholder="Password" required />
            <label htmlFor="floatingPassword">Password</label>
          </div>

          {
            loading ?
              <div className="m-auto">
                <div className="spinner-border" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              </div>
              :
              <button type="submit" className="btn-cus btn-blue-glow">Login</button>
          }

          {
            alert != '' ?
              <div className="alert alert-danger d-flex align-items-center mt-3" role="alert">
                <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} className="bi bi-exclamation-triangle-fill flex-shrink-0 me-2" viewBox="0 0 16 16" role="img" aria-label="Warning:">
                  <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                </svg>
                <div>
                  <strong>ERROR!!!</strong> {alert}
                </div>
              </div>
              :
              <></>
          }

          <hr className="my-4" />

          <button type="button" onClick={Google} className="btn btn-primary d-flex align-items-center justify-content-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-google me-2" viewBox="0 0 16 16">
              <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" />
            </svg>
            Login with Google
          </button>

          <Link to="/sign_up" className="text-center mt-4">Not Registered? Sign up Now</Link>

        </form>
      </div>
    </>
  );
};

export default SignIn;
