import React, { useState } from "react";
import { Grid, TextField, Box, Button, ButtonGroup } from "@mui/material";

export default function EditProfile() {
  const [userProfile, setUserProfile] = useState({
    firstName: "",
    lastName: "",
    email: "",
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
    <Grid container md={10} xs={12} marginX="auto">
      <Box
        item
        component="form"
        margin={3}
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <Grid
          item
          sx={{
            "& .MuiTextField-root": { m: 1, width: "30vw" },
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
            "& .MuiTextField-root": { m: 1, width: "64vw" },
          }}
          textAlign="center"
        >
          <TextField
            required
            id="outlined-required"
            name="email"
            label="Email"
            type="text"
            color="primary"
            value={userProfile.email}
            onChange={handleChange}
            placeholder="jane.smith@something.com"
          />
        </Grid>
        <Grid
          item
          sx={{
            "& .MuiTextField-root": { m: 1, width: "64vw" },
          }}
          textAlign="center"
        >
          <TextField
            required
            id="outlined-required"
            name="phoneNumber"
            label="Phone Number"
            type="text"
            color="secondary"
            value={userProfile.phoneNumber}
            onChange={handleChange}
            placeholder="(555) 555-5555"
          />
        </Grid>
        <Grid
          item
          sx={{
            "& .MuiTextField-root": { m: 1, width: "64vw" },
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
            "& .MuiTextField-root": { m: 1, width: "64vw" },
          }}
          textAlign="center"
        >
          <TextField
            required
            id="outlined-required"
            name="city"
            label="City"
            type="text"
            color="secondary"
            value={userProfile.city}
            onChange={handleChange}
            placeholder="Moore"
          />
        </Grid>
        <Grid
          item
          sx={{
            "& .MuiTextField-root": { m: 1, width: "30vw" },
          }}
          textAlign="center"
        >
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
          <TextField
            required
            id="outlined-required"
            name="zipCode"
            label="Zipcode"
            type="text"
            color="primary"
            value={userProfile.zipCode}
            onChange={handleChange}
            placeholder="12345"
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
    </Grid>
  );
}
