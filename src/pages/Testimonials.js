import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import { Card, Container, Button } from '@material-ui/core';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';

import FormatQuoteIcon from '@material-ui/icons/FormatQuote';

import Image from 'material-ui-image'


import angiesListReview from '../images/ReviewusAngiesList.png'

const useStyles = makeStyles((theme) => ({
    root: {
    },
    card: {
        maxWidth: 345,
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: '#29a036',
    },
    angieButton: {
        backgroundColor: '#fff',
        borderRadius: '20px',

    },
    angieContainer: {
        borderRadius: '20px',
        maxWidth: 180,
        paddingTop: '1rem',
        paddingBottom: '1rem',
        
    },
    angieImg: {
        maxWidth: 150,
        

    },
    cardContainer: {
        display: 'flex',
        margin: '0rem',
        padding: '1rem',
        justifyContent: 'center',
        paddingBottom:'1rem',
        [theme.breakpoints.down('sm')]: {
            flexWrap: 'wrap'
        },
        [theme.breakpoints.up('md')]: {
            flexWrap: 'nowrap'
        }
    },

}));

export default function Testimonials() {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Container className={classes.root}>
            <Container className={classes.angieContainer}>
                <Button href="https://member.angieslist.com/member/reviews/edit?serviceProviderId=24375094&cid=PRL.E014.P026.20180302" className={classes.angieButton}>
                    <img src={angiesListReview} className={classes.angieImg} />
                </Button>
            </Container>
            <Container className={classes.cardContainer}>
                <Card className={classes.card}>
                    <CardHeader
                        avatar={
                            <Avatar aria-label="angiesList" className={classes.avatar}>
                                A
            </Avatar>
                        }

                        title="Andrew Graves"
                        subheader="5/27/2020"
                    />

                    <CardContent>
                        <Typography variant="body2" color="textSecondary" component="p">
                            I have worked for them for 4 years whenever I need gutters and they
                            always do a fantastic job. I highly recommend them.
          </Typography>
                    </CardContent>
                    <CardActions disableSpacing>

                    </CardActions>

                </Card>
                <Card className={classes.card}>
                    <CardHeader
                        avatar={
                            <Avatar aria-label="recipe" className={classes.avatar}>
                                A
            </Avatar>
                        }

                        title="Christian Lind"
                        subheader="5/26/2020"
                    />

                    <CardContent>
                        <Typography variant="body2" color="textSecondary" component="p">
                        They were very reasonable. They came in and did
                        the job. Everything seems to work out and were
                        happy with what they did.
          </Typography>
                    </CardContent>
                    <CardActions disableSpacing>

                    </CardActions>

                </Card>
                <Card className={classes.card}>
                    <CardHeader
                        avatar={
                            <Avatar aria-label="recipe" className={classes.avatar}>
                                A
            </Avatar>
                        }

                        title="Donalda Watson-W"
                        subheader="5/26/2020"
                    />

                    <CardContent>
                        <Typography variant="body2" color="textSecondary" component="p">
                        Great. Work was performed quickly and
                        professionally.
          </Typography>
                    </CardContent>
                    <CardActions disableSpacing>

                    </CardActions>

                </Card>
            </Container>
        </Container>
    );
}