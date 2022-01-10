import { Grid, TextField } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState, useEffect } from "react";

export default function UploadProduct() {
  const [productDetails, setProductDetails] = useState({
    imageURI: "",
    name: "",
    type: "",
    resolution: "",
    description: "",
    price: "",
  });
  const [imageFile, setImageFile] = useState();

  const handleUpload = (event) => {
    event.persist();
    let selected = event.target.files[0];
    if (selected) {
      setImageFile(selected);
    } else {
      setImageFile(null);
    }
  };
  return (
    <Grid container>
      <Box component="form">
        <TextField
          required
          id="outlined-required"
          name="image"
          label="Image File"
          type="file"
          value={imageFile}
          onChange={handleUpload}
        />
      </Box>
    </Grid>
  );
}
