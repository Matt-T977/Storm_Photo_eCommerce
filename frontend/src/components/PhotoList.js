import { Card, CardMedia, Grid, Typography } from "@mui/material";
import { ref } from "firebase/storage";
import React, { useState, useEffect } from "react";

export default function PhotoList(props) {
  const productImages = ref(props.storage, "Storm_DemoONLY");

  return (
    <Grid container>
      <Typography>This is the photo list.</Typography>
    </Grid>
  );
}
