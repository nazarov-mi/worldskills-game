
class Screen {
	constructor(id) {
		let $el;

		if (id !== undefined) {
			$el = document.getElementById(id)
		} else {
			$el = document.createElement('div')
		}

		$el.className = 'screen'

		this.$el = $el
		this.width = 0
		this.height = 0
	}

	resize(w, h) {
		this.width = w
		this.hide = h
		this.$el.style.width = w + 'px'
		this.$el.style.height = h + 'px'
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