import React, { useEffect, useRef, useState } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import AccountDetailsService from "../../api/accountDetailsService";
import secureLs from "../../common/helper";
import { tokenExpired } from "../../redux/actions/authActions";
import "./AccountDetails.css";

function UpdateAccountDetails(props) {
  const history = useHistory();

  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [birthDate, setbirthDate] = useState("");
  const [email, setemail] = useState("");
  const [phoneNumber, setphoneNumber] = useState("");
  const [city, setcity] = useState("");
  const [address, setaddress] = useState("");
  const [zip, setzip] = useState("");
  const [updateError, setupdateError] = useState(false);
  const [updateMessage, setupdateMessage] = useState("");

  const phoneNumberRef = useRef();
  const cityRef = useRef();
  const addressRef = useRef();
  const zipRef = useRef();

  useEffect(() => {
    let accountDetailsService = new AccountDetailsService();

    accountDetailsService
      .getAccountDetails()
      .then((response) => {
        setfirstName(response.data.firstName);
        setlastName(response.data.lastName);
        setbirthDate(response.data.birthDate);
        setemail(response.data.email);
        setphoneNumber(response.data.phoneNumber);
        setcity(response.data.city);
        setaddress(response.data.address);
        setzip(response.data.zip);
      })
      .catch((error) => {
        if (error.response.headers.token === "expired") {
          secureLs.set("Authorization", "");
          props.onTokenExpired();
          history.replace("/sign-in");
        }
      });
  }, [history, props]);

  const clickHandler = () => {
    let accountDetailsService = new AccountDetailsService();
    const city = cityRef.current.value;
    const address = addressRef.current.value;
    const zip = zipRef.current.value;
    const phoneNumber = phoneNumberRef.current.value;

    accountDetailsService.updateAccountDetails({ city, address, zip, phoneNumber })
      .then((response) => {
        setupdateError(false);
        setupdateMessage(response.data);
      })
      .catch((error) => {
        setupdateError(true);
        setupdateMessage(error.response.data.message);
      });
  };

  return (
    <div className="acc container">
      <div className="row">
        <div className="update col-md-3">
          <i className="update far fa-user"></i>
        </div>
        <div className="col-md-9">
          <h2>Update My Account</h2>
        </div>
        <div className="acc col-md-4">
          <label htmlFor="firstName" className="update form-label">
            First name :
          </label>
          <input
            type="text"
            className="update form-control"
            value={firstName}
            disabled
          ></input>
        </div>
        <div className="acc col-md-4">
          <label htmlFor="lastName" className="update form-label">
            Last name :
          </label>
          <input
            type="text"
            className="update form-control"
            value={lastName}
            disabled
          ></input>
        </div>
        <div className="acc col-md-4">
          <label htmlFor="birthDate" className="update form-label">
            Birth date :
          </label>
          <input
            type="text"
            className="update form-control"
            defaultValue={birthDate}
            disabled
          ></input>
        </div>
        <div className="acc col-md-4">
          <label htmlFor="email" className="update form-label">
            Email :
          </label>
          <input
            type="text"
            className="update form-control"
            value={email}
            disabled
          ></input>
        </div>
        <div className="acc col-md-4">
          <label htmlFor="phoneNumber" className="update form-label">
            Phone number :
          </label>
          <input
            type="text"
            ref={phoneNumberRef}
            className="update form-control"
            defaultValue={phoneNumber}
          ></input>
        </div>
        <div className="acc col-md-4">
          <label htmlFor="city" className="update form-label">
            City :
          </label>
          <input
            type="text"
            ref={cityRef}
            className="update form-control"
            defaultValue={city}
          ></input>
        </div>
        <div className="acc col-md-4">
          <label htmlFor="address" className="update form-label">
            Address :
          </label>
          <input
            type="text"
            ref={addressRef}
            className="update form-control"
            defaultValue={address}
          ></input>
        </div>
        <div className="acc col-md-4">
          <label htmlFor="zip" className="update form-label">
            Zip :
          </label>
          <input
            type="text"
            ref={zipRef}
            className="update form-control"
            defaultValue={zip}
          ></input>
        </div>
        <div className="acc col-md-4">
          {updateError ? (
            <h5 className="update-error">{updateMessage}</h5>
          ) : (
            <h5 className="update-success">{updateMessage}</h5>
          )}
        </div>
        <div className="col-12">
          <button
            type="submit"
            className="update acc btn btn-primary"
            onClick={clickHandler}
          >
            Save and Update
          </button>
        </div>
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    onTokenExpired: () => dispatch(tokenExpired()),
  };
};

export default connect(null, mapDispatchToProps)(UpdateAccountDetails);
