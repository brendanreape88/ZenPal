import React, { Component } from "react";
import "./LandingPage.css";

class LandingPageHero extends Component {
  render() {
    return (
      <header className="LandingPage__Hero">
        <div class="Text__Container">
          <h1>Your Online Meditation Companion.</h1>
          <h2>
            ZenPal is an easy-to-use meditation timer and diary app that helps
            you stay consistent with one of your most important self-care
            practices.
          </h2>
        </div>
      </header>
    );
  }
}

export default LandingPageHero;
