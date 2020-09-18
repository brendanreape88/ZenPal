import React, { Component } from "react";
import "./LandingPage.css";

class DemoAccount extends Component {
  render() {
    return (
      <section className="LandingPage__DemoAccount">
        <h3>Demo Account</h3>
        <div className="LandingPage__DemoAccount__Box">
          <span>
            To log in, either register, or use the demo credientials below.
          </span>
          <br />
          <br />
          <span>User: ZenPalDemo</span>
          <br />
          <br />
          <span>Password: ZenPalDemo1!</span>
          <br />
          <br />
        </div>
      </section>
    );
  }
}

export default DemoAccount;
