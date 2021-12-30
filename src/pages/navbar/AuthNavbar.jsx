import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function AuthNavbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <h1>
            <span>FlexBank</span>
          </h1>
        </Link>
        <Link className="navbar-info" to="/">
          Home
        </Link>
        <Link className="navbar-info" to="about-us">
          About Us
        </Link>
        <Link className="navbar-info" to="contact-us">
          Contact Us
        </Link>
        <div className="d-grid gap-2 d-md-block">
          <Link to="sign-in">
            <button className="navi btn btn-outline-success" type="button">
              Sign in
            </button>
          </Link>
          <Link to="sign-up">
            <button className="btn btn-outline-danger" type="button">
              Sign up
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
