
class Screen {
	constructor(id) {
		let $el;

		if (id !== undefined) {
			$el = document.getElementById(id)
		} else {
			$el = document.createElement('div')
		}

		$el.classList.add('screen')

		this.$el = $el
	}

	show(parent) {
		parent.appendChild(this.$el)
	}

	hide() {
		this.$el.remove()
	}
	
	tick(delta) {
		// TO DO
	}

	pause() {
		// TO DO
	}

	resume() {
		// TO DO
	}
}

export default Screen