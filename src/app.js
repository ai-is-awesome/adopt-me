import React from "react";
import ReactDOM from "react-dom";
import { Router, Link } from "@reach/router";
import Details from "./details";
import SearchParams from "./SearchParams";

const App = () => {
  return (
    <div>
      <header>
        <Link to="/">Adopt Me!</Link>
      </header>

      <Router>
        <SearchParams path="/" />
        <Details path="details/:id" />
      </Router>
    </div>
  );
};
ReactDOM.render(React.createElement(App), document.getElementById("root"));
