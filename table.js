import { TAG } from "./tag.js"
import { CSS } from "./css.js";
import { richCopy } from "./more.js";

export class Table {

	constructor(id) {
		this.root = TAG.TABLE({ id }, TAG.CAPTION(), TAG.THEAD(), TAG.TBODY(), TAG.TFOOT())
			.addStyles({ borderCollapse: 'collapse' })
	}
	addCaption(...x) {
		let caption = x[0] instanceof Node ? x[0] : TAG.caption(...x)
		this.root.querySelector('caption').replaceWith(caption)
		return this
	}
	addHeader(...x) {
		this.root.querySelector('thead').addChildren(...x)
		return this
	}
	addRow(...x) {
		this.root.querySelector('tbody').addChildren(...x)
		return this
	}
	addFooter(...x) {
		this.root.querySelector('tfoot').addChildren(...x)
		return this
	}
	addToBody() {
		// document.body.appendChild(TAG.DIV(this.root))
		document.body.appendChild(this.root)
		return this
	}
	addCopyButton() {
		let button = TAG.BUTTON('copy table')
			.addStyles(CSS.pointer, CSS.font, CSS.margin(10, 0))
			// .addEvents({ click: `richCopy('#${this.root.id}')` })
			.addEvents({ click: () => richCopy('#' + this.root.id) })
		document.body.appendChild(button)
		return this
	}

	addRowButton() {
		let button = TAG.BUTTON('add row')
			.addStyles(CSS.pointer, CSS.font, CSS.margin(10, 0))
			.addEvents({ click: () => this.addRow() })
		document.body.appendChild(button)
		return this
	}
	// addSadRow(score, letter, text) {
	// 	return this.addRow(TAG.TR(
	// 		// TAG.TD(score + '').addStyles(CSS2.td),
	// 		TAG.TD(letter).addStyles(CSS2.td, CSS2.center),
	// 		TAG.TD(text).addStyles(CSS2.td)
	// 	)
	// 		// .addEvents({click:`this.classList.toggle('selected')`})
	// 		.addEvents({ click: `this.style.fontWeight = this.style.fontWeight=='bold'?'normal':'bold'` })
	// 	)

	// }

}
{/* <a onclick="addMediRow2()">add22</a> --- */ }
{/* <a onclick="richCopy('#medication')">copy</a> */ }
