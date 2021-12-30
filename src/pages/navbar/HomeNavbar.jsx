import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

export default function HomeNavbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link className="navbar-brand" to="home">
          <h1>
            <span>FlexBank</span>
          </h1>
        </Link>
        <Link className="navbar-info" to="home">
          Home
        </Link>
        <Link className="navbar-info" to="cards">
          Cards
        </Link>
        <Link className="navbar-info" to="#">
          Transfer
        </Link>
        <Link
          className="navbar-info"
          to="#"
        >
          Transaction History
        </Link>
        <Link className="navbar-info" to="loan-notifications">
          Loan notifications
        </Link>
        <Link className="navbar-info" to="#">
          Contact Us
        </Link>
        <button className="btn btn-outline-danger" type="button">
          Log out
        </button>
      </div>
    </nav>
  );
}
