import Point from './Point'

import { curve } from 'cardinal-spline-js/src/curve_func'

export default class Round {
    constructor(_key, _cursor, _context, _sizes, _points) {
        this.id = _key
        this.cursor = _cursor
        this.sizes = _sizes
        this.context = _context
        this.points = _points
        this.pointsInitial = []
        
        for(let i = 0; i < this.points.length;i++) {
            if(i % 2 === 0) {
                let big;
                this.points.length >= 20 ? big = true : big = false
                this.pointsInitial.push(new Point(this.points[i], this.points[i+1], this.context, this.sizes, this.cursor, big))
            }
        }
        
        this.speed = {}
        this.color = `#FFF7C7`;
        this.v = 0
    }

    draw() {
        this.pointsInitial.map((_point, i) => {
            const idX = i * 2
            const idY = i * 2 + 1
            this.points[idX] += _point.coordX()
            this.points[idY] += _point.coordY()
        })



        this.context.globalCompositeOperation = 'source-over'
        this.context.fillStyle = this.color;
        curve(this.context, this.points, 0.5, 80, true)
        this.context.closePath()
        this.context.fill();
    }
    
}
