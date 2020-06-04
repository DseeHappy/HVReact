import React from "react"
import { Link } from "gatsby"
import {Helmet} from "react-helmet";
import Layout from "../components/layout"
import SEO from "../components/seo"
import Home from "../pages/Home"



const IndexPage = () => (
  <Layout>
    <Helmet>
    <meta charSet="utf-8" />
    
    </Helmet>
    <SEO title="Home High View Construction" />

    <Home />
  </Layout>
)

export default IndexPage
