import React from "react";
import { Grid, Paper, Typography } from "@mui/material";
import EditProfile from "./EditProfile";

export default function Profile() {
  return (
    <Grid container justifyContent="center">
      <Grid md={10} xs={12} margin={3}>
        <Paper>
          <Typography variant="h3" align="center" padding={1}>
            Welcome UserName
          </Typography>
        </Paper>
      </Grid>
      <Grid item md={10} xs={12} margin={3}>
        <Paper>
          <Typography variant="h5" align="center" padding={1}>
            Example of a profile
          </Typography>
          <EditProfile />
        </Paper>
      </Grid>
    </Grid>
  );
}
