import * as React from 'react';
import { Grid, Paper, TextField, Typography, Box } from '@mui/material';


export default function Profile () {
    return (
        <Grid container>
            <Grid xs={12}>
                <Paper>
                    <Box
                        component='form'
                        sx={{
                            '& .MuiTextField-root': { m: 1, width: '25ch' },
                          }}
                        autoComplete="off"
                        >
                        <div>
                            <TextField
                                required
                                id='outlined-required'
                                label='First Name'
                                defaultValue='First Name'
                            />
                            <TextField
                                required
                                id='outlined-required'
                                label='Last Name'
                                defaultValue='Last Name'
                            />
                        </div>
                    </Box>
                </Paper>
            </Grid>
        </Grid>
    )
}

