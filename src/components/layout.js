/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { Helmet } from "react-helmet"

import {
  Button, Grid, CssBaseline, Typography, Container, Paper,
  MenuItem, MenuList, Grow, ClickAwayListener, ButtonGroup,
  Divider, Box, Zoom, Fab, useScrollTrigger, Toolbar
}
  from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/core/styles';

import { Icon } from '@material-ui/core/Icon';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import PermContactCalendarIcon from '@material-ui/icons/PermContactCalendar';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';


import Header from "./header"
import "./layout.css"

const theme = createMuiTheme({
  palette: {
    primary: { main: '#142A4F', contrastText: '#F58D02' },
    secondary: { main: '#F58D02', contrastText: '#142A4F' }
  }
});


const footerStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#142A4F',

  },
  bottomSection: {
    backgroundColor: '#42527b',
    padding: '.8rem',
    margin: '0rem',
    color: '#ffffff'

  },
  divider: {
    backgroundColor: '#F58D02',

  },
  boxOuter: {

  },
  boxInner: {
    padding: '.5rem',
    margin: '2rem',
    color: '#ffffff'
  },


}))

const buttonStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));


function Layout({ children, props }) {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  const classes = buttonStyles();
  const footerClasses = footerStyles();
  return (
    <div className={footerClasses.root}>
      <Helmet>

      </Helmet>
      <ThemeProvider theme={theme}>

        <Header siteTitle={data.site.siteMetadata.title} />

        <main>{children}</main>
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `0 1.0875rem 1.45rem`,
          }}
        >

       
          <footer
          >
            <CssBaseline />
            <br />
            <Box className={footerClasses.boxOuter} justifyContent="center" display="flex" flexDirection="row" flexWrap="wrap"  >

              <Box className={footerClasses.boxInner} alignSelf="center">
                <Typography variant="h6" align="center"
                >
                  Contact Us
                  </Typography>
                <Divider className={footerClasses.divider} variant="middle" />

                <Typography variant="body1" align="center" >
                  High View Construction
               </Typography>
                <Typography variant="body2" align="center" >
                  Gilberto Sanchez | Owner
                </Typography>

                <ButtonGroup
                  orientation="vertical"
                  color="primary"
                  aria-label="vertical outlined primary button group"
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
              </Box>

              <Divider className={footerClasses.divider} orientation="vertical" flexItem />


              <Box className={footerClasses.boxInner} alignSelf="center">
                <Typography variant="h6" align="center" >
                  Gutter Services
          </Typography>
                <Divider className={footerClasses.divider} variant="middle" />

                <ButtonGroup
                  orientation="vertical"
                  color="primary"
                  aria-label="vertical contained primary button group"
                  variant="text"
                  align="center"
                >

                  <Button color="secondary" align="center">
                    <Typography variant="caption" align="center" >
                      Commercial Services
             </Typography>
                  </Button>
                  <Button color="secondary">
                    <Typography variant="caption" align="center" >
                      Residential Services
             </Typography>
                  </Button>
                  <Button color="secondary">
                    <Typography variant="caption" align="center" >
                      Contact Us
             </Typography>
                  </Button>
                </ButtonGroup>
              </Box>

              <Divider className={footerClasses.divider} orientation="vertical" flexItem />

              <Box className={footerClasses.boxInner} alignSelf="center">

                <br />
                <Typography variant="body2" align="center" > <Button
                  color="secondary"
                  aria-label="Referrals Program "
                >
                  Referrals Program
               </Button>
                  <Divider className={footerClasses.divider} variant="middle" />

                  <br />
            Free installation of our basic gutter guards up to 100ft when you refer family &amp; friends to High View Construction if they spend $500 or more</Typography>

              </Box>

            </Box>
            <br />
            <Box className={footerClasses.bottomSection} alignSelf="center">
              <Typography variant="body1"
                align="center"
              >
                Proudly Serving all of Denver Metro Area and the surrounding area including
             </Typography>

              <Divider className={footerClasses.divider} variant="middle" />
              <Typography
                variant="caption"
                display="block"
                align="center"
              >
                Aurora| Lakewood | Englewood | Westminster | Arvada | Commerce City |  Greenwood Village | Parker | Highlands Ranch | Littleton | Broomfield | Longmont | Colorado Springs | Boulder | Golden | Castle Rock
             </Typography>
              <br />
              <Typography align="center" variant="caption" >
                © {new Date().getFullYear()}, High View Construction All Rights Reserved. Website &amp; SEO by Daniel Sanchez
             </Typography>
              <br />
            </Box>

          </footer>
        </div>
      </ThemeProvider>
    </div>)
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
