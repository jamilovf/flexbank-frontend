import React, { useRef } from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import AuthService from "../../api/authService";
import "./SignIn.css"

export default function SignIn() {

  const history = useHistory();

  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    let authService = new AuthService();
    const email = emailInputRef.current.value;
    const password = passwordInputRef.current.value; 

    authService.signin({email, password})
    .then((response) => {
      localStorage.setItem("Authorization", response.headers.authorization);
      history.replace("/home")
  });
  
  }

  return (
    <div className="container" id="loginForm">
      <h1>Sign in</h1>
      <form className="px-5 py-3" onSubmit={submitHandler}>
        <div className="mb-3">
          <label htmlFor="signin-email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            ref={emailInputRef}
            className="form-control"
            id="signin-email"
            placeholder="email@example.com"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="signin-password" className="form-label">
            Password
          </label>
          <input
            type="password"
            ref={passwordInputRef}
            className="form-control"
            id="signin-password"
            placeholder="Password"
          />
        </div>
        <div className="mb-3">
          <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="signin-check"
            />
            <label className="form-check-label" htmlFor="signin-check">
              Remember me
            </label>
          </div>
        </div>
        <button type="submit" className="btn btn-primary">
          Sign in
        </button>
      </form>
      <div className="dropdown-divider"></div>
      <Link to="#">New around here? Sign up</Link>
      <Link id="forgotPassword" to="#">
        Forgot password?
      </Link>
    </div>
  );
}
