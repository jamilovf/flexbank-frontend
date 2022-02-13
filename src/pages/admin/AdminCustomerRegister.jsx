import React, { useRef, useState } from "react";
import AdminService from "../../api/adminService";
import "./AdminCustomerRegister.css";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import { convertDate } from "../../common/helper";

export default function AdminCustomerRegister() {
  const [birthDateVal, setbirthDateVal] = useState(new Date());
  const [registerError, setregisterError] = useState(false);
  const [registerMessage, setregisterMessage] = useState("");

  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const phoneNumberRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    let adminService = new AdminService();
    let body = {};
    console.log(birthDateVal);
    const firstName = firstNameRef.current.value;
    const lastName = lastNameRef.current.value;
    const birthDate = convertDate(birthDateVal);
    const phoneNumber = phoneNumberRef.current.value;

    body = { firstName, lastName, birthDate, phoneNumber };
    console.log(body);
    adminService
      .registerCustomerDetails(body)
      .then((response) => {
        setregisterError(false);
        setregisterMessage(response.data);
      })
      .catch((error) => {
        setregisterError(true);
        setregisterMessage(error.response.data.message);
      });
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-3"></div>
        <div className="col-7">
          <form className="mt-4" onSubmit={submitHandler}>
            <h2> Customer Registration </h2>
            <div className="mb-3">
              <label htmlFor="firstName" className="form-label">
                First name
              </label>
              <input
                type="text"
                ref={firstNameRef}
                className="form-control"
                id="firstName"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="lastName" className="form-label">
                Last name
              </label>
              <input
                type="text"
                ref={lastNameRef}
                className="form-control"
                id="lastName"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="phoneNumber" className="form-label">
                Phone number
              </label>
              <input
                type="text"
                ref={phoneNumberRef}
                className="form-control"
                id="phoneNumber"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="birthDate" className="form-label">
                Birth date
              </label>
              <div className="ad input-group date" id="datepicker-from">
                <DatePicker
                  dateFormat="yyyy/MM/dd"
                  className="form-control"
                  selected={birthDateVal}
                  onChange={(date) => setbirthDateVal(date)}
                />
                <span className="input-group-append">
                  <span className="input-group-text bg-white">
                    <i className="fa fa-calendar"></i>
                  </span>
                </span>
              </div>
            </div>
            <button type="submit" className="btn btn-primary">
              Register
            </button>
            {registerError ? (
              <h6 className="register-error">{registerMessage}</h6>
            ) : (
              <h6 className="register-success">{registerMessage}</h6>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
