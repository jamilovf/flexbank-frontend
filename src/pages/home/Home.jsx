import React from "react";
import "./Home.css";
import cardDb from "../../img/card-db.png";
import loanDb from "../../img/loan-db.png";
import userDb from "../../img/user-db.png";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home container" id="services">
      <div className="row">
        <div className="col-md-4">
          <div className="homeCard text-center">
            <img src={cardDb} className="home card-img-top" alt="..." />
            <div className="row justify-content-center">
              <Link to="order-card">
                <button className="btn btn-outline-primary">Order new card</button>
              </Link>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="homeCard text-center">
            <img src={loanDb} className="home card-img-top" alt="..." />
            <div className="row justify-content-center">
              <Link to="loan-services">
                <button className="btn btn-outline-primary">Loan services</button>
              </Link>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="homeCard text-center">
            <img src={userDb} className="home card-img-top" alt="..." />
            <div className="row justify-content-center">
              <Link to="#">
                <button className="btn btn-outline-primary account">
                  Manage account
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
