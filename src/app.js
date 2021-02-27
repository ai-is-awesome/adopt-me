const Pet = ({ name, animal, breed }) => {
  const element = React.createElement("h2", {}, [
    React.createElement("h1", {}, name),
    React.createElement("h2", {}, animal),
    React.createElement("h2", {}, breed),
  ]);

  return element;
};

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
