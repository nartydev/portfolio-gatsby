import React, { Component } from "react"

import RandomRound from "../controller/RandomRound"

class Canvas extends Component {
  constructor(props) {
    super(props)
    this.state = { width: 2000, height: 2000 }
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
      speedMouseY: 0,
    }

    /* Particles */
    this.rounds = []
    this.bigRounds = []
  }

  componentWillMount() {
    if (typeof global.window !== "undefined") {
      this.setState({ width: global.window.innerWidth, height: global.window.innerHeight })
    }
    this.roundPoint = [
      {
        contentPoint: [
          -65.37 - 50,
          -301.58 + this.state.height + 50,
          72.99 - 50,
          -299.94 + this.state.height + 50,
          228.32 - 50,
          -207.78 + this.state.height + 50,
          296.09 - 50,
          -87.13 + this.state.height + 50,
          293.94 - 50,
          93.46 + this.state.height + 50,
          223.34 - 50,
          212.46 + this.state.height + 50,
          65.86 - 50,
          300.9 + this.state.height + 50,
          -72.51 - 50,
          299.26 + this.state.height + 50,
          -227.83 - 50,
          207.1 + this.state.height + 50,
          -295.6 - 50,
          86.45 + this.state.height + 50,
          -293.45 - 50,
          -94.14 + this.state.height + 50,
          -222.85 - 50,
          -213.15 + this.state.height + 50,
        ],
      },
      {
        contentPoint: [
          -65.37 + this.state.width + 50,
          -301.58 - 50,
          72.99 + this.state.width + 50,
          -299.94 - 50,
          228.32 + this.state.width + 50,
          -207.78 - 50,
          296.09 + this.state.width + 50,
          -87.13 - 50,
          293.94 + this.state.width + 50,
          93.46 - 50,
          223.34 + this.state.width + 50,
          212.46 - 50,
          65.86 + this.state.width + 50,
          300.9 - 50,
          -72.51 + this.state.width + 50,
          299.26 - 50,
          -227.83 + this.state.width + 50,
          207.1 - 50,
          -295.6 + this.state.width + 50,
          86.45 - 50,
          -293.45 + this.state.width + 50,
          -94.14 - 50,
          -222.85 + this.state.width + 50,
          -213.15 - 50,
        ],
      },
      {
        contentPoint: [
          -10.86 + this.state.width - 500,
          -18.42 + 100,
          9.88 + this.state.width - 500,
          -18.42 + 100,
          20.26 + this.state.width - 500,
          -0.46 + 100,
          9.88 + this.state.width - 500,
          17.5 + 100,
          -10.86 + this.state.width - 500,
          17.5 + 100,
          -21.23 + this.state.width - 500,
          -0.46 + 100,
        ],
      },
      {
        contentPoint: [
          -15 + 300,
          -30 + this.state.height - 150,
          15 + 300,
          -30 + this.state.height - 150,
          34 + 300,
          0 + this.state.height - 150,
          15 + 300,
          30 + this.state.height - 150,
          -15 + 300,
          30 + this.state.height - 150,
          -34 + 300,
          0 + this.state.height - 150,
        ],
      },
    ]
  }

  componentDidMount() {
    /* Set canvas */
    this.setState({ width: global.window.innerWidth, height: global.window.innerHeight })
    this.updateCanvas()
    /* Resize canvas */
    this.allPoint = [
      {
        contentPoint: [
          this.state.width / 2,
          this.state.height / 2,
          this.state.width / 2,
          this.state.height / 2,
          this.state.width / 2,
          this.state.height / 2,
          this.state.width / 2,
          this.state.height / 2,
          this.state.width / 2,
          this.state.height / 2,
          this.state.width / 2,
          this.state.height / 2,
          this.state.width / 2,
          this.state.height / 2,
          this.state.width / 2,
          this.state.height / 2,
          this.state.width / 2,
          this.state.height / 2,
          this.state.width / 2,
          this.state.height / 2,
          this.state.width / 2,
          this.state.height / 2,
          this.state.width / 2,
          this.state.height / 2,
          this.state.width / 2,
          this.state.height / 2,
          this.state.width / 2,
          this.state.height / 2,
        ],
      },
    ]
    window.addEventListener("resize", () => this.resize())
    window.addEventListener("mousewheel", e => this.showProjects(e))

    /* Set mouse */
    window.addEventListener("mousemove", e => this.detectMouse(e))

    this.mouseSpeed()

    /* Set loop */
    this.loop()
    this.resize()

    /* Add shapes */
    /*this.roundPoint.map((_round, _key) => {
        const round = new Round(_key, this.cursor, this.ctx, this.state, _round.contentPoint)
        this.rounds.push(round)
    })*/
    this.allPoint.map((_round, _key) => {
      const round = new RandomRound(
        _key,
        this.cursor,
        this.ctx,
        this.state,
        _round.contentPoint
      )
      this.bigRounds.push(round)
    })
  }

  showProjects(_event) {
    if (_event.deltaY > 30) {
      this.bigRounds[0].makeThis()
    }
    if (_event.deltaY < -30) {
      console.log(_event.deltaY)
      this.bigRounds[0].makeInverse()
    }
  }

  detectMouse(_event) {
    this.cursor.x = _event.clientX
    this.cursor.y = _event.clientY

    if (this.cursor.xPage < _event.pageX) this.cursor.directionX = 1
    else if (this.cursor.xPage > _event.pageX) this.cursor.directionX = -1
    else this.cursor.directionX = 0

    if (this.cursor.yPage < _event.pageY) this.cursor.directionY = 1
    else if (this.cursor.yPage > _event.pageY) this.cursor.directionY = -1
    else this.cursor.directionY = 0

    this.cursor.xPage = _event.pageX
    this.cursor.yPage = _event.pageY
  }

  componentWillUnmount() {
    global.window.removeEventListener("mousemove", this.detectMouse)
    global.window.removeEventListener("mousewheel", this.showProjects)
    global.window.removeEventListener("resize", this.resize)
  }

  updateCanvas() {
    this.ctx = this.refs.canvas.getContext("2d")
  }

  mouseSpeed() {
    this.cursor.speedMouseX = this.cursor.xPage - this.cursor.lastX
    this.cursor.speedMouseY = this.cursor.yPage - this.cursor.lastY

    this.cursor.lastX = this.cursor.xPage
    this.cursor.lastY = this.cursor.yPage

    setTimeout(() => this.mouseSpeed(), 50)
  }

  /* Resize */

  resize() {
    this.setState({ height: window.innerHeight, width: window.innerWidth })
    this.ctx.width = this.state.width
    this.ctx.height = this.state.height
    console.log("ok resize")
  }

  loop() {
    window.requestAnimationFrame(() => {
      this.loop()
    })

    // Clear
    this.ctx.fillStyle = "#fff"
    this.ctx.fillRect(0, 0, this.state.width, this.state.height)

    for (let round of this.rounds) {
      round.draw()
    }

    for (let round of this.bigRounds) {
      round.draw()
    }
  }

  render() {
    return (
      <canvas
        ref="canvas"
        width={this.state.width}
        height={this.state.height}
      />
    )
  }
}

export default Canvas
