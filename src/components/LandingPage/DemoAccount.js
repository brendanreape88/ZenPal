import React, { Component } from "react";
import "./LandingPage.css";

class DemoAccount extends Component {
  render() {
    return (
      <section className="LandingPage__DemoAccount">
        <h3>Demo Account</h3>
        <div className="LandingPage__DemoAccount__Box">
          <span>
            To log in, either register, or use the demo login credientials
            below.
          </span>
          <br />
          <br />
          <span>
            <strong>User:</strong> ZenPalDemo
          </span>
          <br />
          <br />
          <span>
            <strong>Password:</strong> ZenPalDemo1!
          </span>
          <br />
          <br />
        </div>
      </section>
    );
  }
}

export default DemoAccount;
