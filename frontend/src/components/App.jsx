import React from "react";
import ReactDOM from "react-dom/client"; // Updated import for React 18
import HomePage from "./HomePage";
import CreateRoomPage from "./CreateRoomPage";
import RoomJoinPage from "./RoomJoinPage";

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Hello, World! from {this.props.name}</h1>

        <HomePage />
        <CreateRoomPage />
        <RoomJoinPage />
      </div>
    );
  }
}

const appDiv = document.getElementById("app");

// Use ReactDOM.createRoot instead of render in React 18
const root = ReactDOM.createRoot(appDiv);
root.render(<App name="Bipin" />);
// root.render(<HomePage />);
