// Gatsby supports TypeScript natively!
import React from "react"
import { PageProps, Link } from "gatsby"
import {
  AppBar, Card, CardActions, CardContent, Drawer, Toolbar, List, Typography, Divider,
  IconButton, CssBaseline, Button, Stepper, Step, StepLabel, Grid, ButtonBase, CardActionArea,
  CardMedia, CardHeader, Box, FormControlLabel, Switch, Slide, Modal, Backdrop, Fade, Container
} from "@material-ui/core"
import { makeStyles, useTheme } from '@material-ui/core/styles';

import mainImage from "../images/Photo_Product_13.jpg"
import lfblastershield from '../images/DoneRight_Partnerpng.png'

import Layout from "../components/layout"
import SEO from "../components/seo"
const centerContent = makeStyles({
  root: {
      marginTop: '0',
      backgroundColor: '#398',
  },
  Container: {

  },

});
function Residential(props: PageProps) {
  const centerClasses =centerContent();

  return (
    <Layout>
      <SEO title="Residential Services" />
      <Container maxWidth="xl" className={centerContent.root}>
        <img src={mainImage} />
        <Container  >
          <Typography>
            <img src={lfblastershield} />

          Gutter Guards
        </Typography>
          <br />
          <Typography>
            As a Done Right Partner we are certified to install your LeafBlasterPro Gutter Guards.
        </Typography>
        </Container>
      </Container>
    </Layout>
  )
}

export default Residential
