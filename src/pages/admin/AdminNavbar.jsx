import React from "react";
import { Link } from "react-router-dom";
import secureLs from "../../common/helper";
import {connect} from "react-redux";
import { adminLogoutSuccess } from "../../redux/actions/authActions";
import "../navbar/Navbar.css";

function AdminNavbar(props) {

  const logoutHandler = () =>{
    secureLs.set("Authorization", "");
    props.onLogoutSuccess();
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link className="navbar-brand" to="/admin/home">
          <h1>
            <span>FlexBank</span>
          </h1>
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
    onLogoutSuccess: () => dispatch(adminLogoutSuccess())
  }
}

export default connect(null, mapDispatchToProps)(AdminNavbar)