import { Table } from "./table.js";
import { TAG } from "./tag.js";
import { CSS } from "./css.js";

class SadPersons extends Table {
	addRow(score, letter, text) {
		return super.addRow(TAG.TR(
			// TAG.TD(score + '').addStyles(CSS2.td),
			TAG.TD(letter).addStyles(CSS.td, CSS.center),
			TAG.TD(text).addStyles(CSS.td)
		)
			// .addEvents({click:`this.classList.toggle('selected')`})
			.addEvents({ click: `this.style.fontWeight = this.style.fontWeight=='bold'?'normal':'bold'` })
		)

	}
}
export const sadPersons = () =>
	new SadPersons('sadpersons1')
		.addCaption(TAG.CAPTION("SAD PERSONS scale").addStyles(CSS.nowrap))
		.addRow(1, 'S', 'Male sex')
		.addRow(1, 'A', 'Age < 20 or Age > 45')
		.addRow(1, 'D', 'Depression')
		.addRow(1, 'P', 'Previous attempt')
		.addRow(1, 'E', 'Excess substance abuse')
		.addRow(1, 'R', 'Rational Thinking loss')
		.addRow(1, 'S', 'Social supports lacking')
		.addRow(1, 'O', 'Organized Plan')
		.addRow(1, 'N', 'No Spouse')
		.addRow(1, 'S', 'Sickness')
		.addToBody()