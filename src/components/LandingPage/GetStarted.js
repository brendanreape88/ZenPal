import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./LandingPage.css";

class GetStarted extends Component {
  render() {
    return (
      <section className="LandingPage__GetStarted">
        <h3>Get started</h3>
        <div className="LandingPage__GetStarted__Box">
          <h4>
            <Link to="/register">Register</Link>
          </h4>
          <h4>
            <Link to="/login">Login</Link>
          </h4>
        </div>
      </section>
    );
  }
}

export default GetStarted;
