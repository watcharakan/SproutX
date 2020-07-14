import React, { useState } from 'react';
import './Home.css'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
function  Home() {

    return (
        <div>
        <div className='card'>
            <div className='box'>
                <h1 className='sproutX'>Sprout X</h1>
                <h1 className='tongtongse'>ครัวบ้านสวน</h1>
                <div className='boxsystem'>
                    <h1 className='system'>SYSTEM</h1>
                    <Grid container spacing={3} >
                        <Grid item xs={4}>
                            <div  className='buttonmenu' >POS</div>
                        </Grid>
                        <Grid item xs={4}>
                            <div  className='buttonmenu' >Delivery</div>
                        </Grid>
                        <Grid item xs={4}>
                            <div  className='buttonmenu'>Marketing</div>
                        </Grid>
                    </Grid >
                    <button className='btnmore'>
                        More
                    </button>
                </div>
            </div>

        </div>
        </div>
    );
}
export default Home;
