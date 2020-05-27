/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import { Button, Grid, CssBaseline, Typography, Container, Paper, MenuItem, MenuList, Grow, ClickAwayListener, ButtonGroup, Divider, Box }
  from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { Icon } from '@material-ui/core/Icon';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import PermContactCalendarIcon from '@material-ui/icons/PermContactCalendar';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';


import Header from "./header"
import "./layout.css"

import blue from '@material-ui/core/colors/blue';
import red from '@material-ui/core/colors/red';

const primary = red[500]; // #1a466a
const redAccent = red['A200']; // #e93444
const lightAccent = blue.A200; // #3a6e93 (alternative method)

const buttonStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));


const Layout = ({ children }) => {
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

  return (
    <>
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
          <Box justifyContent="center" display="flex" flexDirection="row" flexWrap="wrap" className={classes.root} >

            <Box alignSelf="center">
              <Typography variant="h6" align="center"
              >
                Contact Us
                  </Typography>
              <Divider variant="middle" />

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
                <Button href="tel:720-325-9473" startIcon={<PhoneIcon />} >
                  <Typography variant="caption" >
                    720-325-9473
               </Typography>
                </Button>
                <Button href="mailto:gilbertosanchez@highview5280.com" startIcon={<EmailIcon />}>
                  <Typography variant="caption" align="center" >
                    Gilbertosanchez@highview5280.com
                        </Typography>
                </Button>
              </ButtonGroup>
            </Box>

            <Divider orientation="vertical" flexItem />


            <Box alignSelf="center">
              <Typography variant="h6" align="center" >
                Gutter Services
          </Typography>
              <Divider variant="middle" />

              <ButtonGroup
                orientation="vertical"
                color="primary"
                aria-label="vertical contained primary button group"
                variant="text"
                align="center"
              >

                <Button align="center">
                  <Typography variant="caption" align="center" >
                    Commercial Services
             </Typography>
                </Button>
                <Button>
                  <Typography variant="caption" align="center" >
                    Residential Services
             </Typography>
                </Button>
                <Button>
                  <Typography variant="caption" align="center" >
                    Partnership Information
             </Typography>
                </Button>
              </ButtonGroup>
            </Box>

            <Divider orientation="vertical" flexItem />

            <Box alignSelf="center">

              <br />
              <Typography variant="body2" align="center" > <Button
                color="primary"
                aria-label="vertical contained  button "
                variant="h6"
                align="center">
                Referrals Program
               </Button>
                <Divider variant="middle" />

                <br />
            Free installation of our basic gutter guards up to 100ft when you refer family &amp; friends to High View Construction if they spend $500 or more</Typography>

            </Box>

          </Box>
          <br />
          <Box alignSelf="center">
            <Typography variant="body1"
              align="center"
            >
              Proudly Serving all of Denver Metro Area and the surrounding area including
             </Typography>

            <Divider variant="middle" />
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
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
