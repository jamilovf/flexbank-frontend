import React from "react";
import { Link } from "react-router-dom";
import "./Transfer.css";

export default function Transfer() {
  return (
    <div className="container" id="services">
      <div className="row">
        <div className="col-md-6">
          <div className="transfer card text-center">
            <i className="far fa-arrow-alt-circle-down"></i>
            <div className="row justify-content-center">
              <Link to="internal-transfer">
                <button className="transfer btn btn-outline-primary">
                  Internal transfer
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="transfer card text-center">
            <i className="far fa-arrow-alt-circle-up"></i>
            <div className="row justify-content-center">
              <Link to="external-transfer">
                <button className="transfer btn btn-outline-primary">
                  External transfer
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
