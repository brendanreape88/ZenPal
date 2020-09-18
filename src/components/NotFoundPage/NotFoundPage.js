import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./NotFoundPage.css";

class NotFoundPage extends Component {
  render() {
    return (
      <div className="NotFoundPage">
        <main className="NotFoundPage__Main">
          <h1>404 Not Found</h1>
          <h3>Sorry, this page doesn't exist!</h3>
          <button onClick={() => this.props.history.goBack()}>back</button>
        </main>
      </div>
    );
  }
}

export default NotFoundPage;
