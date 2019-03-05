import React, { Component } from 'react';

class Canvas extends Component {
    constructor(props) {
        super(props)
        this.sizes = { width: 300, height: 300 }
        this.ctx = undefined;

        /* Particles */
        this.rounds = []
        this.bigRounds = []

        this.roundPoint = [
        { contentPoint: [-65.37 - 50, -301.58 + this.sizes.height + 50,
            72.99 - 50, -299.94 + this.sizes.height + 50,
            228.32 - 50, -207.78 + this.sizes.height + 50,
            296.09 - 50, -87.13 + this.sizes.height + 50,
            293.94 - 50, 93.46 + this.sizes.height + 50,
            223.34  - 50, 212.46 + this.sizes.height + 50,
            65.86  - 50, 300.9 + this.sizes.height + 50,
            -72.51 - 50, 299.26 + this.sizes.height + 50,
            -227.83 - 50, 207.1 + this.sizes.height + 50,
            -295.6 - 50, 86.45 + this.sizes.height + 50,
            -293.45 - 50, -94.14 + this.sizes.height + 50,
            -222.85 - 50, -213.15 + this.sizes.height + 50,
            ]
        },
        { contentPoint: [-65.37 + this.sizes.width + 50, -301.58 - 50,
            72.99 + this.sizes.width + 50, -299.94 - 50,
            228.32 + this.sizes.width + 50, -207.78 - 50,
            296.09 + this.sizes.width + 50, -87.13 - 50,
            293.94 + this.sizes.width + 50, 93.46 - 50,
            223.34 + this.sizes.width + 50 , 212.46 - 50,
            65.86 + this.sizes.width + 50 , 300.9 - 50,
            -72.51 + this.sizes.width + 50, 299.26 - 50,
            -227.83 + this.sizes.width + 50, 207.1 - 50,
            -295.6 + this.sizes.width + 50, 86.45 - 50,
            -293.45 + this.sizes.width + 50, -94.14 - 50,
            -222.85 + this.sizes.width + 50, -213.15 - 50,
            ]
        },
        { contentPoint: [-10.86 + this.sizes.width - 500, -18.42 + 100,
            9.88 + this.sizes.width - 500, -18.42 + 100,
            20.26 + this.sizes.width - 500, -0.46 + 100,
            9.88 + this.sizes.width - 500, 17.5 + 100,
            -10.86 + this.sizes.width - 500, 17.5 + 100,
            -21.23 + this.sizes.width - 500 , -0.46 + 100,
            ]
        },
        { contentPoint: [-15+ 300, -30 + this.sizes.height - 150,
            15 + 300, -30 + this.sizes.height - 150,
            34 + 300, 0 + this.sizes.height - 150,
            15 + 300, 30 + this.sizes.height - 150,
            -15 + 300, 30 + this.sizes.height - 150,
            -34  + 300, 0 + this.sizes.height - 150,
            
            ]
        },
        ]

        this.allPoint = [
        { contentPoint: [-0+ this.sizes.width /2, -204 + this.sizes.height / 2,
            78+ this.sizes.width /2, -77 + this.sizes.height / 2,
            206 + this.sizes.width /2, -27 + this.sizes.height / 2,
            104 + this.sizes.width /2, 61 + this.sizes.height / 2,
            96 + this.sizes.width /2, 204 + this.sizes.height / 2,
            -21 + this.sizes.width /2, 131 + this.sizes.height / 2,
            -158 + this.sizes.width /2, 172 + this.sizes.height / 2,
            -151  + this.sizes.width /2, 33 + this.sizes.height / 2,
            -206  + this.sizes.width /2, -80 + this.sizes.height / 2,
            -65  + this.sizes.width /2, -106 + this.sizes.height / 2,
            
            ]
        },
        ] 
    }

    componentDidMount() {
        this.updateCanvas();
        window.addEventListener('resize', () => this.resize())
        this.resize()
    }
    
    updateCanvas() {
        this.ctx = this.refs.canvas.getContext('2d');
        
    }

/* Resize */

    resize() {
        console.log('ok')
        this.sizes.width = window.innerWidth
        this.sizes.height = window.innerHeight
        console.log(this.ctx)
        this.ctx.width = this.sizes.width
        this.ctx.height = this.sizes.height
    }

    render() {
        return (
            <canvas ref="canvas" width={this.sizes.width} height={this.sizes.height}/>
        );
    }
}

export default Canvas;