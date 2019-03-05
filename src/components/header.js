import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import { global } from "../styles/"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `rebeccapurple`,
      height: 100
    }}
  >
    <global.name>
      Kérian.
    </global.name>
    
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
