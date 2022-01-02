import React, { useRef, useState } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import AuthService from "../../api/authService";
import secureLs from "../../common/helper";
import { phoneNumberVerificationSuccess } from "../../redux/actions/authActions";
import "./SignIn.css";

 function PhoneNumberVerification(props) {
  const phoneNumberRef = useRef();
  const [verificationError, setverificationError] = useState("");
  const history = useHistory();

  const submitHandler = (event) => {
    event.preventDefault();

    let authService = new AuthService();
    const phoneNumber = phoneNumberRef.current.value;

    authService
      .verifyPhoneNumber({ phoneNumber })
      .then((response) => {
        secureLs.set("phone", response.data.phoneNumber);
        props.onPhoneNumberVerificationSuccess();
        history.replace("/sms-code-verification");
      })
      .catch((error) => {
        setverificationError(error.response.data.message);
      });
  };
  return (
    <div className="container" id="loginForm">
      <h1>Phone Number Verification</h1>
      <form className="px-5 py-3" onSubmit={submitHandler}>
        <div className="mb-3">
          <label htmlFor="phoneNumber" className="form-label">
            Phone number  
          </label>
          <input
            type="text"
            ref={phoneNumberRef}
            className="form-control"
            id="phoneNumber"
            placeholder="+123456789"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Verify
        </button>
      </form>
      <div className="verification-error">
      <h6>{verificationError}</h6>
      </div>
    </div>
  );
}

const mapDispatchToProps = dispatch => {
  return{
    onPhoneNumberVerificationSuccess: () => dispatch(phoneNumberVerificationSuccess())
  }
}

export default connect(null, mapDispatchToProps)(PhoneNumberVerification)