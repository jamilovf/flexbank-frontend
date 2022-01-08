import React from "react";
import { Link } from "react-router-dom";
import "../navbar/Navbar.css";

export default function AdminNavbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link className="navbar-brand" to="/admin">
          <h1>
            <span>FlexBank</span>
          </h1>
        </Link>
      </div>
    </nav>
  );
}
