
import Screen from '@/Screen'
import Canvas from '@/Canvas'
import Sprite from '@/Sprite'

class GameScreen extends Screen {
	constructor() {
		super('screen_game')

		const canvas = new Canvas(this.$el, 640, 480)
		const sprite = new Sprite(48, 96, 16, 16)

		canvas.add(sprite)
		sprite
			.setSize(100, 100)
			.setPivot(.5, .5)
			.setPosition(320, 240)

		this.canvas = canvas
	}

	tick(delta) {
		this.canvas.tick(delta)
	}
}

export default GameScreen