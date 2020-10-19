import React, { Component } from "react";
import Context from "../../Context";
import config from "../../config";
import "./Dashboard.css";

class Display extends Component {
  static contextType = Context;
  render() {
    const entries = this.context.entries;
    const numberOfMeditations = entries.length;
    const user_name = localStorage.getItem(config.USER_NAME);
    return (
      <div className="Dashboard__Flex">
        <div className="Welcome">
          <h1>Hi, {user_name}</h1>
        </div>
        <div className="Status">
          <h2>You've recorded {numberOfMeditations} meditations!</h2>
        </div>
      </div>
    );
  }
}

export default Display;
