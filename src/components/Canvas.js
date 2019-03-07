import React, { Component } from "react"

import Round from '../controller/Round'
import RandomRound from '../controller/RandomRound'

class Canvas extends Component {
  constructor(props) {
    super(props)
    this.sizes = { width: 800, height: 800 }
    this.ctx = undefined

    this.cursor = {
        x: 0,
        y: 0,
        xPage: 0,
        yPage: 0,
        lastX: 0,
        lastY: 0,
        directionX: 0,
        directionY: 0,
        speedMouseX: 0,
        speedMouseY: 0
    }

    /* Particles */
    this.rounds = []
    this.bigRounds = []

  }
  
  componentWillMount() {
    if (typeof window !== 'undefined') { 
      this.sizes.width = window.innerWidth
      this.sizes.height = window.innerHeight
    }
        this.roundPoint = [
          {
            contentPoint: [
              -65.37 - 50,
              -301.58 + this.sizes.height + 50,
              72.99 - 50,
              -299.94 + this.sizes.height + 50,
              228.32 - 50,
              -207.78 + this.sizes.height + 50,
              296.09 - 50,
              -87.13 + this.sizes.height + 50,
              293.94 - 50,
              93.46 + this.sizes.height + 50,
              223.34 - 50,
              212.46 + this.sizes.height + 50,
              65.86 - 50,
              300.9 + this.sizes.height + 50,
              -72.51 - 50,
              299.26 + this.sizes.height + 50,
              -227.83 - 50,
              207.1 + this.sizes.height + 50,
              -295.6 - 50,
              86.45 + this.sizes.height + 50,
              -293.45 - 50,
              -94.14 + this.sizes.height + 50,
              -222.85 - 50,
              -213.15 + this.sizes.height + 50,
            ],
          },
          {
            contentPoint: [
              -65.37 + this.sizes.width + 50,
              -301.58 - 50,
              72.99 + this.sizes.width + 50,
              -299.94 - 50,
              228.32 + this.sizes.width + 50,
              -207.78 - 50,
              296.09 + this.sizes.width + 50,
              -87.13 - 50,
              293.94 + this.sizes.width + 50,
              93.46 - 50,
              223.34 + this.sizes.width + 50,
              212.46 - 50,
              65.86 + this.sizes.width + 50,
              300.9 - 50,
              -72.51 + this.sizes.width + 50,
              299.26 - 50,
              -227.83 + this.sizes.width + 50,
              207.1 - 50,
              -295.6 + this.sizes.width + 50,
              86.45 - 50,
              -293.45 + this.sizes.width + 50,
              -94.14 - 50,
              -222.85 + this.sizes.width + 50,
              -213.15 - 50,
            ],
          },
          {
            contentPoint: [
              -10.86 + this.sizes.width - 500,
              -18.42 + 100,
              9.88 + this.sizes.width - 500,
              -18.42 + 100,
              20.26 + this.sizes.width - 500,
              -0.46 + 100,
              9.88 + this.sizes.width - 500,
              17.5 + 100,
              -10.86 + this.sizes.width - 500,
              17.5 + 100,
              -21.23 + this.sizes.width - 500,
              -0.46 + 100,
            ],
          },
          {
            contentPoint: [
              -15 + 300,
              -30 + this.sizes.height - 150,
              15 + 300,
              -30 + this.sizes.height - 150,
              34 + 300,
              0 + this.sizes.height - 150,
              15 + 300,
              30 + this.sizes.height - 150,
              -15 + 300,
              30 + this.sizes.height - 150,
              -34 + 300,
              0 + this.sizes.height - 150,
            ],
          },
        ]
}

componentDidMount() {
    /* Set canvas */
    this.updateCanvas()

    /* Resize canvas */
    this.resize()
    this.allPoint = [
      {
        contentPoint: [
          -507 + this.sizes.width / 2,
          -210 + this.sizes.height / 2,
          -340 + this.sizes.width / 2,
          -284 + this.sizes.height / 2,
          -111 + this.sizes.width / 2,
          -232 + this.sizes.height / 2,
          119 + this.sizes.width / 2,
          -284 + this.sizes.height / 2,
          332 + this.sizes.width / 2,
          -232 + this.sizes.height / 2,
          562 + this.sizes.width / 2,
          -284 + this.sizes.height / 2,
          497 + this.sizes.width / 2,
          17 + this.sizes.height / 2,
          562 + this.sizes.width / 2,
          273 + this.sizes.height / 2,
          332 + this.sizes.width / 2,
          216 + this.sizes.height / 2,
          119 + this.sizes.width / 2,
          259 + this.sizes.height / 2,
          -111 + this.sizes.width / 2,
          216 + this.sizes.height / 2,
          -340 + this.sizes.width / 2,
          284 + this.sizes.height / 2,
          -563 + this.sizes.width / 2,
          216 + this.sizes.height / 2,
          -507 + this.sizes.width / 2,
          17 + this.sizes.height / 2,
        ],
      },
    ]
    window.addEventListener("resize", () => this.resize()) 
    
    /* Set mouse */
    window.addEventListener('mousemove', (_event) => {
        this.cursor.x = _event.clientX
        this.cursor.y = _event.clientY
      
        if (this.cursor.xPage < _event.pageX)
          this.cursor.directionX = 1;
        else if (this.cursor.xPage > _event.pageX)
          this.cursor.directionX = -1;
        else
          this.cursor.directionX = 0;
      
        if (this.cursor.yPage < _event.pageY)
          this.cursor.directionY = 1;
        else if (this.cursor.yPage > _event.pageY)
          this.cursor.directionY = -1;
        else
          this.cursor.directionY = 0;
      
        this.cursor.xPage = _event.pageX
        this.cursor.yPage = _event.pageY
      })

    this.mouseSpeed()

    /* Set loop */
    this.loop()

    /* Add shapes */
    /*this.roundPoint.map((_round, _key) => {
        const round = new Round(_key, this.cursor, this.ctx, this.sizes, _round.contentPoint)
        this.rounds.push(round)
    })*/
    this.allPoint.map((_round, _key) => {
      const round = new RandomRound(
        _key,
        this.cursor,
        this.ctx,
        this.sizes,
        _round.contentPoint
      )
      this.bigRounds.push(round)
    })
  }

    updateCanvas() {
        this.ctx = this.refs.canvas.getContext("2d")
    }

    mouseSpeed() {
        this.cursor.speedMouseX = this.cursor.xPage - this.cursor.lastX;
        this.cursor.speedMouseY = this.cursor.yPage - this.cursor.lastY
    
        this.cursor.lastX = this.cursor.xPage;
        this.cursor.lastY = this.cursor.yPage;
  
        setTimeout(() => this.mouseSpeed(), 50);
    }

  /* Resize */

  resize() {
    this.sizes.width = window.innerWidth
    this.sizes.height = window.innerHeight
    this.ctx.width = this.sizes.width
    this.ctx.height = this.sizes.height
    console.log(this.ctx)
  }

  loop() {
    window.requestAnimationFrame(() => {this.loop()})
  
    
    // Clear
    this.ctx.fillStyle = '#fff'
    this.ctx.fillRect(0, 0, this.sizes.width, this.sizes.height)
    
    
    for(let round of this.rounds) {
      round.draw()
    }
    
    for(let round of this.bigRounds) {
      round.draw()
    }
  
  }
  
  render() {
    return (
      <canvas
        ref="canvas"
        width={this.sizes.width}
        height={this.sizes.height}
      />
    
    )
  }
}

export default Canvas
