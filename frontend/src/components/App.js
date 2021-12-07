import React from 'react';
import Navbar from './Navbar';
import { Grid } from '@mui/material'
import '../styles/App.css';


function App() {
  return (
    <Grid container>
      <Grid item xs={12}>
        <Navbar />
      </Grid>
      <Grid item xs={8}>
        Hello World
      </Grid>
    </Grid>
  );
}

export default App;
