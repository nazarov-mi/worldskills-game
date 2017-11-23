
import Math2 from './Math2'

/**
 * a c x
 * b d y
 * 0 0 1
 */
 
class Mat22 {
	constructor() {
		this.identity()
	}

	identity() {
		return this.set(1, 0, 0, 1, 0, 0)
	}

	set(a, b, c, d, x, y) {
		this.a = a
		this.b = b
		this.c = c
		this.d = d
		this.x = x
		this.y = y

		return this
	}

	compose(x, y, px, py, w, h, sx, sy, angle) {
		const rad = angle * Math2.TO_RAD
		const cos = Math.cos(rad)
		const sin = Math.sin(rad)
		const ppx = px * w
		const ppy = py * h
		const a = sx *  cos
		const b = sx *  sin
		const c = sy * -sin
		const d = sy *  cos

		this.a = a
		this.b = b
		this.c = c
		this.d = d
		this.x = x - ppx * a - ppy * c
		this.y = y - ppx * b - ppy * d

		return this
	}
}

export default Mat22