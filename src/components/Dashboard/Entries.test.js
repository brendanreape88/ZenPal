import React from "react";
import ReactDOM from "react-dom";
import Entries from "../Dashboard/Entries";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Entries />, div);
});
