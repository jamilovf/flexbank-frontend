import { connect } from "react-redux";
import { Redirect, Route } from "react-router-dom";
import AccountDetails from "./pages/accountDetails/AccountDetails";
import UpdateAccountDetails from "./pages/accountDetails/UpdateAccountDetails";
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

function App(props) {
  return (
    <div>
      {props.store.isLoggedIn ? <HomeNavbar /> : <AuthNavbar />}

      <Route path="/phone-number-verification">
        {props.store.isLoggedIn ? (
          <Redirect to="/home" />
        ) : (
          <PhoneNumberVerification />
        )}
      </Route>

      <Route path="/sms-code-verification">
        {props.store.isLoggedIn ? (
          <Redirect to="/home" />
        ) : props.store.isMessageCodeAllowed ? (
          <SmsCodeVerification />
        ) : (
          <Redirect to="/phone-number-verification" />
        )}
      </Route>

      <Route path="/sign-up">
        {props.store.isLoggedIn ? (
          <Redirect to="/home" />
        ) : props.store.isSignupAllowed ? (
          <SignUp />
        ) : (
          <Redirect to="/phone-number-verification" />
        )}
      </Route>

      <Route path="/sign-in">
        {props.store.isLoggedIn ? <Redirect to="/home" /> : <SignIn />}
      </Route>

      <Route path="/" exact>
        <AuthHome>
          <AuthHomeInfo />
        </AuthHome>
      </Route>

      <Route path="/about-us">
        <AuthHome>
          <AboutUs />
        </AuthHome>
      </Route>

      <Route path="/contact-us">
        <AuthHome>
          <ContactUs />
        </AuthHome>
      </Route>

      <Route path="/home">
        {props.store.isLoggedIn ? <Home /> : <Redirect to="/" />}
      </Route>

      <Route path="/order-card">
        {props.store.isLoggedIn ? <OrderCard /> : <Redirect to="/" />}
      </Route>

      <Route path="/cards">
        {props.store.isLoggedIn ? <Cards /> : <Redirect to="/" />}
      </Route>

      <Route path="/loan-services">
        {props.store.isLoggedIn ? <LoanServices /> : <Redirect to="/" />}
      </Route>

      <Route path="/personal-loan">
        {props.store.isLoggedIn ? <PersonalLoan /> : <Redirect to="/" />}
      </Route>

      <Route path="/car-loan">
        {props.store.isLoggedIn ? <CarLoan /> : <Redirect to="/" />}
      </Route>

      <Route path="/loan-notifications">
        {props.store.isLoggedIn ? <LoanNotifications /> : <Redirect to="/" />}
      </Route>

      <Route path="/account-details">
        {props.store.isLoggedIn ? <AccountDetails /> : <Redirect to="/" />}
      </Route>

      <Route path="/update-account-details">
        {props.store.isLoggedIn ? <UpdateAccountDetails /> : <Redirect to="/" />}
      </Route>

      <Route path="/transfer">
        {props.store.isLoggedIn ? <Transfer /> : <Redirect to="/" />}
      </Route>

      <Route path="/internal-transfer">
        {props.store.isLoggedIn ? <InternalTransfer /> : <Redirect to="/" />}
      </Route>

      <Route path="/external-transfer">
        {props.store.isLoggedIn ? <ExternalTransfer /> : <Redirect to="/" />}
      </Route>

      <Route path="/transaction-history">
        {props.store.isLoggedIn ? <TransactionHistory /> : <Redirect to="/" />}
      </Route>
    </div>
  );
}

const mapStateToProps = (store) => {
  return {
    store
  };
};

export default connect(mapStateToProps)(App);
