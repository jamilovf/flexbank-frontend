import React, { useRef, useState } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import AuthService from "../../api/authService";
import secureLs from "../../common/helper";
import { passwordResetSmsCodeVerificationSuccess } from "../../redux/actions/authActions";
import "./SignIn.css";

 function PasswordResetSmsCodeVerification(props) {
  const smsCodeRef = useRef();
  const [verificationError, setverificationError] = useState("");
  const history = useHistory();

  const submitHandler = (event) => {
    event.preventDefault();

    let authService = new AuthService();
    const smsCode = smsCodeRef.current.value;
    const phoneNumber = secureLs.get("phone");

    authService
      .verifyPasswordResetSmsCode({ smsCode, phoneNumber })
      .then((response) => {
        secureLs.set("phone", response.data.phoneNumber);
        props.onPasswordResetSmsCodeVerificationSuccess();
        history.replace("/password-reset");
      })
      .catch((error) => {
        setverificationError(error.response.data.message);
      });
  };
  return (
    <div className="container" id="loginForm">
      <h1>SMS Code Verification</h1>
      <form className="px-5 py-3" onSubmit={submitHandler}>
        <div className="mb-3">
          <label htmlFor="smsCode" className="form-label">
            SMS Code
          </label>
          <input
            type="text"
            ref={smsCodeRef}
            className="form-control"
            id="smsCode"
            placeholder="####"
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
    onPasswordResetSmsCodeVerificationSuccess: () => dispatch(passwordResetSmsCodeVerificationSuccess())
  }
}

export default connect(null, mapDispatchToProps)(PasswordResetSmsCodeVerification)