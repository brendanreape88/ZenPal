import React, { Component } from "react";
import LandingPageHero from "./LandingPageHero";
import HowItWorks from "./HowItWorks";
import DemoAccount from "./DemoAccount";
import GetStarted from "./GetStarted";
import "./LandingPage.css";

class LandingPage extends Component {
  render() {
    return (
      <div className="LandingPage">
        <main className="LandingPage__Main">
          <LandingPageHero />
          <HowItWorks />
          <DemoAccount />
          <GetStarted />
        </main>
      </div>
    );
  }
}

export default LandingPage;
