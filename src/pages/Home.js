import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ReactCompareImage from 'react-compare-image'

import {
    AppBar, Card, CardActions, CardContent, Drawer, Toolbar, List, Typography, Divider,
    IconButton, CssBaseline, Button, Stepper, Step, StepLabel, Grid, ButtonBase, CardActionArea,
    CardMedia, CardHeader, Box, FormControlLabel, Switch, Slide, Modal, Backdrop, Fade
} from "@material-ui/core"
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { flexbox } from '@material-ui/system';

import Image from 'material-ui-image'


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
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';
import LoyaltyIcon from '@material-ui/icons/Loyalty';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import BeenhereIcon from '@material-ui/icons/Beenhere';
import BuildIcon from '@material-ui/icons/Build';
import HelpIcon from '@material-ui/icons/Help';


import Iframe from 'react-iframe'


import coFlag from '../images/colorado-flag.png'
import guttersBeauty from "../images/gutters_beauty.jpg"
import guttersDamage from "../images/storm-dmg-house.gif"
import gutterGuard from "../images/leafblaster.jpg"
import logo from "../images/HighviewTR.png"
import logoBar from "../images/HighViewBar.png"
import lfbLogo from "../images/LFB_balckgreen@3x-1.png"
import lansingblg from "../images/lansing-building-products.png"
import abcLogo from "../images/abc_logo_insite.png"
import gutterComp1 from "../images/Guttercomp1.png"
import gutterComp2 from "../images/Guttercomp2.png"
import before from "../images/a (10).jpg"
import after from "../images/a (11).jpg"

import Estimate from "../pages/Estimate"
import Testimonials from '../pages/Testimonials'

import InstagramEmbed from 'react-instagram-embed'


const drawerWidth = 240;
const ctaImageStyles = makeStyles((theme) => ({
    root: {

    },
    img: {
        width: '15rem',
        [theme.breakpoints.down('sm')]: {
            height: '20rem'
        }
    }
}))
const slideStyles = makeStyles((theme) => ({
    root: {
        height: 180,
    },
    wrapper: {
        width: 100 + theme.spacing(2),
    },
    paper: {
        zIndex: 1,
        position: 'relative',
        margin: theme.spacing(1),
    },
    svg: {
        width: 100,
        height: 100,
    },
    polygon: {
        fill: theme.palette.common.white,
        stroke: theme.palette.divider,
        strokeWidth: 1,
    },
}));
const centerContent = makeStyles((theme) => ({
    root: {
        marginTop: '0',
        backgroundColor: '#142a4f',
        color: 'white',

    },
    Container: {

    },

}));
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
        backgroundColor: '#142a4f',
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
            backgroundImage: '#142a4f',
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
        backgroundColor: '#f58d02',
        borderRadius: '20px'
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
    estimateBtn: {
        width: '100%'
    },
    paper: {
        backgroundColor: '#f58d02'
    }
}));
const cardstyles = makeStyles((theme) => (
    {
        root: {
        },
        paper: {
            backgroundColor: '#142A4F'
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
        [theme.breakpoints.up('md')]: {
            root: {
                minHeight: '600px',

            }
        }
    }
));
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
            'linear-gradient( 136deg, rgb(20, 42, 79)  0%, rgb(20, 42, 79) 100%)',
        boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
        color: '#F58D02',
        fontWeight: '700',

    },
    completed: {
        backgroundImage:
            'linear-gradient( 136deg, rgb(20, 42, 79)  0%, rgb(20, 42, 79) 50%, rgb(20, 42, 79)  100%)',
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
};
const previousWorkStyles = makeStyles((theme) => ({
    paper: {
        backgroundColor: '#142a4f'
    },
    container: {
        backgroundColor: '#f58d02',
        color: '#fff'
    },
    photosBtn: {
        color: '#fff'
    },
    instagramContainer: {
        display: 'flex',
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column',
            margin: 'auto',
            padding: 'auto',
            alignItems: 'center'

        },
        [theme.breakpoints.up('md')]: {
            flexDirection: 'row',
            flexWrap: 'wrap',

        },
        [theme.breakpoints.up('lg')]: {
            flexDirection: 'row',
            flexWrap: 'wrap',
            maxWidth: '1920px'

        }

    },
    instagramEmbed: {
        padding: '2rem',
        margin: '.2rem',
        alignSelf: 'center'
    }
}))
const modalStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },

}));

