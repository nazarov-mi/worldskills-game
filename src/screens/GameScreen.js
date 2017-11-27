
import Screen from '@/Screen'
import Canvas from '@/Canvas'
import Space from '@/Space'
import Ship from '@/Ship'
import Bullet from '@/Bullet'

class GameScreen extends Screen {
	constructor() {
		super('screen_game')

		const canvas = new Canvas(this.$el, 640, 480, '#010114')
		const space = new Space()
		const ship = new Ship()

		ship.setPosition(320, 430)

		space.setSize(640, 480)
		canvas.add(ship)
		canvas.add(space)

		this.canvas = canvas
		this.space = space
		this.bullets = []

		document.addEventListener('click', e => {
			this.shot(ship.x - 34, ship.y)
			this.shot(ship.x + 34, ship.y)
		})

		document.addEventListener('mousemove', e => {
			const bodyWidth = document.body.clientWidth
			const offsetX = (bodyWidth - Math.min(bodyWidth, 640)) * .5

			ship.x = Math.max(Math.min(e.pageX - offsetX, 640 - ship.width * .6), ship.width * .6)
		})
	}

	tick(delta) {
		this.canvas.tick(delta)
	}

	shot(x, y) {
		const bullet = new Bullet()
		bullet.setPosition(x, y)
		this.canvas.add(bullet)
	}
}

export default GameScreen