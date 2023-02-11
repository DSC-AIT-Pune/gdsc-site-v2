import React from 'react';
import SocialCard from '../components/SocialCard';
import { Grid, Box } from '@mui/material'
import contact from '../assets/contact.jpg'
import '../styles/Contact.css'
import Contactdata from '../data/Contactdata';

const Contact = () => {

    var SocialCardGrid = Contactdata.map((site, ind) => {
        return (
            <Grid item lg={4} md={4} xs={6} className="item">
                <SocialCard item
                    id={ind}
                    {...site}
                />
            </Grid>
        )
    })

    return (
        <Box className="contactSection">
            <Grid container className="contactGrid" spacing={2} >
                <Grid item lg={6} md={12} xs={12} className="leftCol">
                    <img src={contact} className="bannerImage" style={{ height: '480px' }} />
                </Grid>
                <Grid item lg={6} md={12} xs={12} className="rightCol">
                    {SocialCardGrid}
                </Grid>
            </Grid>
        </Box>
    )
}

export default Contact