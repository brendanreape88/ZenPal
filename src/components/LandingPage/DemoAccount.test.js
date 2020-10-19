import React from "react";
import ReactDOM from "react-dom";
import DemoAccount from "../LandingPage/DemoAccount";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<DemoAccount />, div);
});
