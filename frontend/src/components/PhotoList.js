import React, { useState, useEffect } from "react";
import { Card, CardMedia, Grid, Typography, Paper } from "@mui/material";
import { ref } from "firebase/storage";

export default function PhotoList(props) {
  return (
    <Grid container justifyContent="center">
      <Grid item md={10} xs={12}>
        <Paper>
          <Typography variant="h4" component="h2">
            This is the photo list.
          </Typography>
        </Paper>
      </Grid>
    </Grid>
  );
}
