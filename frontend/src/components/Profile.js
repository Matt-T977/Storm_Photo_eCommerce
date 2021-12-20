import * as React from 'react';
import { Grid, Paper, TextField, Typography, Box } from '@mui/material';


export default function Profile () {
    return (
        <Grid container justifyContent='center'>
            <Grid md={10} xs={12} margin={3}>
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
                                defaultValue='First Name...'
                            />
                            <TextField
                                required
                                id='outlined-required'
                                label='Last Name'
                                defaultValue='Last Name...'
                            />
                        </div>
                        <div>
                            <TextField
                                required
                                id='outlined-required'
                                label='Address'
                                defaultValue='Street Address...' 
                            />
                        </div>
                        <div>
                            <TextField
                                required
                                id='outlined-required'
                                label='City'
                                defaultValue='City...'
                            />
                            <TextField
                                required
                                id='outlined-required'
                                label='State'
                                defaultValue='State...'
                            />
                        </div>
                    </Box>
                </Paper>
            </Grid>
        </Grid>
    )
}

