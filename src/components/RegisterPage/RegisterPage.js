import React, { Component } from "react";
import Context from "../../Context";
import UsersApiService from "../../services/users-api-service";
import "./RegisterPage.css";

class RegisterPage extends Component {
  state = {
    clickedRegister: false,
  };

  static contextType = Context;

  onRegister = (event) => {
    // event.preventDefault();
    // const desiredUsername = event.target.user_name.value;
    // const desiredPassword = event.target.password.value;
    // const matchedUser = this.context.users.filter(
    //   (u) => u.user_name === desiredUsername
    // );
    // const matchedUserName = matchedUser[0]
    //   ? matchedUser[0].user_name
    //   : "no match";
    // if (matchedUserName == desiredUsername) {
    //   alert("Username already in use. Please choose another name.");
    // } else {
    //   this.context.registerNewUser(desiredUsername, desiredPassword);
    //   this.props.history.push("/dashboard");
    // }
    event.preventDefault();
    const user_name = event.target.user_name.value;
    const password = event.target.password.value;
    this.setState({ clickedRegister: true });
    UsersApiService.registerUser(user_name, password).then((user) => {
      this.context.updateUser(user);
      this.props.history.push("/dashboard");
    });
  };

  render() {
    return (
      <div className="RegisterPage">
        <main className="RegisterPage__Main">
          {this.state.clickedRegister ? (
            <div className="Processing">
              <h3>processing...</h3>
            </div>
          ) : (
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
        </main>
      </div>
    );
  }
}

export default RegisterPage;
