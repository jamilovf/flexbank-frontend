import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link className="navbar-brand" to="authHome.html">
          <h1>
            <span>FlexBank</span>
          </h1>
        </Link>
        <Link className="navbar-info" to="authHome.html">
          Home
        </Link>
        <Link className="navbar-info" to="aboutUs.html">
          About Us
        </Link>
        <Link className="navbar-info" to="contactUs.html">
          Contact Us
        </Link>
        <div className="d-grid gap-2 d-md-block">
          <Link to="signIn.html">
            <button className="btn btn-outline-success" type="button">
              Sign in
            </button>
          </Link>
          <Link to="signUp.html">
            <button className="btn btn-outline-danger" type="button">
              Sign up
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
