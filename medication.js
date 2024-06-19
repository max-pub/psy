
import { Table } from "./table.js";
import { TAG } from "./tag.js";
import { CSS } from "./css.js";
import { today, repeat, selectAll } from './more.js'

class Medication extends Table {
	addRow(code, text, title) {
		const editable = { contenteditable: 'true' }
		return super.addRow(
			TAG.TR(
				TAG.TD(editable)
					.addStyles(CSS.td, CSS.width(200), { textAlign: 'left' }),
				...repeat(4, () =>
					TAG.TD(editable, { class: 'amount', }, '0') //onfocus: "selectAll()", onblur: "rowSum(event)" 
						.addEvents({ focus: selectAll, blur: this.rowSum })
						// .addEvents({ focus: "selectAll()", blur: this.rowSum })
						.addStyles(CSS.td, CSS.center, CSS.width(50))
					// .repeat(4),
				),
				TAG.TD(editable, 'mg') //{ onfocus: "selectAll()" }
					// .addEvents({ focus: "selectAll()" })
					.addEvents({ focus: selectAll })
					.addStyles(CSS.td, CSS.center, { width: 50, color: 'gray' }),
				TAG.TD({ class: 'daily' }, '0')
					.addStyles(CSS.td, CSS.center, CSS.width(50), { color: 'gray' }),// CSS.td + CSS.hCenter + 'color:gray;',)
				TAG.TD(editable)
					.addStyles(CSS.font, CSS.padding(1, 2), CSS.width(300), { fontSize: 10, color: 'gray' }),// CSS.td + CSS.hCenter + 'color:gray;',)

			)
		)
	}
	rowSum(event) {
		let tr = event.target.closest("tr")
		let tds = Array(...tr.querySelectorAll("td.amount"))
		tds.map(x => x.textContent = eval(x.textContent.trim().replaceAll(',', '.')))
		let values = tds.map(x => x.textContent.trim().replaceAll(',', '.') * 1)
		let sum = values.reduce((a, b) => a + b, 0)
		tr.querySelector(".daily").textContent = sum
		// console.log("clo", tr, values)

	}
}

export const medication = () =>
	new Medication('medication')
		.addCaption(TAG.CAPTION("Medikation bei Aufnahme am " + today()).addStyles(CSS.nowrap, CSS.font, CSS.padding(10, 0)))
		.addHeader(
			...['Wirkstoff', 'morgens', 'mittags', 'abends', 'nachts', 'Einheit', 'Tagessumme']
				.map(x => TAG.TH(x).addStyles(CSS.th, { width: '50px' }))
		)
		.addRow('F10', 'Alkohol')
		.addToBody()
		.addCopyButton()
		.addRowButton()
