import React, { useState, useEffect } from "react";
import {
  Card,
  CardMedia,
  Grid,
  Typography,
  Paper,
  CardContent,
} from "@mui/material";
import { ref } from "firebase/storage";
import UploadProduct from "./UploadProduct";

export default function PhotoList(props) {
  return (
    <Grid container justifyContent="center">
      <Grid item md={10} xs={12} marginX="auto">
        <UploadProduct />
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
