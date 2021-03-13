import React, { Component } from "react";
import witness from "../../assets/witness.png";
import timer from "../../assets/stopwatch.png";
import meditation from "../../assets/meditation.png";
import writing from "../../assets/writing.png";
import "./LandingPage.css";

class HowItWorks extends Component {
  render() {
    return (
      <section className="LandingPage__HowItWorks">
        <h3>How it works</h3>
        <div className="LandingPage__HowItWorks__Box">
          <div class="HowItWorks__Item">
            <img class="HowItWorks__Icon" src={witness} alt="eye symbol" />
            <span>Login to view your meditation dashboard.</span>
          </div>
          <div class="HowItWorks__Item">
            <img
              class="HowItWorks__Icon"
              src={meditation}
              alt="meditation symbol"
            />
            <span>
              When you're ready to meditate, click the "meditate" button.
            </span>
          </div>
          <div class="HowItWorks__Item">
            <img class="HowItWorks__Icon" src={timer} alt="timer symbol" />
            <span>Set your timer and begin your practice.</span>
          </div>
          <div class="HowItWorks__Item">
            <img class="HowItWorks__Icon" src={writing} alt="writing symbol" />
            <span>
              Once you're done, fill out a new journal entry outlining your
              experience.
            </span>
          </div>
        </div>

        <div className="LandingPage__HowItWorks__Grid">
          <div class="HowItWorks__2ItemRow">
            <div class="HowItWorks__Item">
              <img class="HowItWorks__Icon" src={witness} alt="eye symbol" />
              <span>Login to view your meditation dashboard.</span>
            </div>
            <div class="HowItWorks__Item">
              <img
                class="HowItWorks__Icon"
                src={meditation}
                alt="meditation symbol"
              />
              <span>
                When you're ready to meditate, click the "meditate" button.
              </span>
            </div>
          </div>
          <div class="HowItWorks__2ItemRow">
            <div class="HowItWorks__Item">
              <img class="HowItWorks__Icon" src={timer} alt="timer symbol" />
              <span>Set your timer and begin your practice.</span>
            </div>
            <div class="HowItWorks__Item">
              <img
                class="HowItWorks__Icon"
                src={writing}
                alt="writing symbol"
              />
              <span>
                Once you're done, fill out a new journal entry outlining your
                experience.
              </span>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default HowItWorks;
