import { TAG } from "./tag.js"

export class Table {

	constructor(id) {
		this.root = TAG.TABLE({ id }, TAG.CAPTION(), TAG.THEAD(), TAG.TBODY(), TAG.TFOOT())
			.addStyles({ borderCollapse: 'collapse' })
	}
	addCaption(x) {
		this.root.querySelector('caption').replaceWith(x)
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
	addToBody() {
		document.body.appendChild(this.root)
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