import React from "react";
import "./AuthHome.css";
import homeWp from "../../img/home-wp.jpg";

export default function AuthHome(props) {
  return (
      
    <div className="container">
      <div className="row">
        <div className="col-9">
        <img src={homeWp} className="auth card-img-top" alt="..."/>
        </div>
        <div className="col">
          {props.children}
        </div>
      </div>
    </div>
  );
}
