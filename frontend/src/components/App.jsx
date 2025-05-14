import React from "react";
import ReactDOM from "react-dom/client"; // Updated import for React 18

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <h1>Hello, World!</h1>;
  }
}

const appDiv = document.getElementById("app");

// Use ReactDOM.createRoot instead of render in React 18
const root = ReactDOM.createRoot(appDiv);
root.render(<App />);
