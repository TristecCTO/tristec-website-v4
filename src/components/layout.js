/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import React, { useState } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql, Link } from "gatsby"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div className={`burger-menu ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <div className="burger-bar"></div>
        <div className="burger-bar"></div>
        <div className="burger-bar"></div>
      </div>
      <div className={`fullscreen-menu ${isMenuOpen ? 'open' : ''}`}>
        <nav className="fullscreen-nav">
          <Link 
            to="/" 
            className="nav-link"
            activeClassName="active"
            onClick={toggleMenu}
          >
            Home
          </Link>
          <Link 
            to="/about" 
            className="nav-link"
            activeClassName="active"
            onClick={toggleMenu}
          >
            About
          </Link>
          <Link 
            to="/services" 
            className="nav-link"
            activeClassName="active"
            onClick={toggleMenu}
          >
            Services
          </Link>
          <Link 
            to="/contact" 
            className="nav-link"
            activeClassName="active"
            onClick={toggleMenu}
          >
            Contact
          </Link>
        </nav>
      </div>
      <nav>
        <Link 
          to="/" 
          className="nav-link"
          activeClassName="active"
        >
          Home
        </Link>
        <Link 
          to="/about" 
          className="nav-link"
          activeClassName="active"
        >
          About
        </Link>
        <Link 
          to="/services" 
          className="nav-link"
          activeClassName="active"
        >
          Services
        </Link>
        <Link 
          to="/contact" 
          className="nav-link"
          activeClassName="active"
        >
          Contact
        </Link>
      </nav>
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>
      </div>
      <footer
        style={{
          marginTop: `2rem`,
          background: '#00B7EB',
          marginBottom: `1.45rem`,
          color: `white`,
          textAlign: 'center',
        }}
      >
        © {new Date().getFullYear()} Tristec Ltd
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
