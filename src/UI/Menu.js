import React, { useState } from 'react';
import './Menu.css'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
function  Menu() {

    return (
        <div>
           <div className='navbar'> <p className='moretext'>More</p></div>
            <div className='menubuttonmore'>
                <Grid container>
                    <Grid item xs={4}>
                <img
                    className='imgmenu'
                    src="https://img.icons8.com/plasticine/2x/qr-code.png"
                />
                    </Grid>
                    <Grid item xs={8}>
                <p className='textmenu'>Qr code menu</p>
                    </Grid>
                </Grid>
            </div>
            <div className='menubuttonmore'>
                <Grid container>
                    <Grid item xs={4}>
                        <img
                            className='imgmenu'
                            src="https://img.icons8.com/cute-clipart/64/000000/cutting-coupon.png"
                        />

                    </Grid>
                    <Grid item xs={8}>
                        <p className='textmenu'>Coupon</p>
                    </Grid>
                </Grid>
            </div>
            <div className='menubuttonmore'>
                <Grid container>
                    <Grid item xs={4}>
                        <img
                            className='imgmenu'
                            src="https://img.icons8.com/cotton/2x/card-in-use.png"
                        />
                    </Grid>
                    <Grid item xs={8}>
                        <p className='textmenu'>Payment</p>
                    </Grid>
                </Grid>
            </div>
            <div className='menubuttonmore'>
                <Grid container>
                    <Grid item xs={4}>
                        <img
                            className='imgmenu'
                            src="https://img.icons8.com/dusk/64/000000/online-store.png"
                        />
                    </Grid>
                    <Grid item xs={8}>
                        <p className='textmenu'>Sprout store</p>
                    </Grid>
                </Grid>
            </div>
            <div className='menubuttonmore'>
                <Grid container>
                    <Grid item xs={4}>
                        <img
                            className='imgmenu'
                            src="https://img.icons8.com/dusk/64/000000/ticket.png"
                        />
                    </Grid>
                    <Grid item xs={8}>
                        <p className='textmenu'>Booking</p>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
}
export default Menu;
