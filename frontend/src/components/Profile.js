import * as React from 'react';
import { Grid, Paper, TextField, Typography } from '@mui/material';


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
                                
                            />
                        </div>
                    </Box>
                </Paper>
            </Grid>
        </Grid>
    )
}

