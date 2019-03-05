import React from "react"
import { Link } from "gatsby"

import { home } from "../styles/"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Canvas from '../components/Canvas'

class IndexPage extends React.Component {

  constructor(props) {
    super(props)
    console.log(home.container)
    this.state = { x: 0, y: 0 };
  }

  onMouseMove(e) {
    this.setState({ x: e.screenX, y: e.screenY });
  }

  render() {
    return (
      <Layout>
        <SEO title="Home" keywords={[`freelance`, `front-end`, `react`, `student`, `hetic`]} />
        <home.container onMouseMove={this.onMouseMove.bind(this)}>
        <Canvas/>

        </home.container>
        
        <Link to="/page-2/">Go to page 2</Link>
      </Layout>
    )
  }
}

export default IndexPage
