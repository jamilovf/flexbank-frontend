import React from "react";
import "./AuthHome.css";
import homeWp from "../../img/home-wp.jpg";

export default function AuthHome() {
  return (
      
    <div className="container">
      <div className="row">
        <div className="col-9">
        <img src={homeWp}className="card-img-top" alt="..."/>
        </div>
        <div className="col">
          <h1>FlexBank</h1>
          <h4>Your trusted, loyal digital bank</h4>
        </div>
      </div>
    </div>
  );
}
