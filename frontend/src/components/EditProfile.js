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

  const handleChange = {};
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
              label="First Name"
              type="text"
              value={userProfile.firstName}
              onChange={handleChange}
              // defaultValue='First Name...'
            />
            <TextField
              required
              id="outlined-required"
              label="Last Name"
              // defaultValue='Last Name...'
            />
          </div>
          <div>
            <FormControl fullWidth>
              <TextField
                required
                id="outlined-required"
                label="Address"
                // defaultValue='Street Address...'
              />
            </FormControl>
          </div>
          <div>
            <TextField
              required
              id="outlined-required"
              label="City"
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
