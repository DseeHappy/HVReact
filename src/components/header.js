import React from 'react';
import Iframe from 'react-iframe'



import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import { Typography, Button, Box, Container, useScrollTrigger, SwipeableDrawer, useMediaQuery, ClickAwayListener, Slide, Zoom,Fab } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';


import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import PhoneIcon from '@material-ui/icons/Phone';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import AngiesList from '../images/angieslistBtn.png'

import { Link } from "gatsby"

import logo from "../images/hv.png"

import Estimate from "../pages/Estimate"
const scrollToTopStyles = makeStyles((theme) => ({
  root: {
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
}));

const useStyles = makeStyles((theme) => ({
  root: {

    [theme.breakpoints.down('sm')]: {
      display: 'flex',
      flexGrow: 1,

    },
    [theme.breakpoints.up('md')]: {
      display: 'flex',
      flexGrow: 1,

    }

  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `@media(max-width: 100% )`,
    marginLeft: `@media(max-width: 100% )`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    [theme.breakpoints.down('sm')]: {
      height: 'auto',
      width: 'auto',
      paddingLeft: 'auto',
      marginLeft: 'auto'
    },
    [theme.breakpoints.up('md')]: {
      display: 'none'

    }

  },
  hide: {
    display: '@media(max-width:600px)',
  },
  drawer: {
    width: `@media(max-width: 100% )`,
    flexShrink: 0,
  },
  drawerPaper: {
    width: `@media(max-width: 100% )`,
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
    marginLeft: `@media(max-width: 100% )`,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },

  logo: {
    
    overflow: 'visible',
    marginBottom: '0px',
    [theme.breakpoints.down('sm')]: {
      maxWidth: '90px',

    },
    [theme.breakpoints.up('md')]: {
      maxWidth: '110px',


    },
    [theme.breakpoints.up('lg')]: {

    },
    [theme.breakpoints.up('xl')]: {


    }
  }, btnLogo: {

    overflow: 'visible',
    marginBottom: '0px',
    [theme.breakpoints.down('sm')]: {
      maxWidth: '120px',

    },
    [theme.breakpoints.up('md')]: {
      maxWidth: '140px',
      marginLeft: 'auto',
      paddingLeft: 'auto'

    },
    [theme.breakpoints.up('lg')]: {
      marginLeft: '6rem',
      marginRight: '1rem'
    },
    [theme.breakpoints.up('xl')]: {
      marginLeft: '22rem',
      marginRight: '2rem'

    }
  },
  hidePhone: {
    [theme.breakpoints.down('sm')]: {
      display: 'block',
      height: 'auto',
      padding: 'auto',
      margin: 'auto',
      fontSize: '25px'
    },
    [theme.breakpoints.up('md')]: {
      display: 'none'

    }
  },
  topToolbar: {
    [theme.breakpoints.down('sm')]: {
      display: 'none'

    },
    [theme.breakpoints.up('md')]: {
      display: 'flex',
      width: '100%',
      padding: 'auto',
      margin: 'auto',
      maxHeight: '5rem',
      backgroundColor: '#fff',


    }
  },
  largeNavBar: {
    [theme.breakpoints.down('sm')]: {
      display: 'none'

    },
    [theme.breakpoints.up('md')]: {
      display: 'flex',
      paddingBottom: '0rem',
      margin: 'auto'
    },
    [theme.breakpoints.up('lg')]: {
      display: 'flex',
      margin: 'auto',
      paddingBottom: '0rem',

    }
  },

  estimateBtnRight: {
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    },
    [theme.breakpoints.up('md')]: {
      display: 'block',
      height: '5rem',
      width: '12rem',
      margin: 'auto',
      padding: 'auto',
      fontSize:'20px'
    },
    [theme.breakpoints.up('lg')]: {
      marginLeft: '1.4rem'
    }
  },
  estimateBtnBottom: {
    [theme.breakpoints.down('sm')]: {
      height: '100px',
      width: '100%',
      margin: '0px',
      padding: '0px',
      maxHeight: '3.6rem'

    },
    [theme.breakpoints.up('md')]: {
      display: 'none'
    },

  },
  toolbarBottom: {
    [theme.breakpoints.down('sm')]: {
      margin: '0px',
      padding: '0px',
    },
    [theme.breakpoints.up('md')]: {
      display: 'none'
    },
  },
  topToolbarBtns: {
    [theme.breakpoints.up('md')]: {
      padding: 'auto',
      margin: 'auto',
      alignItems: 'flex-end',
    }
  },
  largeNavBarBtns: {
    color: 'white',
    textDecoration: 'none',
    [theme.breakpoints.up('md')]: {
      padding: 'auto',
      margin: '.8rem'
    },
    [theme.breakpoints.up('lg')]: {
      padding: 'auto',
      margin: '.8rem',
      justifyContent: 'space-between'
    },
    textAlign: 'center'
  },
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
  drawerBtns: {
    color: 'black',
    textDecoration: 'none',
    verticalAlign: 'middle',
    padding:'0rem',
    margin:'0rem'
  },
  btnImage:{
    maxHeight:'35px',
    padding:'0px',
    alignItems: 'center',
    margin:'0px'
  }
  


}));

function HideOnScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}


function ElevationScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

function ScrollTop(props) {
  const { children, window } = props;
  const classes = useStyles();
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector('#back-to-top-anchor');

    if (anchor) {
      anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <Zoom in={trigger}>
      <div onClick={handleClick} role="presentation" className={classes.root}>
        {children}
      </div>
    </Zoom>
  );
}


export default function Header(props) {
  const classes = useStyles();
  const scrollToTopClasses = scrollToTopStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const [openBtn, btnOpen] = React.useState(false);

  const handleBtnOpen = () => {
    btnOpen(true);
  };

  const handleBtnClose = () => {
    btnOpen(false);
  };

  return (
    <div className={classes.root}>
      <HideOnScroll {...props}>

        <AppBar>
          <Toolbar id="back-to-top-anchor" variant="dense" className={classes.topToolbar}>
            <Button href="tel:720-325-9473" noWrap variant="text" color="secondary" className={classes.topToolbarBtns}>
              <PhoneIcon />
      720-325-9473
</Button>
            <Divider orientation="vertical" flexItem />
            <Button href="mailto:GilbertoSanchez@highview5280.com" noWrap variant="text" color="secondary" className={classes.topToolbarBtns}>
              <MailIcon />
           GilbertoSanchez@highview5280.com
</Button>

            <Button href="https://login.highview5280.com" noWrap variant="text" color="secondary" className={classes.topToolbarBtns}>
              <FacebookIcon />

            </Button>
            <Button href="https://www.instagram.com/highviewgutterservices/" noWrap variant="text" color="secondary" className={classes.topToolbarBtns}>
              <InstagramIcon />

            </Button>
             <Button href="https://member.angieslist.com/member/reviews/edit?serviceProviderId=24375094&cid=PRL.E014.P026.20180302"  noWrap variant="text" color="secondary" className={classes.topToolbarBtns}>
             <img className={classes.btnImage} src={AngiesList}/>
            </Button>


            <Divider orientation="vertical" flexItem />

            <Button href="https://login.highview5280.com" noWrap variant="text" color="secondary" className={classes.topToolbarBtns}>
              Login
</Button>


          </Toolbar>

          <ElevationScroll {...props}>

            <Toolbar className={classes.Toolbar}>
              <Link src="../pages/Home">
                <Button className={classes.btnLogo}>
                  <img className={classes.logo} src={logo} />

                </Button>
              </Link>
              <Button href="tel:720-325-9473" className={classes.hidePhone} noWrap variant="text" color="secondary">
                720-325-9473
</Button>
              <List className={classes.largeNavBar}>
                {['Residential', 'Commercial', 'Partner'].map((text, index) => (
                  <Link className={classes.largeNavBarBtns} to={text}>
                    <ListItem alignItems="flex-start" button key={text}>
                      <ListItemText primary={text} />
                    </ListItem>
                  </Link>
                ))}
              </List>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerOpen}
                edge="start"
                className={clsx(classes.menuButton, open && classes.hide)}
              >
                <MenuIcon />
              </IconButton>
              <Button className={classes.estimateBtnRight} variant="contained" color="secondary" type="button" onClick={handleBtnOpen}>
                Free Estimate
          </Button>
              <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                id="estimateModal"
                open={openBtn}
                onClose={handleBtnClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                  timeout: 500,
                }}
              >
                <Fade in={openBtn}>
                  <div className={classes.paper}>
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

            </Toolbar>

          </ElevationScroll>

          <Toolbar className={classes.toolbarBottom}>
            <Button className={classes.estimateBtnBottom} variant="contained" color="secondary" type="button" onClick={handleBtnOpen}>
              Free Estimate
        </Button>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <ScrollTop {...props}>
      <Fab color="secondary" size="small" aria-label="scroll back to top">
        <KeyboardArrowUpIcon />
      </Fab>
    </ScrollTop>
      <SwipeableDrawer
        className={classes.drawer}
        variant="persistent"
        anchor="top"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        <List >
          {['Residential', 'Commercial', 'Partner'].map((text, index) => (
            <Link className={classes.drawerBtns} to={text}>
              <ListItem button key={text}>
                <ListItemText primary={text} />
              </ListItem>
            </Link>
          ))}
        </List>
        <Divider />


      </SwipeableDrawer>

    </div >
  );
}
