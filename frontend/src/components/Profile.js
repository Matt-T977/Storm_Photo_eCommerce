import * as React from 'react';
import { Grid, Paper, TextField, Typography, Box, FormControl } from '@mui/material';
import { width } from '@mui/system';


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
                                // defaultValue='First Name...'
                            />
                            <TextField
                                required
                                id='outlined-required'
                                label='Last Name'
                                // defaultValue='Last Name...'
                            />
                        </div>
                        <div>
                            <FormControl
                                fullWidth
                            >
                                <TextField
                                    required
                                    id='outlined-required'
                                    label='Address'
                                    // defaultValue='Street Address...' 
                                />
                            </FormControl>
                        </div>
                        <div>
                            <TextField
                                required
                                id='outlined-required'
                                label='City'
                                // defaultValue='City...'
                            />
                            <TextField
                                required
                                id='outlined-required'
                                label='State'
                                // defaultValue='State...'
                            />
                        </div>
                    </Box>
                </Paper>
            </Grid>
        </Grid>
    )
}

