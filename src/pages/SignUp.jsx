import React, { useState } from "react";
import '../utility/css/Sign.css';
import { Link } from "react-router-dom";
import '../utility/css/btn_glow.css';


const SignUp = () => {

  let ImageUrl = "https://firebasestorage.googleapis.com/v0/b/online-app-a440d.appspot.com/o/empty-profile.png?alt=media&token=9d884c2e-e9ab-4ac0-9d28-cd7ec5ba917f";

  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState('');
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    img: ImageUrl,
    age: 0,
    gender: 'male',
    phone: '',
    type: 'email-password',

  });

  let name, value;
  const getUserData = (even) => {
    name = even.target.name
    value = even.target.value

    setUser({ ...user, [name]: value })
  }

  function Signup(e) {
    e.preventDefault();

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      console.log(user);
      setAlert('Sign up is not set');
    }, 3000);
  }

  return (
    <>
      <div className="container-sign">
        <h1 className="mb-4 text-uppercase fw-bolder">Sign Up</h1>
        <form onSubmit={(e) => { Signup(e) }} className="form-sign">

          <div className="form-floating mb-3">
            <input type="text" className="form-control" value={user.name} onChange={getUserData} id="name" name="name" placeholder="name" required />
            <label htmlFor="floatingInput">Name</label>
          </div>

          <div className="form-floating mb-3">
            <input type="email" className="form-control" value={user.email} onChange={getUserData} id="email" name="email" placeholder="name@example.com" required />
            <label htmlFor="floatingInput">Email</label>
          </div>

          <div className="form-floating mb-3">
            <input type="password" className="form-control" value={user.password} onChange={getUserData} id="password" name="password" placeholder="Password" required />
            <label htmlFor="floatingPassword">Password</label>
          </div>

          <div className="form-floating mb-3">
            <input type="number" className="form-control" value={user.age} onChange={getUserData} id="age" name="age" placeholder="0" required />
            <label htmlFor="floatingInput">Age</label>
          </div>

          <div className="form-floating mb-3">
            <select className="form-select" aria-label="Default select example" value={user.gender} onChange={getUserData} id="gender" name="gender">
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
            <label htmlFor="floatingInput">Gender</label>
          </div>

          <div className="form-floating mb-3">
            <input type="text" className="form-control" value={user.phone} onChange={getUserData} id="phone" name="phone" placeholder="name@example.com" />
            <label htmlFor="floatingInput">Phone</label>
          </div>

          {
            loading ?
              <div className="m-auto">
                <div className="spinner-border" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              </div>
              :
              <button type="submit" className="btn-cus btn-pink-glow">Sign up</button>
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

          <Link to="/sign_in" className="text-center">Already Registered? Login Now</Link>
        </form>
      </div>
    </>
  );
};

export default SignUp;
