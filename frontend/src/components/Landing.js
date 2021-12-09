import { Card, Grid, Paper, Typography } from '@mui/material'
import React, { useState, useEffect } from 'react'
import LandingImage from '../img/LandingImage.jpg'


export default function Landing () {
    return (
        <Grid container justifyContent='center'>
            <Grid xs={12} align='center' marginBottom={3} >
                <img src={LandingImage} alt='Storm Header'/>
            </Grid>
            <Grid md={10} xs={12} marginBottom={3}>
                <Paper elevation={3}>
                    <Typography padding={3}>
                        About Section
                        This the landing page of Shear Beauty
                    </Typography>
                </Paper>
            </Grid>
            <Grid md={10} xs={12}>
                <Paper elevation={3}>
                    <Typography padding={3}>
                        Blog Section
                        <Card>
                            Random 1
                        </Card>
                        <Card>
                            Random 2
                        </Card>
                        <Card>
                            Random 3
                        </Card>
                    </Typography>
                </Paper>
            </Grid>
        </Grid>
    )
}
