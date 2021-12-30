import React from "react";
import "./SignIn.css";

export default function SignUp() {
  return (
    <div className="container" id="loginForm">
      <h1>Sign up</h1>
      <form className="px-5 py-3">
        <div className="mb-3">
          <label for="exampleDropdownFormEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleDropdownFormEmail1"
            placeholder="email@example.com"
          />
        </div>
        <div className="mb-3">
          <label for="exampleDropdownFormPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleDropdownFormPassword1"
            placeholder="Password"
          />
        </div>
        <div className="mb-3">
          <div className="mb-3">
            <label for="exampleDropdownFormPassword1" className="form-label">
              Repeat Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleDropdownFormPassword1"
              placeholder="Password"
            />
          </div>
          <div className="mb-3" />
        </div>
        <button type="submit" className="btn btn-primary">
          Sign up
        </button>
      </form>
    </div>
  );
}
