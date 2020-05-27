/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import { Button, Grid, CssBaseline, Typography, Container, Paper, MenuItem, MenuList, Grow, ClickAwayListener, ButtonGroup, Divider }
  from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import KeyboardVoiceIcon from '@material-ui/icons/KeyboardVoice';
import { Icon } from '@material-ui/core/Icon';
import SaveIcon from '@material-ui/icons/Save';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';

import Header from "./header"
import "./layout.css"

import blue from '@material-ui/core/colors/blue';
import red from '@material-ui/core/colors/red';

const primary = red[500]; // #1a466a
const redAccent = red['A200']; // #e93444
const lightAccent = blue.A200; // #3a6e93 (alternative method)


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

          <Grid container spacing={3}>
            <Grid item xs={12} md={4} spacing={3}>
              <Typography variant="">
                Contact Us
                      </Typography>

              <Typography >
                High View Construction
              </Typography>
              <Typography variant="caption" >
                Gilberto Sanchez | Owner
              </Typography>
              <a className="header" href="mailto:gilbertosanchez@highview5280.com">

                <ButtonGroup variant="contained" color="primary" aria-label="split button"
                >
                  <Button startIcon={<EmailIcon />}></Button>
                  <Typography variant="" >
                    Gilbertosanchez@highview5280.com
                                </Typography>
                </ButtonGroup>
              </a>

              <a className="header" href="tel:720-325-9473">

                <ButtonGroup variant="contained" color="primary" aria-label="split button"
                >
                  <Button startIcon={<PhoneIcon />} ></Button>
                  <Typography variant="caption" >
                    720-325-9473
                  </Typography>
                </ButtonGroup>
              </a>






            </Grid>
            <Grid item xs={12} md={4} spacing={3}>
              <Grid>

                <Typography variant="caption" >
                  Gutter Services
                </Typography>

                <ButtonGroup
                  orientation="vertical"
                  color="primary"
                  aria-label="vertical contained primary button group"
                  variant="text"
                >

                  <Button>
                    <Typography variant="caption" >
                      Commercial Services
                 </Typography>
                  </Button>
                  <Button>
                    <Typography variant="caption" >
                      Residential Services
                 </Typography>
                  </Button>
                  <Button>
                    <Typography variant="caption" >
                      Partnership Information
                 </Typography>
                  </Button>
                </ButtonGroup>
              </Grid>

            </Grid>
            <Grid item xs={12} md={4} spacing={3}>
              <Button
                orientation="vertical"
                color="primary"
                aria-label="vertical contained  button "
                variant="text">
                Referrals Program
              </Button>

              <br />
              <Typography >Free installation of our basic gutter guards up to 100ft when you refer family &amp; friends to High View Construction if they spend $500 or more</Typography>

            </Grid>
          </Grid>
          <Paper>
            <Container>
              <Typography variant="">
                Proudly Serving all of Denver Metro Area and the surrounding area including
             </Typography>

              <Divider variant="middle" />
              <Typography
                variant="caption"
                display="block"
              >
                Aurora| Lakewood | Englewood | Westminster | Arvada | Commerce City |  Greenwood Village | Parker | Highlands Ranch | Littleton | Broomfield | Longmont | Colorado Springs | Boulder | Golden | Castle Rock
             </Typography>
              <Typography variant="caption" >
                © {new Date().getFullYear()}, High View Construction
             </Typography>
            </Container>
          </Paper>


        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
