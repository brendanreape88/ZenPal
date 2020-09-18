import React, { Component } from "react";
import { Link } from "react-router-dom";
import Context from "../RegisterPage/Context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Header.css";

class Header extends Component {
  state = {
    showDropDown: false,
  };

  static contextType = Context;

  showDropDown = () => {
    this.setState({ showDropDown: !this.state.showDropDown });
  };

  logOut = () => {
    this.context.logOut();
    this.setState({ showDropDown: false });
  };

  render() {
    const user = this.context.user;
    return (
      <>
        <nav className="Header">
          <div className="Header__Logo">
            <div className="Title">
              <h1>
                <Link to="/">ZenPal</Link>
              </h1>
            </div>
            <div className="Icon">
              <Link to="/">
                <FontAwesomeIcon icon="pen" />
              </Link>
            </div>
          </div>
          <div className="Header__Hamburger">
            <Link onClick={this.showDropDown}>
              <FontAwesomeIcon icon="bars" />
            </Link>
          </div>
          <div className="Header__DesktopLinks">
            <ul>
              {user ? (
                <>
                  <li>
                    <Link to="/" onClick={this.logOut}>
                      logout
                    </Link>
                  </li>
                  <li>
                    <Link to="/dashboard">dashboard</Link>
                  </li>
                  <li>
                    <Link to="/meditate">meditate</Link>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <Link to="/register">register</Link>
                  </li>
                  <li>
                    <Link to="/login">login</Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </nav>
        {this.state.showDropDown === true && (
          <div className="Header__MobileLinks">
            <ul>
              {user ? (
                <>
                  <li>
                    <Link to="/" onClick={this.logOut}>
                      logout
                    </Link>
                  </li>
                  <li>
                    <Link to="/dashboard" onClick={this.showDropDown}>
                      dashboard
                    </Link>
                  </li>
                  <li>
                    <Link to="/meditate" onClick={this.showDropDown}>
                      meditate
                    </Link>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <Link to="/register" onClick={this.showDropDown}>
                      register
                    </Link>
                  </li>
                  <li>
                    <Link to="/login" onClick={this.showDropDown}>
                      login
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        )}
      </>
    );
  }
}

export default Header;
