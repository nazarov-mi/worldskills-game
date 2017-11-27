
import Actor from '@/Actor'

class Bullet extends Actor {
	tick(delta) {
		if (this.y < 0) {
			this.remove()
		} else {
			this.y -= 10
		}
	}

	draw(ctx) {
		const { x, y } = this

		ctx.save()
		ctx.fillStyle = '#ffa32c'
		ctx.beginPath()
		ctx.fillRect(x, y - 20, .6, 20)
		ctx.restore()
	}
}

export default Bullet