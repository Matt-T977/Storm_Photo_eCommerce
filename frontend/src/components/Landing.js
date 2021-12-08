import { Grid, Paper, Typography } from '@mui/material'
import React, { useState, useEffect } from 'react'


export default function Landing () {
    return (
        <Grid container justifyContent='center'>
            <Grid xs={12} align='center' marginBottom={3}>
                Photo Goes here
            </Grid>
            <Grid md={10} xs={12} align='center' marginBottom={3}>
                <Paper elevation={3}>
                    <Typography padding={3}>
                        About Section
                    </Typography>
                </Paper>
            </Grid>
            <Grid md={10} xs={12} align='center'>
                Blog Section
            </Grid>
        </Grid>
    )
}
