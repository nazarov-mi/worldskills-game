
import Actor from './Actor'

class Sprite extends Actor {
	constructor(rx, ry, rw, rh) {
		super()

		this.region = {
			x: rx,
			y: ry,
			width: rw,
			height: rh
		}

		this.w = rw
		this.h = rh
	}

	draw(ctx, atlas) {
		const { region, matrix, w, h } = this

		ctx.save()
		ctx.setTransform(matrix.a,
		 matrix.b, matrix.c, matrix.d, matrix.x, matrix.y)
		ctx.strokeRect(0, 0, w, h)
		ctx.drawImage(atlas, region.x, region.y, region.width, region.height, 0, 0, w, h)
		ctx.restore()
	}
}

export default Sprite