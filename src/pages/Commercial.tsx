// Gatsby supports TypeScript natively!
import React from "react"
import { PageProps, Link } from "gatsby"
import {
  AppBar, Card, CardActions, CardContent, Drawer, Toolbar, List, Typography, Divider,
  IconButton, CssBaseline, Button, Stepper, Step, StepLabel, Grid, ButtonBase, CardActionArea,
  CardMedia, CardHeader, Box, FormControlLabel, Switch, Slide, Modal, Backdrop, Fade, Container, Paper,
} from "@material-ui/core"
import { makeStyles, useTheme } from '@material-ui/core/styles';

import mainImage from "../images/mainstretch.jpg"
import lfblastershield from '../images/HighviewShrunk.png'
import lowerImage from '../images/a (15).jpg'

import Layout from "../components/layout"
import SEO from "../components/seo"

const centerContent = makeStyles((theme) => ({
  root: {
    marginTop: '0',
    display: 'flex',
    flexWrap: 'wrap',
    backgroundColor: '#ffff',

    [theme.breakpoints.down('sm')]: {
      padding: '0rem',

      paddingTop: '5rem',

    },
    [theme.breakpoints.up('md')]: {
      paddingTop: '5rem',
      flexWrap: 'nowrap',
      width: '100%'
    }
  },
  Container: {

  },
  centerImg: {
    [theme.breakpoints.down('sm')]: {
      marginBottom: '0rem',

    },
    [theme.breakpoints.up('md')]: {
      height: '25rem',
      marginBottom: '0.4rem',
      borderRadius: '20px'
    },
    [theme.breakpoints.up('md')]: {
      height: '25rem',
      marginBottom: '0.4rem',
      borderRadius: '20px'
    }
  },
  centerImgContainer: {
    margin: '0rem',
    padding: '0rem'
  },
  titleContainer: {
    borderBottom: '2px solid #F58D02',
    borderRight: '2px solid #F58D02',
    borderTop: '2px solid #F58D02',
    backgroundColor: '#fff',

    [theme.breakpoints.down('sm')]: {
      display: 'flex',
      margin: '15px 0',
      padding: '15px 15px 15px 0',

    },
    [theme.breakpoints.up('md')]: {
      display: 'flex',
      width: '25rem',
      padding: '25px 25px 25px 0',

    }
  },
  titleInContainer: {
    [theme.breakpoints.down('sm')]: {
      padding: '1rem',
      alignSelf: 'center'

    },
    [theme.breakpoints.up('md')]: {
      alignSelf: 'center',


    }
  },
  innerTextContainer: {
    [theme.breakpoints.up('md')]: {
      alignSelf: 'center',
      width: '20rem',
      paddingLeft: '0rem'

    }
  },
  donerightImg: {
    [theme.breakpoints.down('sm')]: {
      height: '6rem'
    },
    [theme.breakpoints.up('md')]: {
      height: '8rem',
      padding: '.4rem',


    }
  },
  topContainer: {
    paddingTop: '2rem',
    [theme.breakpoints.down('sm')]: {
      paddingBottom: '1rem',
      backgroundColor: '#fff',

    },
    [theme.breakpoints.up('md')]: {
      minWidth: '25rem',
      marginRight: '-6rem',
      zIndex: '111'
    },
    [theme.breakpoints.up('lg')]: {
      minWidth: '25rem',
      marginRight: '-14rem',
      zIndex: '111'
    },
    [theme.breakpoints.up('xl')]: {
      minWidth: '25rem',
      marginRight: '-26rem',
      zIndex: '111'
    }
  },

}));

const splitContent = makeStyles((theme) => ({
  root: {
    margin: '0rem',
    padding: '0rem',
    display: 'flex',
    backgroundColor: '#',
    [theme.breakpoints.down('sm')]: {
      padding: '0rem',
      flexWrap: 'wrap',


    },
    [theme.breakpoints.up('md')]: {
      flexWrap: 'nowrap'
    },
    [theme.breakpoints.up('lg')]: {
      margin: 'auto',

    }
  },
  leftCenterImg: {
    height: '100%',
    width: "100%",
    paddingBottom: '0rem'
  },
  leftcenterImgContainer: {
    margin: '0rem',
    padding: '0rem'
  },
  rightCenterTextContainer: {
    backgroundColor: "#f58d02",
    padding: '2rem',
    [theme.breakpoints.up('md')]: {

    },
    [theme.breakpoints.up('lg')]: {
      width: '150rem'
    }

  },
  rightCenterTitle: {
    padding: '.5rem',
    fontSize: '2rem',

  },
  rightCenterBody: {
    padding: '.6rem'
  },
  divider: {
    backgroundColor: "#142a4f"
  }

}))

