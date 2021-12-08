import React from 'react';
import Navbar from './Navbar';
import { Grid } from '@mui/material'
import '../styles/App.css';
import { Route, Routes } from 'react-router';
import Landing from './Landing'
// TODO: Add Router *Check*
// TODO: Landing Page *Started*
// TODO: Product Page
// TODO: Product List
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
          <Route path = '/' exact element = {<Landing />} />
        </Routes>
      </Grid>
    </Grid>
  );
}

export default App;
