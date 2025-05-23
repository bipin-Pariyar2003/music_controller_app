import React from "react";
// import { browserRouter as Router } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import CreateRoomPage from "./CreateRoomPage";
import RoomJoinPage from "./RoomJoinPage";
import HomePage from "./HomePage";
import Room from "./Room";

const RouterPage = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreateRoomPage />} />
        <Route path="/join" element={<RoomJoinPage />} />
        <Route path="/room/:roomCode" element={<Room />} />
      </Routes>
    </Router>
  );
};

export default RouterPage;
