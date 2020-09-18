import React, { Component } from "react";
import Context from "../RegisterPage/Context";
import "./LoginPage.css";

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clickedLogIn: false,
    };
  }

  static contextType = Context;

  onLogin = (event) => {
    event.preventDefault();
    const user_name = event.target.user_name.value;
    const password = event.target.password.value;
    const foundUser = this.context.users.filter(
      (u) => u.user_name == user_name && u.user_password == password
    );
    if (foundUser.length === 0) {
      alert("Incorrect username and password combination");
    } else {
      this.context.logIn(foundUser);
      this.props.history.push("/dashboard");
    }
  };

  render() {
    return (
      <div className="LoginPage">
        <main className="LoginPage__Main">
          {this.props.clickedLogIn ? (
            <div className="Logging_In">
              <h3>logging in...</h3>
            </div>
          ) : (
            <>
              <h1>Login</h1>
              <form onSubmit={this.onLogin}>
                <label htmlFor="username">username</label>
                <br />
                <input type="text" name="user_name" id="user_name" required />
                <br />
                <label htmlFor="password">password</label>
                <br />
                <input type="password" name="password" id="password" required />
                <br />
                <br />
                <button>submit</button>
              </form>
            </>
          )}
        </main>
      </div>
    );
  }
}

export default LoginPage;
