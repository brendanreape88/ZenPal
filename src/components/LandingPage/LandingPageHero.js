import React, { Component } from "react";
import "./LandingPage.css";

class LandingPageHero extends Component {
  render() {
    return (
      <header className="LandingPage__Hero">
        <h1>Your online meditation diary.</h1>
        <h2>
          ZenPal makes it easy to time and reflect on your daily meditations.
          Writing about the benefits of your practice is one of the best
          motivational aids in keeping your practice consistent.
        </h2>
      </header>
    );
  }
}

export default LandingPageHero;
