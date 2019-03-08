import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import { global } from "../styles/"

const Header = ({ siteTitle }) => (

  <React.Fragment>
    <global.contentName>
      <global.name>
        Kérian.
      </global.name>
    </global.contentName>

    <global.contentAbout>
      <global.about>
        <Link to="about">About</Link>
      </global.about>
    </global.contentAbout>
  </React.Fragment>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
