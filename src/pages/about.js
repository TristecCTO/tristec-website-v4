import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"

const About = () => (
  <Layout>
    <h1>About Us</h1>
 <p>Established in May 2002, Tristec Ltd is a technology consultancy working with clients from financial, government, compliance and entertainment industries. With over three decades of experience, we are committed to delivering exceptional solutions tailored to meet the unique needs of our clients.</p>
  </Layout>
)
export const Head = () => <Seo title="About" />

export default About