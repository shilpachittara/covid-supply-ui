/*!

*/
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

// styles
import "assets/css/bootstrap.min.css";
import "assets/scss/paper-kit.scss";
import "assets/demo/demo.css";
import "assets/css/custom.css"
// pages
import Index from "views/Index.js";
import NucleoIcons from "views/NucleoIcons.js";
import LandingPage from "views/examples/LandingPage.js";
import ProfilePage from "views/examples/ProfilePage.js";
import RegisterPage from "views/examples/RegisterPage.js";
import Login from "views/examples/Login.jsx"
import Product from "views/examples/ProductRegistration.jsx"
import Request from "views/examples/RequestForm.jsx"
import AboutUs from "views/examples/AboutUs"

// others

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/index" render={props => <Index {...props} />} />
      <Route
        path="/nucleo-icons"
        render={props => <NucleoIcons {...props} />}
      />
      <Route
        path="/landing-page"
        render={props => <LandingPage {...props} />}
      />
      <Route
        path="/profile-page"
        render={props => <ProfilePage {...props} />}
      />
      <Route
        path="/register-page"
        render={props => <RegisterPage {...props} />}
      />
       <Route
        path="/login"
        render={props => <Login {...props} />}
      />
       <Route
        path="/product/:productName?"
        render={props => <Product {...props} />}
      />
       <Route
        path="/request-form/:category/:product"
        render={props => <Request {...props} />}
      />
       <Route
        path="/about-us"
        render={props => <AboutUs {...props} />}
      />
      <Redirect to="/landing-page" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
