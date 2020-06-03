import React from 'react';
import { Switch, Button, ButtonGroup, Divider, Container, Box } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Slide from '@material-ui/core/Slide';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

import FormatQuoteIcon from '@material-ui/icons/FormatQuote';

import Image from 'material-ui-image'


import angiesListReview from '../images/ReviewusAngiesList.png'

const useStyles = makeStyles((theme) => ({
    root: {
    },
    wrapper: {
        padding: '1.2rem',
        margin: '0rem',
        padding:'0rem',
        maxWidth: 'auto',
        display: 'flex',
        [theme.breakpoints.down('md')]: {
            flexDirection: 'column',
        
        },
    },
    paper: {
        zIndex: 1,
        borderRadius: '10px',
        margin: '20px 0',
        display: 'block',
        padding: 'auto',
        minHeight:'25rem',
        [theme.breakpoints.down('md')]:{
            minWidth:'30rem'

        },
        [theme.breakpoints.up('lg')]:{
                    minWidth:'20rem',
                    margin:'.5rem'
        }
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
        minWidth: '150px'


    },
    roundBtn: {
        backgroundColor: '#29a036',
        margin: '.5rem',
        padding: '0.5rem',
        borderRadius: '100%',
        display: 'inlineBlock',
        color: '#fff',
        fontSize: '1.4rem',
        fontWeight: '600',
        lineHeight: '50px',
        verticalAlign: 'baseline',
        minWidth:'10px',


    },
    testimonialQuote: {
        padding: '2rem',
        margin: '1rem',
        width: '80%',
        textOverflow: 'ellipsis',
        display: 'block',
        position: 'relative',
        textAlign: 'right',
        minHeight:'14rem'

    },
    testimonialsContainer: {
        display: 'flex',
        padding: '2rem',
        margin: '2rem',
        [theme.breakpoints.down('md')]: {
            flexDirection: 'column',
        },


    },
    title: {
        display: 'inline',
        margin: '.1rem',

    },
    testimonialTitle: {
        maxWidth: '20rem',
        wordWrap: 'ellipsis'

    },
    testimonialBottomBtn: {
        display: 'inline',
        padding:'0rem',
        margin:'0rem',
        position:'relative',
        float:'right',
        right:'10px',
        bottom:'2px'

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
                            <br />
                            <Typography className={classes.testimonialTitle}>
                                <b className={classes.roundBtn}>A</b>
                                <em className={classes.title}>5/27/2020 - Andrew Graves</em>
                            </Typography>
                            <Typography className={classes.testimonialQuote}>
                                <FormatQuoteIcon />
                                <br />
                                I have worked for them for 4 years whenever I need gutters and they
                                always do a fantastic job. I highly recommend them.
                            </Typography>
                            <br/>
                            <Divider variant='middle' />
                            <br/>
                                <Button className={classes.testimonialBottomBtn} href="https://member.angieslist.com/member/reviews/edit?serviceProviderId=24375094&cid=PRL.E014.P026.20180302"> Read More ></Button>

                        </Paper>

                    </Slide>
                
                    <Slide direction="left" in={checked} mountOnEnter unmountOnExit>
                        <Paper elevation={2} className={classes.paper}>
                            <br />
                            <Typography className={classes.testimonialTitle}>
                                <b className={classes.roundBtn}>A</b>
                                <em className={classes.title}>5/26/2020 - Donalda Watson-W.
                                </em>
                            </Typography>
                            <Typography className={classes.testimonialQuote}>
                                <FormatQuoteIcon />
                                <br />
                                Great. Work was performed quickly and professionally.

                            </Typography>
                            <br/>
                            <Divider variant='middle' />
                            <br/>
                                <Button className={classes.testimonialBottomBtn} href="https://member.angieslist.com/member/reviews/edit?serviceProviderId=24375094&cid=PRL.E014.P026.20180302"> Read More ></Button>

                        </Paper>

                    </Slide>
            
                    <Slide direction="left" in={checked} mountOnEnter unmountOnExit>
                        <Paper elevation={2} className={classes.paper}>
                            <br />
                            <Typography className={classes.testimonialTitle}>
                                <b className={classes.roundBtn}>A</b>
                                <em className={classes.title}>5/26/2020 - Christian Lind </em>
                            </Typography>
                            <Typography className={classes.testimonialQuote}>
                                <FormatQuoteIcon />
                                <br />
                                They were very reasonable. They came in and did
                                the job. Everything seems to work out and were
                                happy with what they did.
                            </Typography>
                            <br/>
                            <Divider variant='middle' />
                            <br/>
                                <Button className={classes.testimonialBottomBtn} href="https://member.angieslist.com/member/reviews/edit?serviceProviderId=24375094&cid=PRL.E014.P026.20180302"> Read More ></Button>

                        </Paper>

                    </Slide>
                </div>

            </Box>

        </div>
    );
}
