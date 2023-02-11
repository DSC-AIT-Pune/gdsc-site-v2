import React, { useState } from 'react';
import '../styles/components/banner.css';
import { Grid } from "@mui/material";

const Banner = (props) => {
    return (
        <section className="bannerSection">
            <Grid container className="bannerGrid">
                <Grid item lg={6} md={12} xs={12} className="bannerImageGrid">
                    <img src={props.image} />
                </Grid>
                <Grid item lg={6} md={12} xs={12} className="bannerContentGrid">
                    <div className="bannerHeading" >
                        <h1 >{props.heading}</h1>
                    </div>
                    <div className="bannerSubText" >
                        <span>{props.subtext}</span>
                    </div>
                </Grid>
            </Grid>
        </section>
    );
};

export default Banner;