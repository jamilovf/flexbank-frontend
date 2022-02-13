import React from "react";
import "../home/Home.css";
import loanDb from "../../img/loan-db.png";
import userDb from "../../img/user-db.png";
import { Link } from "react-router-dom";

export default function AdminHome() {
  return (
    <div className="home container" id="services">
      <div className="row">
        <div className="col-md-6">
          <div className="homeCard text-center">
            <img src={userDb} className="home card-img-top" alt="..." />
            <div className="row justify-content-center">
              <Link to="customer-register">
                <button className="admin btn btn-outline-primary">
                  Customer Registration
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="homeCard text-center">
            <img src={loanDb} className="home card-img-top" alt="..." />
            <div className="row justify-content-center">
              <Link to="loan-requests">
                <button className="admin btn btn-outline-primary">
                  Loan requests
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
