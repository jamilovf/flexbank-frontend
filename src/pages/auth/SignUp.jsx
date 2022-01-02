import React, { useEffect, useRef, useState } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import AuthService from "../../api/authService";
import secureLs from "../../common/helper";
import { signupVerificationSuccess } from "../../redux/actions/authActions";
import "./SignIn.css";

function SignUp(props) {

  const [passwordError, setpasswordError] = useState("");
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordRepeatRef = useRef();
  const history = useHistory();

  useEffect(() => {
    
  }, [passwordError])

  const checkPasswordsEquality = () => {
    if(passwordRef.current.value !== passwordRepeatRef.current.value){
      setpasswordError("Passwords must be equal!");
    }
    else{
      setpasswordError("");
    }
  }

  const submitHandler = (event) => {
    event.preventDefault();

    let authService = new AuthService();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const passwordConfirmation = passwordRepeatRef.current.value;
    const phoneNumber = secureLs.get("phone");

    authService
      .signup({ email, password, passwordConfirmation, phoneNumber })
      .then((response) => {
        secureLs.set("phone", "");
        props.onSignupVerificationSuccess();
        history.replace("/sign-in");
      })
      .catch((error) => {
        setpasswordError(error.response.data.message);
      });
  };

  return (
    <div className="container" id="loginForm">
      <h1>Sign up</h1>
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
            Password
          </label>
          <input
            type="password"
            ref={passwordRef}
            className="form-control"
            id="signup-password"
            placeholder="Password"
            onChange={checkPasswordsEquality}
          />
        </div>
        <div className="mb-3">
          <div className="mb-3">
            <label htmlFor="signup-rep-password" className="form-label">
              Repeat Password
            </label>
            <input
              type="password"
              ref={passwordRepeatRef}
              className="form-control"
              id="signup-rep-password"
              placeholder="Password"
              onChange={checkPasswordsEquality}
            />
            <h6 className="password-error">{passwordError}</h6>
          </div>
          <div className="mb-3" />
        </div>
        <button type="submit" className="btn btn-primary">
          Sign up
        </button>
      </form>
    </div>
  );
}

const mapDispatchToProps = dispatch => {
  return{
    onSignupVerificationSuccess: () => dispatch(signupVerificationSuccess())
  }
}

export default connect(null, mapDispatchToProps)(SignUp)