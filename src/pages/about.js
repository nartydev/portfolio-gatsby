import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

class About extends React.Component {
    render() {
        return (
            <Layout>
                <SEO title="About" keywords={[`freelance`, `front-end`, `react`, `student`, `hetic`]} />
                About
                <Link to="/">Home</Link>
            </Layout>
        );
    }
}

export default About;