import React from "react";
import Nav from "../components/Nav";
import '../utility/css/Sign.css';
import { Link } from "react-router-dom";


const SignUp = () => {
  return (
    <>
      <div className="container-sign">
        <h1 className="mb-4 text-uppercase">Sign Up</h1>
        <form className="form-sign">

          <div class="form-floating mb-3">
            <input type="text" class="form-control" id="floatingInput" placeholder="name" />
            <label for="floatingInput">Name</label>
          </div>

          <div class="form-floating mb-3">
            <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" />
            <label for="floatingInput">Email</label>
          </div>

          <div class="form-floating mb-3">
            <input type="password" class="form-control" id="floatingPassword" placeholder="Password" />
            <label for="floatingPassword">Password</label>
          </div>

          <div class="form-floating mb-3">
            <input type="number" class="form-control" id="floatingInput" placeholder="0" />
            <label for="floatingInput">Age</label>
          </div>

          <div class="form-floating mb-3">
            <select class="form-select" aria-label="Default select example">
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
            <label for="floatingInput">Gender</label>
          </div>

          <div class="form-floating mb-3">
            <input type="text" class="form-control" id="floatingInput" placeholder="name@example.com" />
            <label for="floatingInput">Phone</label>
          </div>

          <button type="submit" class="btn btn-dark">Sign up</button>

          <hr className="my-4" />

          <Link to="/sign_in" className="text-center">Already Registered? Login Now</Link>
        </form>
      </div>
    </>
  );
};

export default SignUp;
