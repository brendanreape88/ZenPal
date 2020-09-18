import React, { Component } from "react";
import "./LandingPage.css";

class HowItWorks extends Component {
  render() {
    return (
      <section className="LandingPage__HowItWorks">
        <h3>How it works</h3>
        <div className="LandingPage__HowItWorks__Box">
          <img
            src="https://i.ibb.co/xft5sg8/Screen-Shot-2020-08-26-at-2-56-27-PM.jpg"
            alt="Woman meditating"
          />
          <ul>
            <li>Register/Login to check out your meditation dashboard.</li>
            <br />
            <li>When you're ready to meditate, click the "meditate" button.</li>
            <br />
            <li>Set your timer and begin your practice.</li>
            <br />
            <li>
              Once you're done, fill out a new journal entry outlining your
              experience and the benefits you got from your practice.
            </li>
          </ul>
        </div>
      </section>
    );
  }
}

export default HowItWorks;
