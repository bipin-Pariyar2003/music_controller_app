import React from "react";
import { render } from "react-dom";

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <h1>Hello, World!</h1>;
  }
}

const appDiv = document.getElementById("app");
render(<App />, appDiv);
