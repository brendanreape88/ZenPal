import React, { Component } from "react";
import Context from "../../Context";
import UsersApiService from "../../services/users-api-service";
import { Link } from "react-router-dom";
import "./RegisterPage.css";

class RegisterPage extends Component {
  state = {
    showRegister: true,
    registering: false,
    showSuccess: false,
  };

  static contextType = Context;

  onRegister = (event) => {
    event.preventDefault();
    const user_name = event.target.user_name.value;
    const user_password = event.target.password.value;
    this.setState({
      showRegister: false,
      registering: true,
      showSuccess: false,
    });
    UsersApiService.registerUser(user_name, user_password).then((user) => {
      //this.context.updateUser(user);
      console.log(
        "Hey, this is the user sent from the server. You might not even need this data in the response from the server.",
        user
      );
      this.setState({
        showRegister: false,
        registering: false,
        showSuccess: true,
      });
    });
  };

  render() {
    return (
      <div className="RegisterPage">
        <main className="RegisterPage__Main">
          {this.state.showRegister && (
            <>
              <h1>Register</h1>
              <form onSubmit={this.onRegister}>
                <label htmlFor="username">desired username</label>
                <br />
                <input type="text" name="user_name" id="user_name" required />
                <br />
                <label htmlFor="password">desired password</label>
                <br />
                <input type="password" name="password" id="password" required />
                <br />
                <br />
                <button>submit</button>
              </form>
            </>
          )}

          {this.state.registering && (
            <div className="Processing">
              <h3>registering...</h3>
            </div>
          )}

          {this.state.showSuccess && (
            <>
              <h1>Success!</h1>
              <h2>Let's login to your new account</h2>
              <Link to="/login">login</Link>
            </>
          )}
        </main>
      </div>
    );
  }
}

export default RegisterPage;
