import React from 'react';
import Navbar from './Navbar';
import { Grid } from '@mui/material'
import '../styles/App.css';
// TODO: Add Router
// TODO: Landing Page
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
        Hello World
      </Grid>
    </Grid>
  );
}

export default App;
