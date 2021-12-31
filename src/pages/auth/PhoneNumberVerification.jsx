import React from 'react';
import "./SignIn.css";

export default function PhoneNumberVerification() {
    return (
        <div className="container" id="loginForm">
        <h1>Phone Number Verification</h1>
        <form className="px-5 py-3">
          <div className="mb-3">
            <label htmlFor="phoneNumber" className="form-label">Phone number</label>
            <input type="email" className="form-control" id="phoneNumber" placeholder="+123456789"/>
          </div>
          <button type="submit" className="btn btn-primary">Verify</button>
        </form>
    </div>
    )
}
