import { Route } from "react-router-dom";
import AboutUs from "./pages/auth/AboutUs";
import AuthHome from "./pages/auth/AuthHome";
import AuthHomeInfo from "./pages/auth/AuthHomeInfo";
import ContactUs from "./pages/auth/ContactUs";
import SignIn from "./pages/auth/SignIn";
import SignUp from "./pages/auth/SignUp";
import Navbar from "./pages/navbar/Navbar";

function App() {
  return (
    <div>
      <Route path="/">
        <Navbar />
      </Route>
      <Route path="/sign-in">
        <SignIn />
      </Route>
      <Route path="/sign-up">
        <SignUp />
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
    </div>
  );
}

export default App;
