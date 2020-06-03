import React from 'react';
import { Switch, Button, ButtonGroup, Divider, Container, Box } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Slide from '@material-ui/core/Slide';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

import Image from 'material-ui-image'


import angiesListReview from '../images/ReviewusAngiesList.png'

const useStyles = makeStyles((theme) => ({
    root: {
    },
    wrapper: {
        width: 'auto' + theme.spacing(2),
    },
    paper: {
        zIndex: 1,
        borderRadius: '10px',
        margin: '20px 0',
        display: 'block',
        padding: 'auto',
    },
    svg: {
        width: '100',
        height: '100',
    },

    img: {
        height: '190px',
        margin: 'auto',
        padding: 'auto',

    },
    imgBtn: {
        alignSelf: 'center',


    },
    roundBtn: {
        backgroundColor: '#29a036',
        height: '2.8rem',
        borderRadius: '50%',
        display: 'inlineBlock',
        color: '#fff',
        fontSize: '1.6rem',
        fontWeight: 'bold',
    },
    testimonialQuote: {
        alignItems: 'center',
        paddingTop: '0rem',
        padding: '0rem',
        margin: '1rem',
        width: '100%'
    },
    testimonialsContainer: {
        display: 'flex',
        padding: '2rem',
        margin: '2rem',
        flexDirection: 'row',

    }
}));

export default function Testimonials() {
    const classes = useStyles();
    const [checked, setChecked] = React.useState(true);

    const handleChange = () => {
        setChecked((prev) => !prev);
    };

    return (
        <div className={classes.root}>
            <Box className={classes.testimonialsContainer}>

                <Button className={classes.imgBtn} href="https://member.angieslist.com/member/reviews/edit?serviceProviderId=24375094&cid=PRL.E014.P026.20180302">
                    <img className={classes.img} src={angiesListReview} />

                </Button>
                <Divider orientation="vertical" />

                <div className={classes.wrapper}>


                    <Slide direction="left" in={checked} mountOnEnter unmountOnExit>
                        <Paper elevation={2} className={classes.paper}>

                            <Typography>
                                <Button className={classes.roundBtn}>A</Button> <em>5/27/2020 - Andrew Graves</em>
                            </Typography>
                            <Typography className={classes.testimonialQuote}>
                                I have worked for them for 4 years whenever I need gutters and they
                                always do a fantastic job. I highly recommend them.
                      </Typography>
                        </Paper>

                    </Slide>
                    <Slide direction="left" in={checked} mountOnEnter unmountOnExit>
                        <Paper elevation={2} className={classes.paper}>

                            <Typography>
                                <Button className={classes.roundBtn}>A</Button> <em>5/27/2020 - Andrew Graves</em>
                            </Typography>
                            <Typography className={classes.testimonialQuote}>
                                I have worked for them for 4 years whenever I need gutters and they
                                always do a fantastic job. I highly recommend them.
                  </Typography>
                        </Paper>

                    </Slide>
                    <Slide direction="left" in={checked} mountOnEnter unmountOnExit>
                        <Paper elevation={2} className={classes.paper}>

                            <Typography>
                                <Button className={classes.roundBtn}>A</Button> <em>5/27/2020 - Andrew Graves</em>
                            </Typography>
                            <Typography className={classes.testimonialQuote}>
                                I have worked for them for 4 years whenever I need gutters and they
                                always do a fantastic job. I highly recommend them.
              </Typography>
                        </Paper>

                    </Slide>

              
            </div>
            </Box>

        </div>
    );
}
