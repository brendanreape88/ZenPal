import React from "react";
import ReactDOM from "react-dom";
import Meditate from "../Meditate/Meditate";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Meditate />, div);
});
