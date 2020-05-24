/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import KeyboardVoiceIcon from '@material-ui/icons/KeyboardVoice';
import Icon from '@material-ui/core/Icon';
import SaveIcon from '@material-ui/icons/Save';

import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';


import Header from "./header"
import "./layout.css"

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

          <Container maxWidth="md">
            <div class="">
              <h4 className="">
                <i class="address card icon"></i>
                    Contact Us</h4>
              <h5 className=" ">High View Construction</h5>
              <p>Gilberto Sanchez | Owner    <a className="header" href="tel:720-325-9473">

                <div class="  " tabindex="0">
                  <div class=" ">
                    <i class=" "></i> Call Now
</div>
                  <div class=" ">
                    720-325-9473
</div>

<Button
        variant="contained"
        color="primary"
        size="large"
        startIcon={<SaveIcon />}
      >
        Save
      </Button>



                </div>
              </a>
                <a className="header" href="mailto:gilbertosanchez@highview5280.com">

                  <div class="" tabindex="0">
                    <div class=" ">
                      <i class="envelope icon"></i>
                    </div>
                    <div class="">
                      gilbertosanchez@highview5280.com
    </div>
                  </div>
                </a>
              </p>




            </div>
            <div class="">
              <h4 className="">
                <i class="suitcase icon"></i>
                    Gutter Services</h4>
              <div className="">
                <div className="">
                  <div class="">
                    <div class="">
                      <a>Commercial Services</a>

                    </div>
                  </div>
                </div>
                <div className="">
                  <div class="">
                    <div class="">
                      <a>Residential Services</a>

                    </div>
                  </div>
                </div>

                <div className="">
                  <div class="">
                    <div class="">
                      <a>Roofing Partnership Information</a>

                    </div>
                  </div>
                </div>

              </div>
            </div>
            <div class="">
              <h4 className="">   <i class="tag icon"></i>

                    Referrals</h4>
              <br />
              <p>Free installation of our basic gutter guards up to 100ft when you refer family &amp; friends to High View Construction if they spend $500 or more</p>
            </div>
          </Container>
          <h4 className="header">Proudly Serving all of Denver Metro Area and the surrounding area including</h4>

          <hr />
          <p className="">
            Aurora| Lakewood | Englewood | Westminster | Arvada | Commerce City |  Greenwood Village | Parker | Highlands Ranch | Littleton | Broomfield | Longmont | Colorado Springs | Boulder | Golden | Castle Rock
    </p>
          © {new Date().getFullYear()}, High View Construction

        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
