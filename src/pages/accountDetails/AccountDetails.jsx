import React, { useEffect, useState } from "react";
import AccountDetailsService from "../../api/accountDetailsService";
import "./AccountDetails.css";

export default function AccountDetails() {

  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [birthDate, setbirthDate] = useState("");
  const [email, setemail] = useState("");
  const [phoneNumber, setphoneNumber] = useState("");
  const [city, setcity] = useState("");
  const [address, setaddress] = useState("");
  const [zip, setzip] = useState("");

  useEffect(() => {
    let accountDetailsService = new AccountDetailsService();
    
    accountDetailsService.getAccountDetails()
    .then((response) => {
      setfirstName(response.data.firstName);
      setlastName(response.data.lastName);
      setbirthDate(response.data.birthDate);
      setemail(response.data.email);
      setphoneNumber(response.data.phoneNumber);
      setcity(response.data.city);
      setaddress(response.data.address);
      setzip(response.data.zip);
    });
    
  }, [])

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
          <label htmlFor="firstName" className="form-label">
            First name :
          </label>
          <p> {firstName}</p>
        </div>
        <div className="acc col-md-6">
          <label htmlFor="lastName" className="form-label">
            Last name :
          </label>
          <p> {lastName}</p>
        </div>
        <div className="acc col-md-6">
          <label htmlFor="birthDate" className="form-label">
            Birth date :
          </label>
          <p> {birthDate}</p>
        </div>
        <div className="acc col-md-6">
          <label htmlFor="email" className="form-label">
            Email :
          </label>
          <p> {email}</p>
        </div>
        <div className="acc col-md-6">
          <label htmlFor="phoneNumber" className="form-label">
            Phone number :
          </label>
          <p> {phoneNumber}</p>
        </div>
        <div className="acc col-md-6">
          <label htmlFor="city" className="form-label">
            City :
          </label>
          <p> {city}</p>
        </div>
        <div className="acc col-md-6">
          <label htmlFor="address" className="form-label">
            Address :
          </label>
          <p> {address}</p>
        </div>
        <div className="acc col-md-6">
          <label htmlFor="zip" className="form-label">
            Zip :
          </label>
          <p> {zip}</p>
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
