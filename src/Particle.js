
import Actor from '@/Actor'

class Particle extends Actor {
	constructor(color) {
		super()

		this.color = color || '#000000'
	}

	draw(ctx) {
		const { matrix, w, h } = this

		ctx.save()
		ctx.setTransform(matrix.a, matrix.b, matrix.c, matrix.d, matrix.x, matrix.y)
		ctx.fillStyle = this.color
		ctx.fillRect(0, 0, w, h)
		ctx.restore()
	}
}

export default Particle