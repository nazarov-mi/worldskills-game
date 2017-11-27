
import MenuScreen from '@/screens/MenuScreen'
import GameScreen from '@/screens/GameScreen'

class App {
	constructor() {
		const $el = document.createElement('div')

		$el.classList.add('app')
		document.body.appendChild($el)

		this.$el = $el
		this.width = 0
		this.height = 0
		this.delta = 0
		this.screen = null
		this.menuScreen = new MenuScreen()
		this.gameScreen = new GameScreen()

		this.resume()
		this.setScreen(this.gameScreen)
	}

	tick(delta) {
		if (this.screen) {
			this.screen.tick(delta)
		}
	}

	pause() {
		clearInterval(this.intervalId)
		this.intervalId = null
		this.pause = true

		if (this.screen) {
			this.screen.pause()
		}
	}

	resume() {
		this.intervalId = setInterval(() => this.tick(++ this.delta), 1000 / 60)
		this.pause = false

		if (this.screen) {
			this.screen.resume()
		}
	}

	setScreen(screen) {
		if (this.screen) {
			this.screen.hide()
		}

		this.screen = screen

		if (screen) {
			screen.show(this.$el)
		}
	}
}

export default App