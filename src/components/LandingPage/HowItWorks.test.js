import React from "react";
import ReactDOM from "react-dom";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import HowItWorks from "./HowItWorks";
it("renders without crashing", () => {
  const div = document.createElement("div");
  const history = createMemoryHistory();
  ReactDOM.render(
    <Router history={history}>
      <HowItWorks />
    </Router>,
    div
  );
});
