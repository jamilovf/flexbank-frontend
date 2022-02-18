import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logoutSuccess } from "../../redux/actions/authActions";
import LoanNotificationService from "../../api/loanNotificationService";
import secureLs from "../../common/helper";
import { useEffect } from "react";

function HomeNavbar(props) {

  const[loanNotifications, setloanNotifications] = useState([]);

  useEffect(() => {
    let loanNotificationService = new LoanNotificationService();

    loanNotificationService
      .getAllLoanNotifications()
      .then((response) => {
        setloanNotifications(response.data);
      })
      .catch((error) => {});
  }, []);

  const logoutHandler = () =>{
    secureLs.set("Authorization", "");
    props.onLogoutSuccess();
  }
  
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link className="navbar-brand" to="home">
          <h1>
            <span>FlexBank</span>
          </h1>
        </Link>
        <Link className="navbar-info" to="home">
          Home
        </Link>
        <Link className="navbar-info" to="cards">
          Cards
        </Link>
        <Link className="navbar-info" to="transfer">
          Transfer
        </Link>
        <Link
          className="navbar-info"
          to="transaction-history"
        >
          Transaction History
        </Link>
        <Link className="navbar-info" to="loan-notifications">
          Loan notifications <span className="badge">{loanNotifications.length}</span>
        </Link>
        <Link className="navbar-info" to="contact">
          Contact Us
        </Link>
        <button className="btn btn-outline-danger" type="button" onClick={logoutHandler}>
          Log out
        </button>
      </div>
    </nav>
  );
}

const mapDispatchToProps = dispatch => {
  return{
    onLogoutSuccess: () => dispatch(logoutSuccess())
  }
}

export default connect(null, mapDispatchToProps)(HomeNavbar)
