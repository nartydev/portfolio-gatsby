import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import { global } from "../styles/"

const Header = ({ siteTitle }) => (

  <global.contentName>
    <global.name>
      Kérian.
    </global.name>
  </global.contentName>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
