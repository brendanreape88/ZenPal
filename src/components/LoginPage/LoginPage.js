import React, { Component } from "react";
import Context from "../../Context";
import "./LoginPage.css";
import UsersApiService from "../../services/users-api-service";
import TokenService from "../../services/token-service";

class LoginPage extends Component {
  state = {
    clickedLogIn: false,
  };

  static contextType = Context;

  clickedLogIn = () => {
    this.setState({ clickedLogIn: true });
  };

  onLogin = (event) => {
    event.preventDefault();
    this.clickedLogIn();
    const user_name = event.target.user_name.value;
    const user_password = event.target.password.value;
    console.log("user_name & user_password", user_name, user_password);
    UsersApiService.logInUser(user_name, user_password).then((res) => {
      // user_name.value = "";
      // user_password.value = "";
      console.log(res);
      TokenService.saveAuthToken(res.authToken);
      this.context.logIn();
      this.props.history.push("/dashboard");
    });
  };

  render() {
    return (
      <div className="LoginPage">
        <main className="LoginPage__Main">
          {this.state.clickedLogIn ? (
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
