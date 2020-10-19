import React from "react";
import ReactDOM from "react-dom";
import Viewer from "../Dashboard/Viewer";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Viewer />, div);
});
