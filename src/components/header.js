import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import logo from "../images/tristec-icon.png"; // Ensure the path is correct
const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `#00B7EB`,
      marginBottom: `0.45rem`, // was `1.45rem`, 
    }}
  >
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        padding: '1.45rem 1.0875rem',
        maxWidth: '960px', // Common Gatsby container width, adjust as needed
        margin: '0 auto',  // Centers the content horizontally
        width: '100%',
        position: 'relative',
      }}
    >
      <Link
        to="/"
        style={{
          textDecoration: 'none',
          position: 'absolute',
          left: 0, // Flush against the left edge, no padding here
        }}
      >
        <img
          src={logo}
          alt="Tristec Logo"
          style={{
            height: '50px',
            margin: 0,
            display: 'block'
          }}
        />
      </Link>
      <h1
        style={{
          margin: 0,
          color: 'white',
          textAlign: 'center',
          paddingLeft: '60px', // Adjust based on logo width + desired spacing
          paddingRight: '60px', // Keeps centering balanced
          flex: '1' // Allows the title to take up remaining space
        }}
      >
        {siteTitle}
      </h1>
    </div>
  </header>
);
Header.propTypes = {
  siteTitle: PropTypes.string,
};
Header.defaultProps = {
  siteTitle: ``,
};
export default Header;
