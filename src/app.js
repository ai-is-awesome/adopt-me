import React from "react";
import ReactDOM from "react-dom";
import Pet from "./Pet";

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "h"),
    React.createElement(Pet, {
      name: "Luna",
      animal: "Dog",
      breed: "Havanese",
    }),
    React.createElement(Pet, {
      name: "Ostrich",
      animal: "cat",
      breed: "Honolulu",
    }),
  ]);
};
ReactDOM.render(React.createElement(App), document.getElementById("root"));
