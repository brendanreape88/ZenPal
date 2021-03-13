import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./LandingPage.css";

class GetStarted extends Component {
  render() {
    return (
      <section className="LandingPage__GetStarted">
        <h3>Get started</h3>
        <div className="LandingPage__GetStarted__Box">
          <div class="register__button">
            <h4 class="register">
              <Link to="/register">Register</Link>
            </h4>
          </div>
          <div class="login__button">
            <h4 class="login">
              <Link to="/login">Login</Link>
            </h4>
          </div>
        </div>
      </section>
    );
  }
}

export default GetStarted;
