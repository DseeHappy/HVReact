// Gatsby supports TypeScript natively!
import React from "react"
import { PageProps, Link } from "gatsby"

import mainImage from "../images/Photo_Product_13.jpg"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Residential = (props: PageProps) => (
  <Layout>
    <SEO title="Residential Services" />
    <img src={mainImage}/>
  </Layout>
)

export default Residential
