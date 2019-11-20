import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";
import "assets/scss/material-kit-react.scss?v=1.8.0";
import Components from "views/Components/Components.js";
import ContactUs from "views/ContactUs/ContactUs.js";
import Services from "views/Services/Services.js";
import 'bootstrap/dist/css/bootstrap.min.css';

var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/contact-us" exact component={ContactUs} />
      <Route path="/" exact component={Services} />
      <Route path="/services" exact component={Components} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
