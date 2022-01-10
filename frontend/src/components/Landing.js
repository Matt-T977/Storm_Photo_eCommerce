import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import { maxWidth } from "@mui/system";
import React, { useState, useEffect } from "react";
import LandingImage from "../img/LandingImage.jpg";

export default function Landing() {
  return (
    <Grid container justifyContent="center">
      {/* <Grid xs={12} align='center' marginBottom={3} >
                <img src={LandingImage} alt='Storm Header'/>
            </Grid> */}
      <Grid item md={10} xs={12} margin={1}>
        <Card elevation={3}>
          <CardMedia
            component="img"
            height="720"
            image={LandingImage}
            alt="example"
          />
          <CardContent>
            <Typography
              variant="h4"
              component="h1"
              paddingLeft={3}
              paddingTop={3}
            >
              About This Site
            </Typography>
            <Typography variant="subtitle1" padding={3}>
              This is the landing page of Shear Beauty, a site for my storm
              photography to share with the rest of you!
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item md={10} xs={12} margin={1}>
        <Paper elevation={3}>
          <Typography variant="h4" component="h2" padding={3}>
            Blog Section
          </Typography>
          <Card sx={{ maxWidth: 375 }}>
            <CardMedia
              component="img"
              height="140"
              image={LandingImage}
              alt="example"
            />
            <CardContent>
              <Typography variant="h5" component="h5">
                Random Title
              </Typography>
              <Typography>
                Here is some example text for this blog post.
              </Typography>
            </CardContent>
          </Card>
        </Paper>
      </Grid>
    </Grid>
  );
}
