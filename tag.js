export const TAG = new Proxy({}, {
	get(target, prop, receiver) {
		// console.log('get', target, prop, receiver)
		// return node2(prop)
		let n = document.createElement(prop)
		return function (...pp) {
			for (let p of pp) {
				if (p instanceof Node)
					n.appendChild(p)
				else if (typeof p == 'string')
					n.appendChild(document.createTextNode(p))
				else if (typeof p == 'object')
					for (let key in p)
						n.setAttribute(key, p[key])
			}
			return n
		}
		// return "world";
	}
})

Node.prototype.$ = function (o) {
	return this.querySelector(o)
}

Node.prototype.$$ = function (o) {
	return [...this.querySelectorAll(o)]
}

Node.prototype.addStyles = function (...o) {
	for (let s of o)
		for (let k in s)
			this.style[k] = s[k]
	return this
}
Node.prototype.addEvents = function (...o) {
	for (let s of o)
		for (let k in s) {
			// console.log('add event',k,s[k])
			if (typeof s[k] == 'function') {
				// console.log('add listener', k, s[k].call({a:1}))
				this.addEventListener(k, s[k].bind(this))

			}
			if (typeof s[k] == 'string')
				this.setAttribute('on' + k, s[k])
		}
	return this
}
Node.prototype.addChildren = function (...o) {
	for (let c of o)
		this.appendChild(c)
	return this
}
Node.prototype.repeat = function (x) {
	return Array(x).fill(0).map(x => this.cloneNode(true))
}

function node(name, ...pp) {
	let n = document.createElement(name)
	for (let p of pp) {
		if (p instanceof Node)
			n.appendChild(p)
		else if (typeof p == 'string')
			n.appendChild(document.createTextNode(p))
		else if (typeof p == 'object')
			for (let key in p)
				n.setAttribute(key, p[key])
	}
	return n
}