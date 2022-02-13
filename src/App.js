import { connect } from "react-redux";
import { Redirect, Route } from "react-router-dom";
import AccountDetails from "./pages/accountDetails/AccountDetails";
import UpdateAccountDetails from "./pages/accountDetails/UpdateAccountDetails";
import AdminSignIn from "./pages/admin/AdminSignIn";
import AdminAuthNavbar from "./pages/admin/AdminAuthNavbar";
import AdminNavbar from "./pages/admin/AdminNavbar";
import AdminHome from "./pages/admin/AdminHome";
import AboutUs from "./pages/auth/AboutUs";
import AuthHome from "./pages/auth/AuthHome";
import AuthHomeInfo from "./pages/auth/AuthHomeInfo";
import ContactUs from "./pages/auth/ContactUs";
import PhoneNumberVerification from "./pages/auth/PhoneNumberVerification";
import SignIn from "./pages/auth/SignIn";
import SignUp from "./pages/auth/SignUp";
import SmsCodeVerification from "./pages/auth/SmsCodeVerification";
import Cards from "./pages/cards/Cards";
import OrderCard from "./pages/cards/OrderCard";
import Home from "./pages/home/Home";
import CarLoan from "./pages/loans/CarLoan";
import LoanNotifications from "./pages/loans/LoanNotifications";
import LoanServices from "./pages/loans/LoanServices";
import PersonalLoan from "./pages/loans/PersonalLoan";
import AuthNavbar from "./pages/navbar/AuthNavbar";
import HomeNavbar from "./pages/navbar/HomeNavbar";
import TransactionHistory from "./pages/transactions/TransactionHistory";
import ExternalTransfer from "./pages/transfer/ExternalTransfer";
import InternalTransfer from "./pages/transfer/InternalTransfer";
import Transfer from "./pages/transfer/Transfer";
import AdminCustomerRegister from "./pages/admin/AdminCustomerRegister";
import AdminLoanRequests from "./pages/admin/AdminLoanRequests";

function App(props) {
  return (
    <div>
      <Route path="/phone-number-verification">
        <AuthNavbar />
        {props.store.isLoggedIn ? (
          <Redirect to="/home" />
        ) : (
          <PhoneNumberVerification />
        )}
      </Route>

      <Route path="/sms-code-verification">
        <AuthNavbar />
        {props.store.isLoggedIn ? (
          <Redirect to="/home" />
        ) : props.store.isMessageCodeAllowed ? (
          <SmsCodeVerification />
        ) : (
          <Redirect to="/phone-number-verification" />
        )}
      </Route>

      <Route path="/sign-up">
        <AuthNavbar />
        {props.store.isLoggedIn ? (
          <Redirect to="/home" />
        ) : props.store.isSignupAllowed ? (
          <SignUp />
        ) : (
          <Redirect to="/phone-number-verification" />
        )}
      </Route>

      <Route path="/sign-in">
        <AuthNavbar />
        {props.store.isLoggedIn ? <Redirect to="/home" /> : <SignIn />}
      </Route>

      <Route path="/admin/sign-in">
        <AdminAuthNavbar />
        {props.store.isLoggedIn ? (
          <Redirect to="/admin/home" />
        ) : (
          <AdminSignIn />
        )}
      </Route>

      <Route path="/admin/home">
        <AdminNavbar />
        {props.store.isLoggedIn && props.store.isAdmin ? (
          <AdminHome />
        ) : (
          <Redirect to="/admin/sign-in" />
        )}
      </Route>

      <Route path="/admin/customer-register">
        <AdminNavbar />
        {props.store.isLoggedIn && props.store.isAdmin ? (
          <AdminCustomerRegister />
        ) : (
          <Redirect to="/admin/sign-in" />
        )}
      </Route>

      <Route path="/admin/loan-requests">
        <AdminNavbar />
        {props.store.isLoggedIn && props.store.isAdmin ? (
          <AdminLoanRequests />
        ) : (
          <Redirect to="/admin/sign-in" />
        )}
      </Route>

      <Route path="/" exact>
        {props.store.isLoggedIn ? <HomeNavbar /> : <AuthNavbar />}
        <AuthHome>
          <AuthHomeInfo />
        </AuthHome>
      </Route>

      <Route path="/about-us">
        <AuthNavbar />
        <AuthHome>
          <AboutUs />
        </AuthHome>
      </Route>

      <Route path="/contact-us">
        <AuthNavbar />
        <AuthHome>
          <ContactUs />
        </AuthHome>
      </Route>

      <Route path="/contact">
        <HomeNavbar />
        <AuthHome>
          <ContactUs />
        </AuthHome>
      </Route>

      <Route path="/home">
        <HomeNavbar />
        {props.store.isLoggedIn ? <Home /> : <Redirect to="/" />}
      </Route>

      <Route path="/order-card">
        <HomeNavbar />
        {props.store.isLoggedIn ? <OrderCard /> : <Redirect to="/" />}
      </Route>

      <Route path="/cards">
        <HomeNavbar />
        {props.store.isLoggedIn ? <Cards /> : <Redirect to="/" />}
      </Route>

      <Route path="/loan-services">
        <HomeNavbar />
        {props.store.isLoggedIn ? <LoanServices /> : <Redirect to="/" />}
      </Route>

      <Route path="/personal-loan">
        <HomeNavbar />
        {props.store.isLoggedIn ? <PersonalLoan /> : <Redirect to="/" />}
      </Route>

      <Route path="/car-loan">
        <HomeNavbar />
        {props.store.isLoggedIn ? <CarLoan /> : <Redirect to="/" />}
      </Route>

      <Route path="/loan-notifications">
        <HomeNavbar />
        {props.store.isLoggedIn ? <LoanNotifications /> : <Redirect to="/" />}
      </Route>

      <Route path="/account-details">
        <HomeNavbar />
        {props.store.isLoggedIn ? <AccountDetails /> : <Redirect to="/" />}
      </Route>

      <Route path="/update-account-details">
        <HomeNavbar />
        {props.store.isLoggedIn ? (
          <UpdateAccountDetails />
        ) : (
          <Redirect to="/" />
        )}
      </Route>

      <Route path="/transfer">
        <HomeNavbar />
        {props.store.isLoggedIn ? <Transfer /> : <Redirect to="/" />}
      </Route>

      <Route path="/internal-transfer">
        <HomeNavbar />
        {props.store.isLoggedIn ? <InternalTransfer /> : <Redirect to="/" />}
      </Route>

      <Route path="/external-transfer">
        <HomeNavbar />
        {props.store.isLoggedIn ? <ExternalTransfer /> : <Redirect to="/" />}
      </Route>

      <Route path="/transaction-history">
        <HomeNavbar />
        {props.store.isLoggedIn ? <TransactionHistory /> : <Redirect to="/" />}
      </Route>
    </div>
  );
}

const mapStateToProps = (store) => {
  return {
    store,
  };
};

export default connect(mapStateToProps)(App);