const servicesContent = makeStyles((theme) => ({
  root: {
    padding: "1rem",
    display: 'flex',
    flexWrap: 'wrap',
    minWidth: 300,
    width: '100%',
  },
  titleContainer: {},
  title: {
    color: '#ffff'
  },
  bodyBox: {},
  paper: {
    width: '100%',
    textAlign: 'center',
    padding: '2rem',
    marginBottom: '1rem'
  },
  paperText: {
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
  divider: {
    backgroundColor: "#f58d02"
  }
}))

const images = [
  {
    url: '../images/a (10).jpg',
    title: 'Gutters',
    width: '50%',
  },
  {
    url: '../images/a (10).jpg',
    title: 'Siding',
    width: '50%',
  },
  {
    url: '../images/a (10).jpg',
    title: 'Windows',
    width: '50%',
  }, {
    url: '../images/a (10).jpg',
    title: 'Patio Doors',
    width: '50%',
  },
  {
    url: '../images/a (10).jpg',
    title: 'Fence & Railing',
    width: '50%',
  },
  {
    url: '../images/a (10).jpg',
    title: 'Drywall',
    width: '50%',
  },
];

function Commercial(props: PageProps) {
  const centerClasses = centerContent();
  const splitClasses = splitContent();
  const servicesClasses = servicesContent();

  return (
    <Layout>
      <SEO title="Commercial Services" />
      <Container>
        <br />
      </Container>
      <Container maxWidth="xl" className={centerClasses.root}>
        <Container maxWidth="xl" className={centerClasses.topContainer}>

          <Container className={centerClasses.titleContainer}  >
            <img className={centerClasses.donerightImg} src={lfblastershield} />

            <Typography className={centerClasses.titleInContainer} variant="h4" >

              <em> High Quality Commercial Services</em>

            </Typography>

          </Container>
          <Container className={centerClasses.innerTextContainer}>

            <br />
            <Typography align="left" variant="body1">

              Ensure quality services every time. <br />
            Professional technicians <br /> always ready for entire building<br /> repairs to basic maintenance calls
                   </Typography>
            <br />
            <Button href="tel:720-325-9473" variant="outlined" color="primary">
              Call Now
       </Button>
          </Container>

        </Container>
        <Container className={centerClasses.centerImgContainer}>
          <img className={centerClasses.centerImg} src={mainImage} />

        </Container>
      </Container>


      <Container className={splitClasses.root}>
        <Container className={splitClasses.leftcenterImgContainer}>
          <img className={splitClasses.leftCenterImg} src={lowerImage} />

        </Container>


        <Container className={splitClasses.rightCenterTextContainer}>
          <Typography className={splitClasses.rightCenterTitle}>
            High View Construction is an industry leader
          </Typography>
          <Typography className={splitClasses.rightCenterBody} variant='subtitle1'>
            in serving property managers, facility managers and maintenance managers with responsive, high-quality commercial installation and repair services.
            <br />
            We know that the safety and comfort of tenants, visitors,
            building staff and equipment are at stake when the repairs are needed for old, damaged, or leaking buildings.
        </Typography>
          <Divider className={splitClasses.divider} variant='middle' />
          <Typography className={splitClasses.rightCenterBody} variant='subtitle2'>
            That’s why we take our commercial work so seriously.
        </Typography>
        </Container>
      </Container>

      <Container className={servicesClasses.root}>
        <Container className={servicesClasses.titleContainer}>
          <Typography align="center" variant="h3" className={servicesClasses.title}>Our Services</Typography>
          <Divider className={servicesClasses.divider} variant="middle" />
          <Typography align="center" variant="h6" color="secondary">
            Choose from our wide variety of services, contact us for more information
           </Typography>
        </Container>

        <Box className={servicesClasses.bodyBox}>


        </Box>
        <div className={servicesClasses.root}>
          {images.map((image) => (
            <ButtonBase
              focusRipple
              key={image.title}
              className={servicesClasses.image}
              focusVisibleClassName={servicesClasses.focusVisible}
              style={{
                width: image.width,
              }}
            >
              <span
                className={servicesClasses.imageSrc}
                style={{
                  backgroundImage: `url(${image.url})`,
                }}
              />
              <span className={servicesClasses.imageBackdrop} />
              <span className={servicesClasses.imageButton}>
                <Typography
                  component="span"
                  variant="subtitle1"
                  color="inherit"
                  className={servicesClasses.imageTitle}
                >
                  {image.title}
                  <span className={servicesClasses.imageMarked} />
                </Typography>
              </span>
            </ButtonBase>
          ))}
        </div>
      </Container>

    </Layout>
  )
}

export default Commercial
