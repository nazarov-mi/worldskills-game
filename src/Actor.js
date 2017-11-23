
import Mat22 from './Mat22'

class Actor {
	constructor() {
		this._x = 0
		this._y = 0
		this.px = 0
		this.py = 0
		this.w = 1
		this.h = 1
		this.sx = 1
		this.sy = 1
		this.angle = 0
		this.matrix = new Mat22()
		this.transformed = false
	}

	tick(delta) {
		if (!this.transformed) {
			this.matrix.compose(
				this.x,  this.y,
				this.px, this.py,
				this.w,  this.h,
				this.sx, this.sy,
				this.angle
			)
			this.transformed = true
		}
	}

	draw(ctx, atlas) {
		// TO DO
	}

	translate(x, y) {
		this._x += x
		this._y += y
		this.transformed = false

		return this
	}

	scale(x, y) {
		this.sx *= x
		this.sy *= y
		this.transformed = false

		return this
	}

	rotate(v) {
		this.angle += v
		this.transformed = false

		return this
	}

	setPosition(x, y) {
		if (this._x !== x || this._y !== y) {
			this._x = x
			this._y = y
			this.transformed = false
		}

		return this
	}

	setPivot(x, y) {
		if (this.px !== x || this.py !== y) {
			this.px = x
			this.py = y
			this.transformed = false
		}

		return this
	}

	setSize(x, y) {
		if (this.w !== x || this.h !== y) {
			this.w = x
			this.h = y
			this.transformed = false
		}

		return this
	}

	setScale(x, y) {
		if (this.sx !== x || this.sy !== y) {
			this.sx = x
			this.sy = y
			this.transformed = false
		}

		return this
	}

	get x() {
		return this._x
	}

	set x(v) {
		if (this._x !== v) {
			this._x = v
			this.transformed = false
		}
	}

	get y() {
		return this._y
	}

	set y(v) {
		if (this._y !== v) {
			this._y = v
			this.transformed = false
		}
	}

	get pivotX() {
		return this.px
	}

	set pivotX(v) {
		if (this.px !== v) {
			this.px = v
			this.transformed = false
		}
	}

	get pivotY() {
		return this.py
	}

	set pivotY(v) {
		if (this.py !== v) {
			this.py = v
			this.transformed = false
		}
	}

	get width() {
		return this.w
	}

	set width(v) {
		if (this.w !== v) {
			this.w = v
			this.transformed = false
		}
	}

	get height() {
		return this.h
	}

	set height(v) {
		if (this.h !== v) {
			this.h = v
			this.transformed = false
		}
	}

	get scaleX() {
		return this.sx
	}

	set scaleX(v) {
		if (this.sx !== v) {
			this.sx = v
			this.transformed = false
		}
	}

	get scaleY() {
		return this.sy
	}

	set scaleY(v) {
		if (this.sy !== v) {
			this.sy = v
			this.transformed = false
		}
	}

	get rotation() {
		return this.angle
	}

	set rotation(v) {
		if (this.angle !== v) {
			this.angle = v
			this.transformed = false
		}
	}
}

export default Actor