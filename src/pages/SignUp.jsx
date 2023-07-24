import React from 'react'
import Nav from '../components/Nav';

const SignUp = () => {
    return (
        <>
            <Nav />
            <form
        style={{
          backgroundColor: "black",
          display: "flex",
          fontFamily: "sans-serif",
          flexDirection: "column",
          justifyContent: "center",
          height: "100vh",
          alignItems: "center",
        }}
      >
        <div class="mb-3" style={{ color: "white" }}>
          <label for="exampleInputEmail1" class="form-label">
            Email address
          </label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          ></input>
          <div id="emailHelp" style={{ color: "white" }} class="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>


        

        <div class="mb-3" style={{ width: "16%", color: "white" }}>
          <label for="exampleInputPassword1" class="form-label">
           Username
          </label>
          <input
            type="text"
            class="form-control"
            id="exampleInputPassword1"
          ></input>
          <div id="emailHelp" style={{ color: "white" }} class="form-text">
            i.e.: #,@,$ simbols recommended for strong password.
          </div>
        </div>















        <div class="mb-3" style={{ width: "16%", color: "white" }}>
          <label for="exampleInputPassword1" class="form-label">
            Password
          </label>
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
          ></input>
        </div>


        <div class="mb-3" style={{ width: "16%", color: "white" }}>
          <label for="exampleInputPassword1" class="form-label">
           Re-enter Password
          </label>
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
          ></input>
        </div>




        





        <div class="mb-3 form-check" style={{ color: "white" }}>
          <input
            type="checkbox"
            class="form-check-input"
            id="exampleCheck1"
          ></input>
          <label class="form-check-label" for="exampleCheck1">
            Confirm
          </label>
        </div>






        <button
          type="submit"
          class="btn btn-primary"
          style={{ color: "white" }}
        >
          Sign In
        </button>
      </form>
        </>
    )
}

export default SignUp
