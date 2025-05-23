import React from "react";
import {
  Button,
  Grid,
  Typography,
  TextField,
  FormHelperText,
  FormControl,
  Radio,
  RadioGroup,
  FormControlLabel,
} from "@mui/material";
import { Link } from "react-router-dom";

const CreateRoomPage = () => {
  const defaultVotes = 2;

  const [guestCanPause, setGuestCanPause] = React.useState(true);
  const [votesToSkip, setVotesToSkip] = React.useState(defaultVotes);

  const handleVotesChange = (e) => {
    setVotesToSkip(e.target.value);
  };
  const handleGuestCanPauseChange = (e) => {
    setGuestCanPause(e.target.value === "true" ? true : false);
  };

  const handleRoomButtonPressed = () => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        votes_to_skip: votesToSkip,
        guest_can_pause: guestCanPause,
      }),
    };
    fetch("/api/create", requestOptions)
      .then((response) => response.json())
      .then((data) => console.log(data));
  };
  return (
    <Grid container spacing={1}>
      <Grid item xs={12} align="center">
        <Typography variant="h4" gutterBottom>
          Create a Room
        </Typography>
      </Grid>

      <Grid item xs={12} align="center">
        <FormControl component={"fieldset"}>
          <FormHelperText>
            <div align="center">Guest Control of Playback State</div>
          </FormHelperText>
          <RadioGroup row defaultValue="true" onChange={handleGuestCanPauseChange}>
            <FormControlLabel
              value="true"
              control={<Radio color="primary" />}
              label="Play/Pause"
              labelPlacement="bottom"
            ></FormControlLabel>

            <FormControlLabel
              value="false"
              control={<Radio color="error" />}
              label="No Control"
              labelPlacement="bottom"
            ></FormControlLabel>
          </RadioGroup>
        </FormControl>
      </Grid>
      <Grid item xs={12} align="center">
        <FormControl>
          <TextField
            required
            type="number"
            onChange={handleVotesChange}
            defaultValue={defaultVotes}
            inputProps={{ min: 1, style: { textAlign: "center" } }}
          />
          <FormHelperText>
            <div align="center">Votes Required to Skip Song</div>
          </FormHelperText>
        </FormControl>
      </Grid>
      <Grid item xs={12} align="center">
        <Button color="primary" variant="contained" onClick={handleRoomButtonPressed}>
          Create Room
        </Button>
      </Grid>
      <Grid>
        <Button color="secondary" variant="contained" to="/" component={Link}>
          Back
        </Button>
      </Grid>
    </Grid>
  );
};

export default CreateRoomPage;
