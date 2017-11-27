
import Sprite from '@/Sprite'

class Ship extends Sprite {
	constructor() {
		super('public/spaceship.png')

		this.setPivot(.5, .5)
	}

	tick(delta) {
		super.tick(delta)

		this.pivotY = .5 + Math.sin(Math.PI * (delta / 150)) * .3
	}
}

export default Ship