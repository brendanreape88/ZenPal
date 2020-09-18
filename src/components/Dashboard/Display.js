import React, { Component } from "react";
import Context from "../RegisterPage/Context";
import "./Dashboard.css";

class Display extends Component {
  static contextType = Context;
  render() {
    const userId = this.context.user.user_id;
    const entries = this.context.entries;
    const numberOfMeditations = entries.filter((e) => e.user_id == userId)
      .length;
    return (
      <div className="Dashboard__Flex">
        <div className="Welcome">
          <h1>Hi, {this.context.user.user_name}</h1>
        </div>
        <div className="Status">
          <h2>You've recorded {numberOfMeditations} meditations!</h2>
        </div>
      </div>
    );
  }
}

export default Display;
