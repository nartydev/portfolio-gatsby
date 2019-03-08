import PropTypes from "prop-types"
import React from "react"

import { global } from "../styles/"

const Header = ({ siteTitle }) => (

  <global.container>
    <global.contentName>
      <global.name>
        Kérian.
      </global.name>
    </global.contentName>

    <global.contentAbout>
      <global.about>
        <global.link to="about">About</global.link>
      </global.about>
    </global.contentAbout>
  </global.container>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
