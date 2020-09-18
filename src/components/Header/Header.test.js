import React from "react";
import ReactDOM from "react-dom";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import Header from "./Header";
it("renders without crashing", () => {
  const div = document.createElement("div");
  const history = createMemoryHistory();
  ReactDOM.render(
    <Router history={history}>
      <Header />
    </Router>,
    div
  );
});
