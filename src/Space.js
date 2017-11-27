
import Actor from '@/Actor'

class Star {
	constructor() {
		const rand = Math.random()
		this.color = `hsla(179, 100%, ${ ~~(Math.random() * -50) + 100 }%, .4)`
		// this.len = rand * 5 + 4
		this.len = rand + 1
		this.vel = (1 - rand) * .5 + 1.5
		this.x = 0
		this.y = 0
	}
}

class Space extends Actor {
	constructor(color, size, vel) {
		super()

		this.stars = []
	}

	draw(ctx) {
		const stars = this.stars
		const starsp = []
		let star, i

		stars.push(this.createStar())

		ctx.save()

		i = stars.length
		while (--i >= 0) {
			star = stars[i]

			if (star.y < this.height) {
				starsp.push(star)
				star.y += star.vel

				// ctx.strokeStyle = star.color // this.getColor()\
				// ctx.lineWidth = .4
				ctx.fillStyle = star.color
				ctx.beginPath()
				ctx.arc(star.x, star.y, star.len, 0, Math.PI * 2)
				ctx.fill()
				// ctx.moveTo(star.x, star.y)
				// ctx.lineTo(star.x, star.y + star.len)
				ctx.stroke()
			}
		}

		this.stars = starsp

		ctx.restore()
	}

	createStar() {
		const star = new Star()
		star.x = Math.random() * this.width
		star.y = -star.len
		this.stars.push(star)

		return star
	}

	getColor() {
		return `hsl(30, 100%, ${ ~~(Math.random() * -50) + 100 }%)`
	}
}

export default Space