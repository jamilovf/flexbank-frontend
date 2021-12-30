import React from "react";
import { Link } from "react-router-dom";
import "./LoanServices.css";

export default function LoanServices() {
  return (
    <div className="container" id="services">
      <div className="row">
        <div className="loan col-md-6">
          <div className="loan card text-center">
            <i className="fas fa-user-check"></i>
            <div className="row justify-content-center">
              <Link to="personal-loan">
                <button className="btn btn-outline-primary">
                  Personal loan
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="loan col-md-6">
          <div className="loan card text-center">
            <i className="fas fa-car"></i>
            <div className="row justify-content-center">
              <Link to="car-loan">
                <button className="btn btn-outline-primary">
                  Car loan
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
