import React from "react";
import { useParams } from "react-router-dom";

const Room = () => {
  const [votesToSkip, setVotesToSkip] = React.useState(2);
  const [guestCanPause, setGuestCanPause] = React.useState(true);
  const [isHost, setIsHost] = React.useState(false);
  const { roomCode } = useParams();

  const getRoomDetails = () => {
    fetch("/api/get-room" + roomCode)
      .then((response) => response.json())
      .then((data) => {
        setGuestCanPause(data.guest_can_pause);
        setVotesToSkip(data.votes_to_skip);
        setIsHost(data.is_host);
      });
  };
  return (
    <div>
      <h3>Room Code:{roomCode}</h3>
      <p>Votes to Skip: {votesToSkip}</p>
      <p>Guest can pause: {guestCanPause.toString()}</p>
      <p>Host : {isHost.toString()}</p>
    </div>
  );
};

export default Room;