const vendorStyles = makeStyles((theme) => ({
    root: {
        display: 'block'
    },


    wrapper: {
        padding: '1.2rem',
        margin: '0rem',
        padding: '0rem',
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
        minHeight: '23rem',
        [theme.breakpoints.down('md')]: {
            minWidth: '30rem'

        },
        [theme.breakpoints.up('lg')]: {
            minWidth: '20rem',
            margin: '.5rem',
            maxWidth: '25rem'
        }
    },
    svg: {
        width: '100',
        height: '100',
    },

    img: {
        height: '4rem',
        margin: 'auto',
        padding: 'auto',

    },
    imgBtn: {
        alignSelf: 'center',
        minWidth: '150px'


    },
    imgContainer: {
        display: 'inline-block',
        borderRadius: '20px',
        [theme.breakpoints.down('sm')]: {
            width: '12rem'
        },
        [theme.breakpoints.up('md')]: {
            width: '20rem'
        },
        [theme.breakpoints.up('lg')]: {
            width: '30rem'
        },

    },
    localContainer: {
        display: 'box',
        backgroundColor: '#142a4f',
        color: '#ffff'
    },
    vendorContainer: {
        display: 'flex',
        padding: '2rem',
        margin: '2rem',
        [theme.breakpoints.down('md')]: {
            flexDirection: 'column',
        },

        backgroundColor: '#f58d02',
        borderColor: '#142a4f'

    },
    divider: {
        backgroundColor: '#f58d02'
    },
    textContainer: {
        padding: '2rem',
        margin: '.5rem'
    },
    brandsContainer: {
        display: 'flex',
        maxWidth: '25rem',

        margin: '1rem',

        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column',
        },
        [theme.breakpoints.up('md')]: {
            flexDirection: 'row',
            alignItems: 'center',
        }
    },
    vendorWrapper: {
        padding: '1.2rem',
        margin: '0rem',
        padding: '0rem',
        maxWidth: 'auto',
        display: 'flex',
        [theme.breakpoints.down('md')]: {
            flexDirection: 'column',

        },
    },
    titleContainer: {
        display: 'block',
        textAlign: 'center',
        paddingBottom: '0rem'

    },
    brandContainer: {
        display: 'block',
        textAlign: 'center',
        backgroundColor: '#142a4f',
        padding: '2rem',
        margin: '0rem',
    },
    logoImg: {
        [theme.breakpoints.down('sm')]:{
            height:'50px'
        },
        [theme.breakpoints.up('md')]:{
            height:'50px'
        }
    },
    imgBar: {
        width: '1px'
    },
    imgBarContainer: {
        width: '1.2rem',

    }

}));

const whyhighviewstyles = makeStyles((theme) => ({
    paper: {
        backgroundColor: '#142A4F',
    },
    headerContainer: {
        backgroundColor: '#42527b',
        color: '#ffffff',
        '& h1': {
            fontSize: '1.5rem',
            padding: '.5rem'
        },
        '& h2': {
            fontSize: '1.2rem',
            padding: '.5rem'
        },
        '& h3': {
            fontSize: '1rem',
            padding: '.5rem'
        }


    },
    listTitle: {
        color: '#ffffff'
    },
    listContainer: {
        backgroundColor: '#f58d02',
        color: '#142a4f',
        padding: '0px',
        margin: '0px',


        [theme.breakpoints.down('sm')]: {
            width: '100%',

        },
        [theme.breakpoints.up('md')]: {
            width: '100%',
        },

        [theme.breakpoints.up('lg')]: {
            width: '100%',
        }
    },
    trapezoid: {
        borderBottom: '20rem solid transparent',
        borderLeft: '5rem solid transparent',
        borderRight: '5rem solid transparent',
        height: '0',
        width: '1000px',
    }
}))

