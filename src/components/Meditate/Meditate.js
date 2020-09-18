import React, { Component } from "react";
import Context from "../RegisterPage/Context";
import "./Meditate.css";

class Meditate extends Component {
  state = {
    timer: null,
    entry: null,
    entrySubmitted: false,
  };

  static timerInterval;
  static contextType = Context;

  handleSubmit = (e) => {
    e.preventDefault();
    const timer = e.target.meditateTime.value;
    this.context.submitTime(timer);
    if (timer != "") {
      this.setState({ timer }, this.startCountdown());
    }
  };

  startCountdown = () => {
    this.timerInterval = setInterval(() => {
      if (this.state.timer > 0) {
        this.setState({ timer: this.state.timer - 1 });
      } else {
        clearInterval(this.timerInterval);
      }
    }, 1000);
  };

  handleNewEntry = (e) => {
    e.preventDefault();
    this.setState({
      entrySubmitted: true,
    });
    const entry = e.target.textarea.value;
    this.context.submitNewEntry(entry);
    setTimeout(() => this.props.history.push("/dashboard"), 2000);
  };

  render() {
    return (
      <main className="Meditate__Main">
        <div className="Meditate__Box">
          {this.state.timer === null && (
            <>
              <h1>Let's meditate!</h1>
              <h3>Choose your meditation length below.</h3>
              <form onSubmit={(e) => this.handleSubmit(e)}>
                <select className="TimeSelect" name="meditateTime">
                  <option value="2">2 seconds</option>
                  <option value="300">5 mins.</option>
                  <option value="600">10 mins.</option>
                  <option value="900">15 mins.</option>
                  <option value="1200">20 mins.</option>
                  <option value="1500">25 mins.</option>
                  <option value="1800">30 mins.</option>
                  <option value="2100">35 mins.</option>
                  <option value="2400">40 mins.</option>
                  <option value="2700">45 mins.</option>
                  <option value="3000">50 mins.</option>
                  <option value="3300">55 mins.</option>
                  <option value="3600">60 mins.</option>
                </select>
                <button type="submit">start</button>
              </form>
            </>
          )}

          {this.state.timer > 0 && this.state.entrySubmitted === false && (
            <section>
              <h1>Counting down...</h1>
              <h2>{`${parseInt(this.state.timer / 60)}:${
                this.state.timer % 60
              }`}</h2>
            </section>
          )}

          {this.state.timer === 0 && this.state.entrySubmitted === false && (
            <>
              <h1>Great work!</h1>
              <h3>Take a moment to reflect below.</h3>
              <form
                className="JournalForm"
                onSubmit={(e) => this.handleNewEntry(e)}
              >
                <h2>Journal Entry</h2>
                <textarea
                  className="JournalText"
                  id="textarea"
                  defaultValue=""
                ></textarea>
                <br />
                <button type="submit">submit</button>
              </form>
              <button onClick={(e) => this.setState({ timer: null })}>
                restart
              </button>
            </>
          )}

          {this.state.entrySubmitted === true && (
            <div className="ThanksBox">
              <h3>Thank you!</h3>
              <span>We recieved your journal entry.</span>
            </div>
          )}
        </div>
      </main>
    );
  }
}

export default Meditate;
