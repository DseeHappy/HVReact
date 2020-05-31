import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Home from "../pages/Home"

const IndexPage = () => (
  <Layout>
    <SEO title="Home High View Construction" />
   
    <Home/>
  </Layout>
)

export default IndexPage
