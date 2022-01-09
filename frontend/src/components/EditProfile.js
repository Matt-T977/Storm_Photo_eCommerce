import React, { useState } from "react";
import {
  Grid,
  TextField,
  Box,
  FormControl,
  Button,
  ButtonGroup,
} from "@mui/material";

export default function EditProfile() {
  const [userProfile, setUserProfile] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    streetAddress: "",
    city: "",
    state: "",
    zipCode: "",
  });

  const handleChange = (event) => {
    event.persist();
    setUserProfile((prevstate) => ({
      ...prevstate,
      [event.target.name]: event.target.value,
    }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ userProfile });
  };
  return (
    <Grid container justifyContent="center">
      {/* <Grid container item md={10} xs={12} margin={3} justifyContent="center"> */}
      <Box
        component="form"
        md={10}
        xs={12}
        margin={3}
        autoComplete="off"
        justifyContent="center"
        onSubmit={handleSubmit}
      >
        <Grid
          item
          sx={{
            "& .MuiTextField-root": { m: 1, width: "25vw" },
          }}
          textAlign="center"
        >
          <TextField
            required
            id="outlined-required"
            name="firstName"
            label="First Name"
            type="text"
            color="primary"
            value={userProfile.firstName}
            onChange={handleChange}
            placeholder="Jane"
          />
          <TextField
            required
            id="outlined-required"
            name="lastName"
            label="Last Name"
            type="text"
            color="secondary"
            value={userProfile.lastName}
            onChange={handleChange}
            placeholder="Smith"
          />
        </Grid>
        <Grid
          item
          sx={{
            "& .MuiTextField-root": { m: 1, width: "51vw" },
          }}
          textAlign="center"
        >
          <TextField
            required
            id="outlined-required"
            name="streetAddress"
            label="Address"
            type="text"
            color="primary"
            value={userProfile.streetAddress}
            onChange={handleChange}
            placeholder="123 Main St"
          />
        </Grid>
        <Grid
          item
          sx={{
            "& .MuiTextField-root": { m: 1, width: "25vw" },
          }}
          textAlign="center"
        >
          <TextField
            required
            id="outlined-required"
            name="city"
            label="City"
            type="text"
            color="primary"
            value={userProfile.city}
            onChange={handleChange}
            placeholder="Moore"
          />
          <TextField
            required
            id="outlined-required"
            name="state"
            label="State"
            type="text"
            color="secondary"
            value={userProfile.state}
            onChange={handleChange}
            placeholder="OK"
          />
        </Grid>
        <Grid item textAlign="center">
          <ButtonGroup size="large">
            <Button variant="contained" color="secondary" type="submit">
              Submit
            </Button>
            <Button variant="contained" color="primary" type="submit">
              Reset
            </Button>
          </ButtonGroup>
        </Grid>
      </Box>
      {/* </Grid> */}
    </Grid>
  );
}
