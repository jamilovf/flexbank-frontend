import React from "react";
import "./AccountDetails.css";

export default function AccountDetails() {
  return (
    <div className="acc container">
      <div className="row">
        <div className="col-md-3">
          <i className="far fa-user"></i>
        </div>
        <div className="col-md-9">
          <h2>My Account</h2>
        </div>
        <div className="acc col-md-6">
          <label for="firstName" className="form-label">
            First name:
          </label>
          <p>John</p>
        </div>
        <div className="acc col-md-6">
          <label for="lastName" className="form-label">
            Last name:
          </label>
          <p>Williams</p>{" "}
        </div>
        <div className="acc col-md-6">
          <label for="birthDate" className="form-label">
            Birth date:
          </label>
          <p>20-05-1990</p>
        </div>
        <div className="acc col-md-6">
          <label for="email" className="form-label">
            Email:
          </label>
          <p>johnwill@gmail.com</p>
        </div>
        <div className="acc col-md-6">
          <label for="phoneNumber" className="form-label">
            Phone number:
          </label>
          <p>+987654321</p>
        </div>
        <div className="acc col-md-6">
          <label for="city" className="form-label">
            City:
          </label>
          <p>Debrecen</p>
        </div>
        <div className="acc col-md-6">
          <label for="address" className="form-label">
            Address:
          </label>
          <p>Kassai st. 26</p>
        </div>
        <div className="acc col-md-6">
          <label for="zip" className="form-label">
            Zip:
          </label>
          <p>9999</p>
        </div>
        <div className="col-12">
          <button type="submit" className="acc btn btn-primary">
            Update
          </button>
        </div>
      </div>
    </div>
  );
}
