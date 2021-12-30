import { Route } from "react-router-dom";
import AboutUs from "./pages/auth/AboutUs";
import AuthHome from "./pages/auth/AuthHome";
import AuthHomeInfo from "./pages/auth/AuthHomeInfo";
import ContactUs from "./pages/auth/ContactUs";
import SignIn from "./pages/auth/SignIn";
import SignUp from "./pages/auth/SignUp";
import Cards from "./pages/cards/Cards";
import OrderCard from "./pages/cards/OrderCard";
import Home from "./pages/home/Home";
import CarLoan from "./pages/loans/CarLoan";
import LoanNotifications from "./pages/loans/LoanNotifications";
import LoanServices from "./pages/loans/LoanServices";
import PersonalLoan from "./pages/loans/PersonalLoan";
import AuthNavbar from "./pages/navbar/AuthNavbar";
import HomeNavbar from "./pages/navbar/HomeNavbar";

function App() {
  return (
    <div>
      <Route path="/sign-in">
        <AuthNavbar />
        <SignIn />
      </Route>
      <Route path="/sign-up">
        <AuthNavbar />
        <SignUp />
      </Route>
      <Route path="/" exact>
        <AuthNavbar />
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
      <Route path="/home">
        <HomeNavbar />
        <Home />
      </Route>
      <Route path="/order-card">
        <HomeNavbar />
        <OrderCard />
      </Route>
      <Route path="/cards">
        <HomeNavbar />
        <Cards />
      </Route>
      <Route path="/loan-services">
        <HomeNavbar />
        <LoanServices />
      </Route>
      <Route path="/personal-loan">
        <HomeNavbar />
        <PersonalLoan />
      </Route>
      <Route path="/car-loan">
        <HomeNavbar />
        <CarLoan />
      </Route>
      <Route path="/loan-notifications">
        <HomeNavbar />
        <LoanNotifications />
      </Route>
    </div>
  );
}

export default App;
