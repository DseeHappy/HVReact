import React from 'react';

import windowSize from 'react-window-size';


import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import { Typography, Button, Box, Container, useScrollTrigger, SwipeableDrawer, useMediaQuery  } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';



import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

import { Link } from "gatsby"

import logo from "../images/hv.png"

import Estimate from "../pages/Estimate"

const drawerWidth = 480;

const smallestScreen = useMediaQuery('(min-width:600px)');

console.log("window Size", windowSize.windowWidth);
console.log("window Size", windowSize.height);

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexGrow: 1,

  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `@media(max-width: 100% )`,
    marginLeft:  `@media(max-width: 100% )`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginLeft: theme.spacing(2),
  },
  hide: {
    display: '@media(max-width:600px)',
  },
  drawer: {
    width:  `@media(max-width: 100% )`,
    flexShrink: 0,
  },
  drawerPaper: {
    width:  `@media(max-width: 100% )`,
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
    marginLeft: - `@media(max-width: 100% )`,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  toolbar: {
    minHeight: 80,
    alignItems: 'flex-start',
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(0),
  },
  title: {
    flexGrow: 1,
    alignSelf: 'flex-end',
    maxWidth: '240px',
    minHeight: '60px',
    overflow: 'visible',
    zIndex: '9',
    padding: '.5rem'

  },
  hideItems:{
    display: 'none'
  }

}));


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


export default function Header(props) {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />

      <AppBar>
        <Toolbar id="back-to-top-anchor" variant="dense" className={classes.Toolbar}>

          <Button href="tel:720-325-9473" noWrap variant="text" color="secondary">
            720-325-9473
</Button>
          <Button href="mailto:GilbertoSanchez@highview5280.com" noWrap variant="text" color="secondary">
            GilbertoSanchez@highview5280.com
</Button>
          <Button href="https://login.highview5280.com" noWrap variant="text" color="secondary">
            Login
</Button>


        </Toolbar>

        <ElevationScroll {...props}>

          <Toolbar className={classes.Toolbar}>
            <img className={classes.title} src={logo} />

            <Button href="tel:720-325-9473" className={classes.hidePhone} noWrap variant="text" color="secondary">
              720-325-9473
</Button>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              className={clsx(classes.menuButton, open && classes.hide)}
            >
              <MenuIcon />
            </IconButton>
            <Estimate />
          </Toolbar>
        </ElevationScroll>
      </AppBar>

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
        <List>
          {['Residential', 'Commercial', 'Partner'].map((text, index) => (
            <Link to={text}>
              <ListItem button key={text}>
                <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
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
