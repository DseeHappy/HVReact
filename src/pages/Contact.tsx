// Gatsby supports TypeScript natively!
import React from "react"
import { PageProps, Link } from "gatsby"
import {
  AppBar, Card, CardActions, CardContent, Drawer, Toolbar, List, Typography, Divider,
  IconButton, CssBaseline, Button, Stepper, Step, StepLabel, Grid, ButtonBase, CardActionArea,
  CardMedia, CardHeader, Box, FormControlLabel, Switch, Slide, Modal, Backdrop, Fade,
  Container, Paper, ButtonGroup
} from "@material-ui/core"
import { makeStyles, useTheme } from '@material-ui/core/styles'

import Layout from "../components/layout"
import SEO from "../components/seo"

import PhoneIcon from '@material-ui/icons/Phone'
import EmailIcon from '@material-ui/icons/Email'

import logo from "../images/HighviewWhite.png"

const contactStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#fff',

  },
  titleText: {
    textAlign: "center"
  },
  bodyText: {
    textAlign: "center"

  },
  divider: {
    backgroundColor: '#f58d02'
  },
  buttonGroup: {
    alignSelf: 'center'
  },
  logoImg:{
    height:'40rem',
  }
}))

function Contact(props: PageProps) {
  const contactClasses = contactStyles();

  return (
    <Layout>
      <SEO title="Contact" />
      <Container><br /></Container>
      <Container className={contactClasses.root}>
        <img className={contactClasses.logoImg} src={logo} />
        <Container>
          <Typography className={contactClasses.titleText}>
            Contact Us Today
    </Typography>
          <Divider className={contactClasses.divider} variant="middle" />

          <Typography className={contactClasses.bodyText} variant="body1"  >
            High View Construction
               </Typography>
          <Typography className={contactClasses.bodyText} variant="body2"  >
            Gilberto Sanchez | Owner
                </Typography>

          <ButtonGroup
            orientation="vertical"
            color="primary"
            aria-label="vertical outlined primary button group"
            className={contactClasses.buttonGroup}
          >
            <Button color="secondary" href="tel:720-325-9473" startIcon={<PhoneIcon />} >
              <Typography variant="caption" >
                720-325-9473
               </Typography>
            </Button>
            <Button color="secondary" href="mailto:gilbertosanchez@highview5280.com" startIcon={<EmailIcon />}>
              <Typography variant="caption" align="center" >
                Gilbertosanchez@highview5280.com
                        </Typography>
            </Button>
          </ButtonGroup>
        </Container>
      </Container>
    </Layout>
  )
}
export default Contact
