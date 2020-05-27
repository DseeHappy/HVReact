import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import ReactCompareImage from 'react-compare-image'
import before from "../images/a (10).jpg"
import after from "../images/a (11).jpg"
import {
    AppBar, Card, CardActions, CardContent, Drawer, Toolbar, List, Typography, Divider,
    IconButton, CssBaseline, Button, Stepper, Step, StepLabel, Grid, ButtonBase, CardActionArea,
    CardMedia, CardHeader
} from "@material-ui/core"
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';



import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import EventAvailableIcon from '@material-ui/icons/EventAvailable';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';

import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';

import guttersBeauty from "../images/gutters_beauty.jpg"
import guttersDamage from "../images/storm-dmg-house.gif"
import gutterGuard from "../images/leafblaster.jpg"
import logo from "../images/hvlogo.png"

import Estimate from "../pages/Estimate"

const drawerWidth = 240;

const centerContent = makeStyles({
    root: {
        maxHeight: 1920,
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    Paper: {

    },

});
const mainCards = makeStyles(({ breakpoints, spacing }) => ({
    root: {
        margin: 'auto',
        borderRadius: spacing(2), // 16px
        transition: '0.3s',
        boxShadow: '0px 14px 80px rgba(34, 35, 58, 0.2)',
        position: 'relative',
        maxWidth: 500,
        marginLeft: 'auto',
        overflow: 'initial',
        background: '#ffffff',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingBottom: spacing(2),
        [breakpoints.up('md')]: {
            flexDirection: 'row',
            paddingTop: spacing(2),
        },
    },
    media: {
        width: '88%',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: spacing(-3),
        height: 0,
        paddingBottom: '48%',
        borderRadius: spacing(2),
        backgroundColor: '#fff',
        position: 'relative',
        [breakpoints.up('md')]: {
            width: '100%',
            marginLeft: spacing(-3),
            marginTop: 0,
            transform: 'translateX(-8px)',
        },
        '&:after': {
            content: '" "',
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundImage: 'linear-gradient(147deg, #fe8a39 0%, #fd3838 74%)',
            borderRadius: spacing(2), // 16
            opacity: 0.5,
        },
    },
    content: {
        padding: 24,
    },
    cta: {
        marginTop: 24,
        textTransform: 'initial',
    },
}));
const estimateStepper = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    button: {
        marginRight: theme.spacing(1),
    },
    backButton: {
        marginRight: theme.spacing(1),
    },
    completed: {
        display: 'inline-block',
    },
    instructions: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
    },
}));
const cardstyles = makeStyles({
    root: {
        maxHeight: 600,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});
const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexGrow: 1,
        width: '100%',

    },
    backButton: {
        marginRight: theme.spacing(1),
    },
    instructions: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
    },
    appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    title: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: -drawerWidth,
    },
    contentShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
    },
}));
const threeImageRow = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        minWidth: 300,
        width: '100%',
    },
    image: {
        position: 'relative',
        height: 200,
        [theme.breakpoints.down('xs')]: {
            width: '100% !important', // Overrides inline-style
            height: 100,
        },
        '&:hover, &$focusVisible': {
            zIndex: 1,
            '& $imageBackdrop': {
                opacity: 0.15,
            },
            '& $imageMarked': {
                opacity: 0,
            },
            '& $imageTitle': {
                border: '4px solid currentColor',
            },
        },
    },
    focusVisible: {},
    imageButton: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: theme.palette.common.white,
    },
    imageSrc: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundSize: 'cover',
        backgroundPosition: 'center 40%',
    },
    imageBackdrop: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundColor: theme.palette.common.black,
        opacity: 0.4,
        transition: theme.transitions.create('opacity'),
    },
    imageTitle: {
        position: 'relative',
        padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) + 6}px`,
    },
    imageMarked: {
        height: 3,
        width: 18,
        backgroundColor: theme.palette.common.white,
        position: 'absolute',
        bottom: -2,
        left: 'calc(50% - 9px)',
        transition: theme.transitions.create('opacity'),
    },
}));

function getSteps() {
    return ['Schedule Your Appointment', 'Receive Your Free Estimate', 'Finished, We\'ll Get The Work Done'];
}

function getStepContent(stepIndex) {
    switch (stepIndex) {
        case 0:
            return 'For Your Free Inspection';
        case 1:
            return 'Receive Your Detailed Proposal';
        case 2:
            return 'We\'ll Get The Work Done';
        default:
            return 'Unknown stepIndex';
    }
}
const useColorlibStepIconStyles = makeStyles({
    root: {
        backgroundColor: '#ccc',
        zIndex: 1,
        color: '#fff',
        width: 50,
        height: 50,
        display: 'flex',
        borderRadius: '50%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    active: {
        backgroundImage:
            'linear-gradient( 136deg, rgb(233,400,808) 0%, rgb(233,64,87) 50%, rgb(138,350,800) 100%)',
        boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
    },
    completed: {
        backgroundImage:
            'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
    },
});

function ColorlibStepIcon(props) {
    const classes = useColorlibStepIconStyles();
    const { active, completed } = props;

    const icons = {
        1: <EventAvailableIcon />,
        2: <MonetizationOnIcon />,
        3: <VerifiedUserIcon />,
    };

    return (
        <div
            className={clsx(classes.root, {
                [classes.active]: active,
                [classes.completed]: completed,
            })}
        >
            {icons[String(props.icon)]}
        </div>
    );
}


const images = [
    {
        url: '../images/waterfall_over_gutters.png',
        title: 'Residential',
        width: '40%',
    },
    {
        url: '../images/a (10).jpg',
        title: 'Partner With Us',
        width: '30%',
    },
    {
        url: { gutterGuard },
        title: 'Commercial',
        width: '30%',
    },
];

function Home() {
    const classes = useStyles();
    const threeImage = threeImageRow();
    const card = cardstyles();
    const EstimateStepping = estimateStepper();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const [activeStep, setActiveStep] = React.useState(0);
    const steps = getSteps();

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };


    return (
        <div>
            <CssBaseline />

            <ReactCompareImage leftImage={before} leftImageLabel="Before" rightImageLabel="After" rightImage={after} />;

            <Paper className={centerContent.root} elevation={0} >
                <Paper elevation={3}>
                    <Container maxWidth="md">
                        <Typography variant="h3" align="center" component="h1">
                            At High View we pride ourselves in high quality workmanship
                              </Typography>
                        <hr />

                        <Typography color="primary" variant="body2" align="center" component="h2">
                            EVERYTHING INSTALLED BY US IS READY TO STAND THE WEATHER HERE IN COLORADO
                              </Typography>
                    </Container>
                </Paper>
            </Paper>


            <br />
            <Divider gutterBottom variant="middle" />
            <br />


            <Paper>
                <Container maxWidth="lg">
                    <Grid container alignItems="center" spacing={3}>
                        <Grid item container alignItems="center" xs={12} md={4}>
                            <Card className={card.root}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        alt="Beautiful gutter installation"
                                        height="140"
                                        image={guttersBeauty}
                                        title="Beautiful gutter installation"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            Seamless Gutters

           </Typography>
                                        <Typography gutterBottom variant="body2" color="textSecondary" align="center" component="h4">
                                            Professional installation of Seamless Gutters providing you with greater protection against leaks.
             </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            We provide the option between strip miters, box miters or customer corners. Providing you the option between the strength of mitered corners or the beauty of custom corners.

           </Typography>
                                        <Divider variant="middle" />

                                        <Typography variant="body2" color="textSecondary" component="p">
                                            With all our gutter installation, we offer color matching from a wide selection of manufacturers.
           </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions>
                                    <Button size="small" color="primary">
                                        Share
         </Button>
                                    <Button size="small" color="primary">
                                        Learn More
         </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                        <Grid item container xs={12} md={4}>
                            <Card className={card.root}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        alt="LeafBlaster Brand Gutter Guard"
                                        height="140"
                                        image={gutterGuard}
                                        title="LeafBlaster Brand Gutter Guard"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" align="center" component="h2">
                                            Gutter Guards

       </Typography>
                                        <Typography variant="body2" color="textSecondary" align="center" component="p">
                                            Never clean out your gutters again with our professional Gutter Guard Installation.


       </Typography>
                                        <Divider variant="middle" />
                                        <Typography variant="body2" color="textSecondary" align="center" component="p1">
                                            As a DoneRight Partner we are certified to install your LeafBlasterPro Gutter Guards so you don't have to worry ever again about regular maintenance.
       </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions>
                                    <Button size="small" color="primary">
                                        Share
     </Button>
                                    <Button size="small" color="primary">
                                        Learn More
     </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                        <Grid item container xs={12} md={4}>
                            <Card className={card.root}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        alt="Damaged Gutters on house due to storm "
                                        height="140"
                                        image={guttersDamage}
                                        title="Damaged Gutters on house"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" align="center" component="h2">
                                            Emergency Repair Services

   </Typography>
                                        <Typography variant="body2" color="textSecondary" align="center" component="p2">
                                            We know your house is important and emergencies can happen at any time. Our technicians can ensure your home can handle the worst that Colorado can provide.


   </Typography>
                                        <Divider variant="middle" />
                                        <Typography gutterBottom variant="body2" color="textSecondary" align="center" component="p3">
                                            From major repairs to minor maintenance we can make your home feel as good as new
</Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions>
                                    <Button size="small" color="primary">
                                        Share
 </Button>
                                    <Button size="small" color="primary">
                                        Learn More
 </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    </Grid>
                </Container>

            </Paper>
            <br />
            <Divider variant="middle" />

            <Paper elevation={3}>
                <Container maxWidth="md">
                    <Typography variant="h4" align="center" component="h6">
                        Three Easy Steps to Having a Clean, Leak-free Home
                </Typography>
                    <div className={EstimateStepping.root}>
                        <Stepper activeStep={activeStep} alternativeLabel>
                            {steps.map((label) => (
                                <Step key={label}>
                                    <StepLabel StepIconComponent={ColorlibStepIcon}>{label}</StepLabel>

                                </Step>
                            ))}

                        </Stepper>
                    </div>
                    <Container maxWidth="sm" align="center">
                        <Estimate />

                    </Container>
                </Container>
            </Paper>


            <br />


            <Container maxWidth="md" >
                <Card>
                    <CardActionArea>
                        <img

                            component="img"
                            alt="Why choose High View Construction?"
                            height="350"
                            src={logo}
                            title="Why choose High View Construction?"
                        />
                        <CardContent>
                            <Typography variant="h4" align="center" component="h7">
                                Why Choose High View Construction?
                </Typography>
                            <Divider variant="middle" />
                            <Typography variant="h6" align="left" component="p1">
                                No matter the weather, High View is here ready for any and all your repair needs.
                </Typography>
                            <br />
                            <Typography variant="p" align="right" component="p2">
                                We want to make sure you’re 100% satisfied, and we go the extra mile to make your experience as enjoyable and stress-free as possible.
                </Typography>
                            <Typography variant="h5">
                                Here are a few things you can expect when you work with us
                 </Typography>
                            <Divider variant="inset" />

                            <List>
                                <ListItem>
                                    <Typography>
                                        A full explanation of our recommended solutions
                            </Typography>
                                </ListItem>
                                <ListItem>
                                    <Typography>
                                        The best technicians in the business
                            </Typography>
                                </ListItem>
                                <ListItem>
                                    <Typography>
                                        A full clean up and follow up after every job

                            </Typography>
                                </ListItem>
                            </List>
                            <Typography>
                            </Typography>
                        </CardContent>
                        <CardMedia
                            component="img"
                            alt="Why choose High View Construction?"
                            height="350"
                            image={guttersBeauty}
                            title="Why choose High View Construction?"
                        />
                    </CardActionArea>

                </Card>
            </Container>
            <br />
            <div className={threeImage.root}>
                {images.map((image) => (
                    <ButtonBase
                        focusRipple
                        key={image.title}
                        className={threeImage.image}
                        focusVisibleClassName={threeImage.focusVisible}
                        style={{
                            width: image.width,
                        }}
                    >
                        <span
                            className={threeImage.imageSrc}
                            style={{
                                backgroundImage: `url(${image.url})`,
                            }}
                        />
                        <span className={threeImage.imageBackdrop} />
                        <span className={threeImage.imageButton}>
                            <Typography
                                component="span"
                                variant="subtitle1"
                                color="inherit"
                                className={threeImage.imageTitle}
                            >
                                {image.title}
                                <span className={threeImage.imageMarked} />
                            </Typography>
                        </span>
                    </ButtonBase>
                ))}
            </div>
            <Divider variant="middle" />
            <Paper>
                <Container maxWidth="md">
                    <Typography gutterBottom variant="h4" align="center">
                        Our Previous Work
           </Typography>
                    <Typography gutterBottom variant="h6" align="center">
                        At High View Construction, we pride ourselves on masterful installation. Because we know that it is not just the gutters we are affecting but the beauty and the longevity of the home.
           </Typography>
                    <Divider variant="middle" />
                    <Typography gutterBottom align="center">
                        From the angle of the gutters to the pitch of the roof, your home may be hiding major water damage if your gutters are in poor shape.
                        <br />
                        <Button>More Photos</Button>
                    </Typography>

                    <Card className={card.root}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                alt="Contemplative Reptile"
                                height="140"
                                image="/static/images/cards/contemplative-reptile.jpg"
                                title="Contemplative Reptile"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Lizard
               </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                    across all continents except Antarctica
               </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary">
                                Share
             </Button>
                            <Button size="small" color="primary">
                                Learn More
             </Button>
                        </CardActions>
                    </Card>
                    <Card className={card.root}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                alt="Contemplative Reptile"
                                height="140"
                                image="/static/images/cards/contemplative-reptile.jpg"
                                title="Contemplative Reptile"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Lizard
             </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                    across all continents except Antarctica
             </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary">
                                Share
           </Button>
                            <Button size="small" color="primary">
                                Learn More
           </Button>
                        </CardActions>
                    </Card>
                    <Card className={card.root}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                alt="Contemplative Reptile"
                                height="140"
                                image={logo}
                                title="Contemplative Reptile"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Lizard
           </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                    across all continents except Antarctica
           </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary">
                                Share
         </Button>
                            <Button size="small" color="primary">
                                Learn More
         </Button>
                        </CardActions>
                    </Card>
                </Container>
            </Paper>
            <Grid container spacing={1}>
                <Grid item xs={12} md={6}>
                    <Container>
                        <Typography variant="h5" align="center" component="h7">
                            Locally Owned Family Business

                          </Typography>
                    </Container>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Container>
                        <Typography variant="h5" align="center" component="h7" >
                            Our Vendors
                         </Typography>
                    </Container>
                </Grid>

            </Grid>
        </div>

    )
}
export default Home
