import React from "react";

export default function Pet({ name, animal, breed }) {
  const element = React.createElement("div", {}, [
    React.createElement("h1", {}, name),
    React.createElement("h2", {}, animal),
    React.createElement("h2", {}, breed),
  ]);

  return (
    <div>
      <h1>name</h1>
      <h2>animal</h2>
    </div>
  );

  return element;
}