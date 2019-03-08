import React from "react"
import { Link } from "gatsby"

import { home } from "../styles/"

import {TimelineLite, TweenLite, Power4} from 'gsap'

import PageTransition from 'gatsby-plugin-page-transitions';

import Layout from "../components/layout"
import SEO from "../components/seo"

import Canvas from '../components/Canvas'
import Social from '../components/Social'

class IndexPage extends React.Component {

  constructor(props) {
    super(props)
    this.myTween = new TimelineLite();
    this.titleProject = []
    this.descProject = null
  }

  componentDidMount(){
    setTimeout(() => {
      this.myTween.staggerTo(this.titleProject, 1, {y: 0, ease: Power4.easeOut, opacity: 1, rotation: 0}, 0.1);
      TweenLite.to(this.descProject, 1, {y: 0, ease: Power4.easeOut, opacity: 1, rotation: 0, delay: 0.7})
    }, 700);
  }
  


  render() {
    return (
      <PageTransition
      defaultStyle={{
      transition: 'opacity 500ms cubic-bezier(0.47, 0, 0.75, 0.72)',
      opacity: 0,
      position: 'absolute',
      width: '100%',
      }}
      transitionStyles={{
      entering: { opacity: 0 },
      entered: { opacity: 1 },
      exiting: { opacity: 0 },
      }}
      transitionTime={500}
  >
      <Layout>
        <SEO title="Home" keywords={[`freelance`, `front-end`, `react`, `student`, `hetic`]} />
        <Canvas/>
        <Social/>
        <home.containerProject>
          <div>
            <home.titleProject>
              <home.letterTitle ref={el => this.titleProject[0] = el}>M</home.letterTitle>
              <home.letterTitle ref={el => this.titleProject[1] = el}>a</home.letterTitle>
              <home.letterTitle ref={el => this.titleProject[2] = el}>y</home.letterTitle>  
              <home.letterTitle ref={el => this.titleProject[3] = el}>&nbsp;I</home.letterTitle>  
              <home.letterTitle ref={el => this.titleProject[4] = el}>&nbsp;L</home.letterTitle>
              <home.letterTitle ref={el => this.titleProject[5] = el}>e</home.letterTitle>
              <home.letterTitle ref={el => this.titleProject[6] = el}>a</home.letterTitle>
              <home.letterTitle ref={el => this.titleProject[7] = el}>v</home.letterTitle>
              <home.letterTitle ref={el => this.titleProject[8] = el}>e</home.letterTitle>
            </home.titleProject>
            <home.descProject ref={el => this.descProject = el}>School project</home.descProject>
          </div>
        </home.containerProject>
      </Layout>
  </PageTransition>
    )
  }
}

export default IndexPage
