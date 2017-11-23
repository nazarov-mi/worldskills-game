
class Canvas {
	constructor(parent, w, h) {
		const canvas = document.createElement('canvas')
		const ctx = canvas.getContext('2d')
		const atlas = new Image()

		canvas.width = w
		canvas.height = h
		parent.appendChild(canvas)

		ctx.imageSmoothingEnabled = false
		ctx.webkitImageSmoothingEnabled = false
		ctx.mozImageSmoothingEnabled = false
		ctx.msImageSmoothingEnabled = false

		atlas.onload = () => this.init()
		atlas.src = 'https://0fps.files.wordpress.com/2013/07/terrain.png'

		this.width = w
		this.height = h
		this.canvas = canvas
		this.ctx = ctx
		this.atlas = atlas
		this.actors = []
		this.ready = false
	}

	init() {
		this.ready = true
	}

	tick(delta) {
		if (!this.ready) return

		const { width, height, actors, ctx, atlas } = this
		let i;

		i = actors.length
		while (--i >= 0) {
			actors[i].tick(delta)
		}

		ctx.fillStyle = '#f5f5f5'
		ctx.fillRect(0, 0, width, height)

		i = actors.length
		while (--i >= 0) {
			actors[i].draw(ctx, atlas)
		}
	}

	add(actor) {
		const i = this.actors.indexOf(actor)

		if (i < 0) {
			this.actors.push(actor)
		}

		return this
	}

	remove(actor) {
		const i = this.actors.indexOf(actor)

		if (i >= 0) {
			this.actors.splice(i, 1)
		}

		return this
	}
}

export default Canvas