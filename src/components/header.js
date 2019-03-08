import PropTypes from "prop-types"
import React from "react"

import { home } from "../styles/"

const Header = ({ siteTitle }) => (

  <div>
    <home.contentName>
      <home.name>
        Kérian.
      </home.name>
    </home.contentName>

    <home.contentAbout>
      <home.about>
        <home.link to="about">About</home.link>
      </home.about>
    </home.contentAbout>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
