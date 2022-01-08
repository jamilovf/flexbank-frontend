import React from "react";
import { Link } from "react-router-dom";
import "../navbar/Navbar.css";

export default function AdminAuthNavbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link className="navbar-brand" to="/admin">
          <h1>
            <span>FlexBank</span>
          </h1>
        </Link>
        <div className="d-grid gap-2 d-md-block">
          <Link to="sign-in">
            <button className="navi btn btn-outline-success" type="button">
              Sign in
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
