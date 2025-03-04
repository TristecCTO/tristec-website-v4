import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"


const IndexPage = () => (
  <Layout>
    

    <h1>About Us</h1>
    <p>Established in May 2002, Tristec Ltd is a technology consultancy working with clients from financial, government, compliance and entertainment industries. With over three decades of experience, we are committed to delivering exceptional solutions tailored to meet the unique needs of our clients.</p>
    
    <h1>Our Services</h1>
    <p>Consultancy services including, CTO, engineering and technology programme delivery. We pride ourselves on offering bespoke services that drive innovation and efficiency. </p>
    
     <h1>Contact Us</h1>
     <p><strong>Phone:</strong> 07702 292473</p>
     <p><strong>Email:</strong> <a href="mailto:sales@tristec.co.uk">sales@tristec.co.uk</a></p>
     <p><strong>Website:</strong> <a href="http://tristec.co.uk">tristec.co.uk</a></p>
     
  </Layout>
)
  export const Head = () => <Seo title="Home" />

export default  IndexPage
