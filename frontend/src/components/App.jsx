import React from "react";
import ReactDOM from "react-dom/client"; // Updated import for React 18
import HomePage from "./HomePage";
import CreateRoomPage from "./CreateRoomPage";
import RoomJoinPage from "./RoomJoinPage";
import RouterPage from "./RouterPage";

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <RouterPage />
      </div>
    );
  }
}

const appDiv = document.getElementById("app");

// Use ReactDOM.createRoot instead of render in React 18
const root = ReactDOM.createRoot(appDiv);
root.render(<App />);
// root.render(<HomePage />);
