import React, { useEffect, useRef, useState } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import AuthService from "../../api/authService";
import secureLs, {
  hasLowerCase,
  hasUpperCase,
  hasDigit,
  hasSymbol,
} from "../../common/helper";
import { passwordResetSuccess } from "../../redux/actions/authActions";
import "./SignIn.css";

function PasswordReset(props) {
  const [lengthError, setlengthError] = useState(false);
  const [upperError, setupperError] = useState(false);
  const [lowerError, setlowerError] = useState(false);
  const [digitError, setdigitError] = useState(false);
  const [symbolError, setsymbolError] = useState(false);
  const [passwordError, setpasswordError] = useState("");

  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordRepeatRef = useRef();
  const history = useHistory();

  useEffect(() => {}, [
    passwordError,
    lengthError,
    upperError,
    lowerError,
    digitError,
    symbolError,
  ]);

  const checkPasswordsEquality = () => {
    if (passwordRef.current.value !== passwordRepeatRef.current.value) {
      setpasswordError("Passwords must be equal!");
    } else {
      setpasswordError("");
    }
  };

  const submitHandler = (event) => {
    event.preventDefault();

    let authService = new AuthService();
    const email = emailRef.current.value;
    const newPassword = passwordRef.current.value;
    const phoneNumber = secureLs.get("phone");

    authService
      .passwordReset({ email, newPassword, phoneNumber })
      .then((response) => {
        secureLs.set("phone", "");
        props.onPasswordResetSuccess();
        history.replace("/sign-in");
      })
      .catch((error) => {
        setpasswordError(error.response.data.message);
      });
  };

  const checkPasswordValidity = () => {
    checkPasswordsEquality();
    const password = passwordRef.current.value;

    password.length >= 8 ? setlengthError(true) : setlengthError(false);

    hasUpperCase(password) ? setupperError(true) : setupperError(false);

    hasLowerCase(password) ? setlowerError(true) : setlowerError(false);

    hasDigit(password) ? setdigitError(true) : setdigitError(false);

    hasSymbol(password) ? setsymbolError(true) : setsymbolError(false);
  };

  return (
    <div className="container" id="loginForm">
      <h1>Reset Password</h1>
      <form className="px-5 py-3" onSubmit={submitHandler}>
        <div className="mb-3">
          <label htmlFor="signup-email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            ref={emailRef}
            className="form-control"
            id="signup-email"
            placeholder="email@example.com"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="signup-password" className="form-label">
            New Password
          </label>
          <input
            type="password"
            ref={passwordRef}
            className="form-control"
            id="signup-password"
            placeholder="Password"
            onChange={checkPasswordValidity}
          />
        </div>
        <div className="mb-3">
          <div className="mb-3">
            <label htmlFor="signup-rep-password" className="form-label">
              Repeat New Password
            </label>
            <input
              type="password"
              ref={passwordRepeatRef}
              className="form-control"
              id="signup-rep-password"
              placeholder="Password"
              onChange={checkPasswordValidity}
            />
            <h6 className="password-error">{passwordError}</h6>
            {lengthError ? (
              <h6 className="top signin-password-valid">
                At least 8 characters
                <i className="fas fa-check"></i>
              </h6>
            ) : (
              <h6 className="top signin-password-error">
                At least 8 characters
                <i className="fas fa-times"></i>
              </h6>
            )}
            {lowerError ? (
              <h6 className="signin-password-valid">
                At least 1 lower case
                <i className="fas fa-check"></i>
              </h6>
            ) : (
              <h6 className="signin-password-error">
                At least 1 lower case
                <i className="fas fa-times"></i>
              </h6>
            )}
            {upperError ? (
              <h6 className="signin-password-valid">
                At least 1 upper case
                <i className="fas fa-check"></i>
              </h6>
            ) : (
              <h6 className="signin-password-error">
                At least 1 upper case
                <i className="fas fa-times"></i>
              </h6>
            )}
            {symbolError ? (
              <h6 className="signin-password-valid">
                At least 1 symbol
                <i className="fas fa-check"></i>
              </h6>
            ) : (
              <h6 className="signin-password-error">
                At least 1 symbol
                <i className="fas fa-times"></i>
              </h6>
            )}
            {digitError ? (
              <h6 className="signin-password-valid">
                At least 1 digit
                <i className="fas fa-check"></i>
              </h6>
            ) : (
              <h6 className="signin-password-error">
                At least 1 digit
                <i className="fas fa-times"></i>
              </h6>
            )}
          </div>
          <div className="mb-3" />
        </div>
        <button type="submit" className="btn btn-primary">
          Update Password
        </button>
      </form>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    onPasswordResetSuccess: () => dispatch(passwordResetSuccess()),
  };
};

export default connect(null, mapDispatchToProps)(PasswordReset);