const images = [
    {
        url: '../images/waterfall_over_gutters.png',
        title: 'Residential',
        width: '40%',
    },
    {
        url: '../images/a (10).jpg',
        title: 'Contact Us',
        width: '30%',
    },
    {
        url: { gutterGuard },
        title: 'Commercial',
        width: '30%',
    },
];


function Home() {
    const classes = ctaImageStyles();
    const threeImage = threeImageRow();
    const card = cardstyles();
    const EstimateStepping = estimateStepper();
    const centerClasses = centerContent();
    const modalClasses = modalStyles();
    const vendorClasses = vendorStyles();
    const previousWork = previousWorkStyles();
    const whyhighviewClasses = whyhighviewstyles();
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

    const [checked, setChecked] = React.useState(false);

    const handleChange = () => {
        setChecked((prev) => !prev);
    };
    const [modalOpen, modalSetOpen] = React.useState(false);

    const handleModalOpen = () => {
        setOpen(true);
    };

    const handleModalClose = () => {
        setOpen(false);
    };
    return (
        <div>
            <CssBaseline />
            <SEO title="Home" />

            <Container maxWidth="xl" className={classes.root} >
                <ReactCompareImage className={classes.img} leftImage={before} leftImageLabel="Before" rightImageLabel="After" rightImage={after} />

            </Container>
            <Paper className={centerClasses.root} elevation={2}>
                <Container maxWidth="md">
                    <Typography variant="h4" align="center" component="h1">
                        At High View we pride ourselves in high quality workmanship

                              </Typography>
                    <Divider variant="middle" />
                    <Typography color="secondary" variant="body2" align="center" component="h2">
                        Everything installed by us is ready to stand the weather here in Colorado

                              </Typography>
                    <br />
                </Container>
            </Paper>



            <Paper className={card.paper}>
                <Container maxWidth="lg">
                    <Grid container alignItems="center" spacing={3}>
                        <Grid item container alignItems="center" xs={12} md={4}>
                            <Card >
                                <CardActionArea className={card.root}>
                                    <CardMedia
                                        component="img"
                                        alt="Beautiful gutter installation"
                                        height="340"
                                        image={guttersBeauty}
                                        title="Beautiful gutter installation"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" align="center" component="h2">
                                            Seamless Gutters

           </Typography>
                                        <Typography gutterBottom variant="body2" color="textSecondary" align="center" component="h4">
                                            Professional installation of Seamless Gutters providing you with greater protection against leaks.
             </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            We provide the option between strip miters, box miters or customer corners. Providing you the option between the strength of mitered corners or the beauty of custom corners.

           </Typography>
                                        <Divider variant="middle" />

                                        <Typography variant="body2" color="secondary" component="p">
                                            With all our gutter installation, we offer color matching from a wide selection of manufacturers.
           </Typography>
                                    </CardContent>
                                </CardActionArea>

                            </Card>
                        </Grid>
                        <Grid item container xs={12} md={4}>
                            <Card >
                                <CardActionArea className={card.root}>
                                    <CardMedia
                                        component="img"
                                        alt="LeafBlaster Brand Gutter Guard"
                                        height="360"
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

                            </Card>
                        </Grid>
                        <Grid item container xs={12} md={4}>
                            <Card >
                                <CardActionArea className={card.root}>
                                    <CardMedia
                                        component="img"
                                        alt="Damaged Gutters on house due to storm "
                                        height="360"
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
                                        <Typography gutterBottom variant="body2" color="secondary" align="center" component="p3">
                                            From major repairs to minor maintenance we can make your home feel as good as new
</Typography>
                                    </CardContent>
                                </CardActionArea>

                            </Card>
                        </Grid>
                    </Grid>
                </Container>

            </Paper>


            <Paper className={EstimateStepping.paper} elevation={2}>
                <Container maxWidth="md">
                    <Typography variant="subtitle1" fontStyle="normal" align="center" color="primary" component="h6">
                        Three Easy Steps to Having a Clean, Leak-free Home
                </Typography>
                    <div >
                        <Stepper className={EstimateStepping.root} activeStep={activeStep} alternativeLabel>
                            {steps.map((label) => (
                                <Step type="button" onClick={handleModalOpen} key={label}>
                                    <StepLabel StepIconComponent={ColorlibStepIcon}>{label}</StepLabel>

                                </Step>
                            ))}

                        </Stepper>
                    </div>
                    <Modal
                        aria-labelledby="transition-modal-title"
                        aria-describedby="transition-modal-description"
                        className={modalClasses.modal}
                        open={open}
                        onClose={handleModalClose}
                        closeAfterTransition
                        BackdropComponent={Backdrop}
                        BackdropProps={{
                            timeout: 500,
                        }}
                    >
                        <Fade in={open}>
                            <div className={modalClasses.paper}>
                                <h2 id="transition-modal-title">Free Estimate</h2>

                                <Iframe
                                    width="1080px"
                                    height="950rem"
                                    display="initial"
                                    position="relative"
                                    src='https://forms.zohopublic.com/highviewconstruction/form/ContactForm/formperma/uDcbOwG1jziah7w4RknQcRGodfTHHL3Hl7NGGH1_SsE'
                                >
                                </Iframe>
                                <Estimate />
                            </div>
                        </Fade>
                    </Modal>
                </Container>
            </Paper>




            <Paper className={whyhighviewClasses.paper} elevation={2}>
                <Container maxWidth="md">
                    <br />
                    <Paper className={whyhighviewClasses.headerContainer}>
                        <Container >
                            <h1 gutterBottom variant="h4" align="center" component="h7">

                                Why Choose High View Construction?
    </h1>
                            <Divider variant="middle" />
                            <h2 variant="h6" align="center" component="p1">
                                No matter the weather, High View is here ready for any and all your repair needs.
    </h2>
                            <h3 variant="body2" align="center" component="p2">
                                We want to make sure you’re 100% satisfied, and we go the extra mile to make your experience as enjoyable and stress-free as possible.
    </h3>
                        </Container>
                    </Paper>
                    <br />
                    <Container className={whyhighviewClasses.listTitle} >
                        <Typography gutterBottom variant="h5" align="center">
                            Here are a few things you can expect when you work with us:
            </Typography>
                    </Container>

                    <Divider variant="middle" />

                    <Container className={whyhighviewClasses.listContainer}>
                        <List >
                            <ListItem>
                                <ListItemText  align="center">
                                    <QuestionAnswerIcon /><br />
                         A full explanation of our recommended solutions
                     </ListItemText>
                            </ListItem>
                            <Divider variant="middle" />

                            <ListItem>
                                <ListItemText  align="center">
                                    <BuildIcon /><br />
                         The best technicians in the business
                     </ListItemText>
                            </ListItem>
                            <Divider variant="middle" />
                            <ListItem>
                                <ListItemText  align="center">
                                    <BeenhereIcon /> <br />
                     A full clean up and follow up after every job

                     </ListItemText>
                            </ListItem>
                        </List>

                    </Container>

                </Container>

            </Paper>
            <Testimonials />


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


            <Paper className={previousWork.paper}>
                <Container className={previousWork.container} maxWidth="md">
                    <br />
                    <Typography gutterBottom variant="h4" align="center">
                        <PhotoCameraIcon fontSize="large" />
                        <br />
                        Our Previous Work
           </Typography>
                    <Typography gutterBottom variant="h6" align="center">
                        At High View Construction, we pride ourselves on masterful installation. Because we know that it is not just the gutters we are affecting but the beauty and the longevity of the home.
           </Typography>
                    <Divider variant="middle" />
                    <Typography gutterBottom align="center">
                        From the angle of the gutters to the pitch of the roof, your home may be hiding major water damage if your gutters are in poor shape.
                        <br />
                        <Button className={previousWork.photosBtn} href="https://www.instagram.com/highviewgutterservices/">More Photos</Button>
                    </Typography>

                </Container>
                <br />
                <Container className={previousWork.instagramContainer} maxWidth="md">
                    <InstagramEmbed className={previousWork.instagramEmbed}
                        url='https://www.instagram.com/p/CAgww00BkK-/'
                        maxWidth={320}
                        hideCaption={false}
                        containerTagName='div'
                        protocol=''
                        injectScript
                        onLoading={() => { }}
                        onSuccess={() => { }}
                        onAfterRender={() => { }}
                        onFailure={() => { }}
                    />
                    <InstagramEmbed className={previousWork.instagramEmbed}
                        url='https://www.instagram.com/p/B_yH2NnhBsE/'
                        maxWidth={320}
                        hideCaption={false}
                        containerTagName='div'
                        protocol=''
                        injectScript
                        onLoading={() => { }}
                        onSuccess={() => { }}
                        onAfterRender={() => { }}
                        onFailure={() => { }}
                    />
                    <InstagramEmbed className={previousWork.instagramEmbed}
                        url='https://www.instagram.com/p/B_8Sy45hkhk/'
                        maxWidth={320}
                        hideCaption={false}
                        containerTagName='div'
                        protocol=''
                        injectScript
                        onLoading={() => { }}
                        onSuccess={() => { }}
                        onAfterRender={() => { }}
                        onFailure={() => { }}
                    />
                    <InstagramEmbed className={previousWork.instagramEmbed}
                        url='https://www.instagram.com/p/CArHziIh9WV/'
                        maxWidth={320}
                        hideCaption={false}
                        containerTagName='div'
                        protocol=''
                        injectScript
                        onLoading={() => { }}
                        onSuccess={() => { }}
                        onAfterRender={() => { }}
                        onFailure={() => { }}
                    />
                </Container>
            </Paper>


            <Paper className={vendorClasses.localContainer} elevation={2}>
                <Container className={vendorClasses.vendorWrapper}>
                    <Container className={vendorClasses.imgContainer}>
                        <img classname={vendorClasses.img} src={coFlag} />

                    </Container>
                    <Container className={vendorClasses.textContainer}>
                        <Container className={vendorClasses.titleContainer}>
                            <Typography variant="h5" align="center" component="h7">

                                Locally Owned Family Business

                            </Typography>

                        </Container>
                        <Container className={vendorClasses.textContainer}>
                            <Typography align="center">
                                We are High View Construction and we've been installing gutters here in Colorado since 2018. <br />The Owner Gilberto Sanchez has over 10 years of professional experience working with different local businesses.
                           </Typography>
                            <br />
                            <Divider className={vendorClasses.divider} variant="middle" />
                            <br />
                            <Typography align="center">
                                <b>We believe in providing high quality services at a reasonable price.</b><br /> <em>Don't hassle with large corporations, stay local and know you will get quality service.</em>
                            </Typography>
                            <br />
                            <img classname={vendorClasses.imgBar} src={logoBar} />

                        </Container>
                    </Container>
                </Container>
            </Paper>


            <Paper className={vendorClasses.vendorContainer} >
                <Container className={vendorClasses.vendorWrapper}>


                    <Container className={vendorClasses.brandContainer}>

                        <Typography className={vendorClasses.imgBarContainer} color='secondary' variant="h3" align="center" component="h7" >
                            <img  classname={vendorClasses.logoImg} src={logo} />
                            <em>
                                Our Vendors
                            </em>
                        </Typography>
                    </Container>
                    <br />
                    <Divider variant="middle" />
                    <br />
                    <Container className={vendorClasses.brandsWrapper}>
                        <Container className={vendorClasses.brandsContainer}>
                            <Button href="https://www.leafblaster.com/features/">
                                <img classname={vendorClasses.img} src={lfbLogo} />

                            </Button>

                        </Container>
                        <Container className={vendorClasses.brandsContainer}>
                            <Button href="https://lansingbp.com/product/gutters/">
                                <img classname={vendorClasses.img} src={lansingblg} />

                            </Button>
                        </Container>
                        <Container className={vendorClasses.brandsContainer}>
                            <Button href="https://www.abcsupply.com/products/rain-gutters-guards-downspouts/aluminum-rain-gutters-guards-downspouts/">
                                <img classname={vendorClasses.img} src={abcLogo} />
                            </Button>

                        </Container>
                    </Container>
                </Container>
            </Paper>
        </div>

    )
}
export default Home
