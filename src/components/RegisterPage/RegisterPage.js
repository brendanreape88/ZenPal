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
    error: null,
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
      error: null,
    });
    UsersApiService.registerUser(user_name, user_password)
      .then((res) => {
        this.setState({
          showRegister: false,
          registering: false,
          showSuccess: true,
          error: null,
        });
      })
      .catch((err) => {
        this.setState({
          showRegister: true,
          registering: false,
          showSuccess: false,
          error: err.error,
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
                <div className="Error">
                  {this.state.error && <span>{this.state.error}</span>}
                </div>
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
