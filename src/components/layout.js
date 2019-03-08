/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import posed, { PoseGroup } from 'react-pose'

import Header from "./header"
import { global } from '../styles/index'

const Transition = posed.div({
  enter: { opacity: 1, delay: 300, beforeChildren: true },
  exit: { opacity: 0 },
})

const Layout = ({ props, children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <global.GlobalStyle/>
        <Header siteTitle={data.site.siteMetadata.title} />
        <PoseGroup>
            <Transition key={0}>
              {children}
            </Transition>
        </PoseGroup>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
