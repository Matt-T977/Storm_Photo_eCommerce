import { Grid, Modal, TextField } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState, useEffect } from "react";

export default function UploadProduct() {
  const [open, setOpen] = useState(false);
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
    selected ? setImageFile(selected) : setImageFile(null);
  };
  const handleChange = (event) => {
    event.persist();
    setProductDetails((prevstate) => ({
      ...prevstate,
      [event.target.name]: event.target.value,
    }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ productDetails, imageFile });
  };
  return (
    <Modal>
      <Grid container>
        <Box component="form">
          <Grid item>
            <TextField
              required
              id="outlined-required"
              name="image"
              label="Image File"
              type="file"
              value={imageFile}
              onChange={handleUpload}
            />
          </Grid>
          <Grid item>
            <TextField
              required
              id="outlined-required"
              name="type"
              label="Type"
              type="text"
              color="primary"
              value={productDetails.type}
              onChange={handleChange}
              placeholder="Photo"
            />
          </Grid>
          <Grid item>
            <TextField
              id="outlined"
              name="resolution"
              label="Resolution"
              type="text"
              color="primary"
              value={productDetails.resolution}
              onChange={handleChange}
              placeholder="1920x1080"
            />
          </Grid>
          <Grid item>
            <TextField
              id="outlined"
              name="description"
              label="Description"
              type="text"
              color="primary"
              value={productDetails.description}
              onChange={handleChange}
              placeholder="This is a description of the product."
            />
          </Grid>
          <Grid item>
            <TextField
              id="outlined"
              name="price"
              label="Price"
              type="text"
              color="primary"
              value={productDetails.price}
              onChange={handleChange}
              placeholder="19.99"
            />
          </Grid>
        </Box>
      </Grid>
    </Modal>
  );
}
