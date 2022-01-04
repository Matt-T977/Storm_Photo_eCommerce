import React, { useState, useEffect } from "react";
import { Grid, Paper, Typography } from "@mui/material";

export default function Profile() {
  const [userProfile, setUserProfile] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    streetAddress: "",
    city: "",
    state: "",
    zipCode: "",
  });

  const handleSubmit = {};
  return (
    <Grid container justifyContent="center">
      <Grid md={10} xs={12} margin={3}>
        <Paper>
          <Typography variant="h3" align="center" padding={1}>
            Welcome UserName
          </Typography>
        </Paper>
      </Grid>
    </Grid>
  );
}
