import React from "react";
import Navbar from "./Navbar";
import { Grid } from "@mui/material";
import "../styles/App.css";
import { Route, Routes } from "react-router";
import Landing from "./Landing";
import PhotoList from "./PhotoList";
import Profile from "./Profile";
// TODO: Add Router *Check*
// TODO: Landing Page *Started*
// TODO: Product Page
// TODO: Product List *Started*
// TODO: Cart
// TODO: Profile Page
// TODO: Payment
// TODO: Auth
// TODO: Account Creation
// TODO: Log In

function App() {
  return (
    <Grid container>
      <Grid item xs={12}>
        <Navbar />
      </Grid>
      <Grid item xs={12}>
        <Routes>
          <Route path="/" exact element={<Landing />} />
          <Route path="/photos" elemeent={<PhotoList />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Grid>
    </Grid>
  );
}

export default App;
