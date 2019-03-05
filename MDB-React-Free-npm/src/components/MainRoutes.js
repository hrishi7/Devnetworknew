import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import Dashboard from "./Dashboard";
import Friends from "./Friends";

export class MainRoutes extends Component {
  render() {
    return (
      <Router>
        <div className="main-content">
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/friends" component={Friends} />
        </div>
      </Router>
    );
  }
}

export default MainRoutes;
