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
    // <form onSubmit={handleSubmit}>
    <Grid container justifyContent="center">
      <Grid item md={10} xs={12} margin={3}>
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1, width: "30ch" },
          }}
          autoComplete="off"
          onSubmit={handleSubmit}
        >
          <div>
            <TextField
              required
              id="outlined-required"
              name="firstName"
              label="First Name"
              type="text"
              color="primary"
              value={userProfile.firstName}
              onChange={handleChange}
              // defaultValue='First Name...'
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
              // defaultValue='Last Name...'
            />
          </div>
          <div>
            <FormControl fullWidth>
              <TextField
                required
                id="outlined-required"
                name="streetAddress"
                label="Address"
                type="text"
                color="primary"
                value={userProfile.streetAddress}
                onChange={handleChange}
                // defaultValue='Street Address...'
              />
            </FormControl>
          </div>
          <div>
            <TextField
              required
              id="outlined-required"
              name="city"
              label="City"
              type="text"
              color="primary"
              value={userProfile.city}
              onChange={handleChange}
              // defaultValue='City...'
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
              // defaultValue='State...'
            />
          </div>
          <ButtonGroup>
            <Button variant="contained" color="secondary" type="submit">
              Submit
            </Button>
            <Button variant="contained" color="primary" type="submit">
              Reset
            </Button>
          </ButtonGroup>
        </Box>
      </Grid>
    </Grid>
    // </form>
  );
}
