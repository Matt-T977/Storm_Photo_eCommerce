import React, { useState, useEffect } from "react";
import { Grid, Paper, TextField, Box, FormControl } from "@mui/material";

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
  const handleSubmit = {};
  return (
    <Grid container justifyContent="center">
      <Grid md={10} xs={12} margin={3}>
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1, width: "25ch" },
          }}
          autoComplete="off"
        >
          <div>
            <TextField
              required
              id="outlined-required"
              name="firstName"
              label="First Name"
              type="text"
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
              value={userProfile.city}
              onChange={handleChange}
              // defaultValue='City...'
            />
            <TextField
              required
              id="outlined-required"
              label="State"
              // defaultValue='State...'
            />
          </div>
        </Box>
      </Grid>
    </Grid>
  );
}
