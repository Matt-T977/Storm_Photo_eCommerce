import React, { useState, useEffect } from "react";
import {
  Card,
  CardMedia,
  Grid,
  Typography,
  Paper,
  IconButton,
  CardContent,
} from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { ref } from "firebase/storage";
import UploadProduct from "./UploadProduct";

export default function PhotoList(props) {
  const addProduct = () => {
    <UploadProduct />;
  };
  return (
    <Grid container justifyContent="center">
      <Grid item md={10} xs={12}>
        <IconButton onClick={addProduct}>
          <AddCircleOutlineIcon color="secondary" />
        </IconButton>
        <Card>
          <CardContent>
            <Typography variant="h4" component="h2">
              This is the photo list.
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}
