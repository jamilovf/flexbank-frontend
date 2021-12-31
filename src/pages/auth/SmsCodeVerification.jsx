import React from 'react';
import "./SignIn.css";

export default function SmsCodeVerification() {
    return (
        <div className="container" id="loginForm">
        <h1>SMS Code Verification</h1>
        <form className="px-5 py-3">
          <div className="mb-3">
            <label htmlFor="smsCode" className="form-label">SMS Code</label>
            <input type="email" className="form-control" id="smsCode" placeholder="####"/>
          </div>
          <button type="submit" className="btn btn-primary">Verify</button>
        </form>
    </div>
    )
}
