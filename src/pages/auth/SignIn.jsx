import React from "react";
import { Link } from "react-router-dom";
import "./SignIn.css"

export default function SignIn() {
  return (
    <div className="container" id="loginForm">
      <h1>Sign in</h1>
      <form className="px-5 py-3">
        <div className="mb-3">
          <label htmlFor="signin-email" className="form-label">
            Email address
          </label>
          <input
            type="email"
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
