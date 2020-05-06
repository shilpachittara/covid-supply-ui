/*!

*/
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import "assets/css/bootstrap.min.css";
import "assets/scss/paper-kit.scss";
import "assets/demo/demo.css";
import "assets/css/custom.css"
import LandingPage from "views/examples/LandingPage.js";
import ProfilePage from "views/examples/ProfilePage.js";
import RegisterPage from "views/examples/RegisterPage.js";
import Login from "views/examples/Login.jsx"
import Product from "views/examples/ProductRegistration.jsx"
import Request from "views/examples/RequestForm.jsx"
import AboutUs from "views/examples/AboutUs"
import OrderSuccess from "views/examples/OrderSuccess"
import NotFound from "views/examples/NotFound"
import ProductDetail from "views/examples/ProductDetail"
import Dashboard from 'views/examples/Dashboard'
import DashboardTab from 'views/examples/DashboardTab'


// others

ReactDOM.render(
  <BrowserRouter>
    <Switch>
     {/* <Route path="/index" render={props => <Index {...props} />} />
      <Route
        path="/nucleo-icons"
        render={props => <NucleoIcons {...props} />}
/>*/}
      <Route
        exact path="/"
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
        path="/all-product"
        render={props => <Product {...props} />}
      />
      <Route
        path="/product/:productName"
        render={props => <ProductDetail {...props} />}
      />
       <Route
        path="/request-form/:category/:product"
        render={props => <Request {...props} />}
      />
       <Route
        path="/about-us"
        render={props => <AboutUs {...props} />}
      />
      <Route
        path="/order-confirmation"
        render={props => <OrderSuccess {...props} />}
      />
       <Route
        path="/not-found"
        render={props => <NotFound {...props} />}
      />
        <Route
        path="/dashboard"
        render={props => <Dashboard {...props} />}
      />
      <Route
        path="/dashboard-tab"
        render={props => <DashboardTab {...props} />}
      />
      <Redirect to="/not-found" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
