import Point from './Point'
import { TweenLite, Ease } from 'gsap'
import { curve } from 'cardinal-spline-js/src/curve_func'
import url from '../assets/user.jpg'

export default class RandomRound {
    constructor(_key, _cursor, _context, _sizes, _points) {
        this.id = _key
        this.cursor = _cursor
        this.sizes = _sizes
        this.context = _context
        this.points = _points
        this.pointsInitial = []
        this.allPoint = [
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
          ]
        for(let i = 0; i < this.points.length;i++) {
            if(i % 2 === 0) {
                let big;
                this.points.length >= 20 ? big = true : big = false
                this.pointsInitial.push(new Point(this.sizes.width/2, this.sizes.height/2, this.allPoint[i], this.allPoint[i+1], this.context, this.sizes, this.cursor, big))
                console.log(this.pointsInitial)
            }
        }
        
        this.speed = {}
        this.color = `#FFF7C7`;
        this.v = 0
        this.img = new Image()
        this.img.src = url;

    }

    animateStart(){
        for(let _point of this.pointsInitial) {
            console.log(_point)
            TweenLite.to(_point, 2, {
                x: _point.xi,
                y: _point.yi,
                ease: Ease.easeInOut
            })
           
        }
    }

    draw() {
        this.pointsInitial.map((_point, i) => {
            const idX = i * 2
            const idY = i * 2 + 1
            this.points[idX] += _point.coordX()
            this.points[idY] += _point.coordY()
        })

        this.context.drawImage(this.img, 0,0, this.sizes.width, this.sizes.height);
        
        
        this.context.globalCompositeOperation = 'destination-atop'
        this.context.fillStyle = this.color;
        this.context.beginPath();
        curve(this.context, this.points, 0.0, 10, true)
        this.context.closePath()
        this.context.fill();
        this.context.globalCompositeOperation = 'source-over'
    }

    makeThis() {
        for(let _point of this.pointsInitial) {
            TweenLite.to(_point, 2, {
                x: 0 + this.sizes.width/2,
                y: 0 + this.sizes.height/2,
                ease: Ease.easeInOut
            })
           
        }
    }
    makeInverse() {
        for(let _point of this.pointsInitial) {
            _point.ix -= 0 - this.sizes.width/30;
            _point.iy -= 0 - this.sizes.height/30;
            _point.x = 0;
            _point.y = 0;
            console.log(_point)
        }
    }
    
}
