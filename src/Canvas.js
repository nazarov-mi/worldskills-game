
class Canvas {
	constructor(parent, w, h, bgColor) {
		const canvas = document.createElement('canvas')
		const ctx = canvas.getContext('2d')

		canvas.width = w
		canvas.height = h
		parent.appendChild(canvas)

		this.parent = parent
		this.width = w
		this.height = h
		this.bgColor = bgColor || 'transparent'
		this.canvas = canvas
		this.ctx = ctx
		this.actors = []
	}

	tick(delta) {
		const { width, height, bgColor, ctx, actors } = this
		let i;

		i = actors.length
		while (--i >= 0) {
			actors[i].tick(delta)
		}

		ctx.imageSmoothingEnabled = false
		ctx.webkitImageSmoothingEnabled = false
		ctx.mozImageSmoothingEnabled = false
		ctx.msImageSmoothingEnabled = false

		ctx.clearRect(0, 0, width, height)
		ctx.fillStyle = bgColor
		ctx.fillRect(0, 0, width, height)

		i = actors.length
		while (--i >= 0) {
			actors[i].draw(ctx)
		}
	}

	add(actor) {
		const i = this.actors.indexOf(actor)

		if (i < 0) {
			actor.canvas = this
			this.actors.push(actor)
		}

		return this
	}

	remove(actor) {
		const i = this.actors.indexOf(actor)

		if (i >= 0) {
			this.actors[i].canvas = null
			this.actors.splice(i, 1)
		}

		return this
	}
}

export default Canvas