import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
//import { transitions, positions, Provider as AlertProvider } from "react-alert";
//import AlertTemplate from "react-alert-template-basic";
import App from "./components/App/App";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
