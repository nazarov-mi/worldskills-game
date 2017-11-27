
import Actor from '@/Actor'

class Sprite extends Actor {
	constructor(src) {
		super()
		const image = new Image()

		image.onload = () => {
			this.w = image.naturalWidth
			this.h = image.naturalHeight
		}
		image.src = src

		this.image = image
	}

	draw(ctx) {
		const { image, matrix, w, h } = this

		ctx.save()
		ctx.setTransform(matrix.a, matrix.b, matrix.c, matrix.d, matrix.x, matrix.y)
		ctx.drawImage(image, 0, 0, w, h)
		ctx.restore()
	}
}

export default Sprite