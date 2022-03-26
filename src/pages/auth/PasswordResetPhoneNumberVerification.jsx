import React, { useRef, useState } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import AuthService from "../../api/authService";
import secureLs from "../../common/helper";
import { passwordResetPhoneNumberVerificationSuccess } from "../../redux/actions/authActions";
import "./SignIn.css";

function PasswordResetPhoneNumberVerification(props) {
  const phoneNumberRef = useRef();
  const [verificationError, setverificationError] = useState("");
  const history = useHistory();

  const submitHandler = (event) => {
    event.preventDefault();

    let authService = new AuthService();
    const phoneNumber = phoneNumberRef.current.value;

    authService
      .verifyPasswordResetPhoneNumber({ phoneNumber })
      .then((response) => {
        secureLs.set("phone", response.data.phoneNumber);
        props.onPasswordResetPhoneNumberVerificationSuccess();
        history.replace("/password-reset-sms-code-verification");
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
          <h6 className="verification-error">{verificationError}</h6>
        </div>
        <button type="submit" className="btn btn-primary">
          Verify
        </button>
      </form>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    onPasswordResetPhoneNumberVerificationSuccess: () =>
      dispatch(passwordResetPhoneNumberVerificationSuccess()),
  };
};

export default connect(null, mapDispatchToProps)(PasswordResetPhoneNumberVerification);
