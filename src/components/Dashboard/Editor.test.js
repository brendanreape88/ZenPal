import React from "react";
import ReactDOM from "react-dom";
import Editor from "../Dashboard/Editor";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Editor />, div);
});
