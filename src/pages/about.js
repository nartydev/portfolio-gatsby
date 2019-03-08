import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

class About extends React.Component {
    render() {
        return (
            <React.Fragment>
                <SEO title="About" keywords={[`freelance`, `front-end`, `react`, `student`, `hetic`]} />
                Abouthjkbvcvghb
                <Link to="/">Home</Link>
            </React.Fragment>
        );
    }
}

export default About;