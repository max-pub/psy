import { Table } from "./table.js";
import { TAG } from "./tag.js";
import { CSS } from "./css.js";

class SadPersons extends Table {
	addRow(score, letter, text) {
		return super.addRow(TAG.TR(
			// TAG.TD(score + '').addStyles(CSS2.td),
			TAG.TD(letter).addStyles(CSS.td, CSS.center, CSS.width(25)),
			TAG.TD(text).addStyles(CSS.td, CSS.padding(2, 4))
		)
			.addStyles(CSS.pointer)
			// .addEvents({click:`this.classList.toggle('selected')`})
			// .addEvents({ click: `this.style.fontWeight = this.style.fontWeight=='bold'?'normal':'bold'` })
			.addEvents({ click: function () { this.style.fontWeight = this.style.fontWeight == 'bold' ? 'normal' : 'bold' } })
			.addEvents({ click: () => this.countScore() })
			// .addEvents({ click: () => console.log('this',this) })
			// .addEvents({ click: function () { console.log('this', this) } })
		)

	}
	countScore() {
		let points = this.root.$$('tr').filter(x => x.style.fontWeight == 'bold').length
		this.root.$('.score').innerHTML = points + ' points'
		const riskColor = { low: 'green', medium: 'orange', high: 'red' }
		let risk = 'low'
		if (points >= 5) risk = 'medium'
		if (points >= 7) risk = 'high'
		this.root.$('.risk').addStyles({ color: riskColor[risk] }).innerHTML = risk + ' risk'
	}
}
export const sadPersons = () =>
	new SadPersons('sadpersons1')
		.addCaption(TAG.CAPTION("SAD PERSONS scale").addStyles(CSS.nowrap, CSS.font))
		// .addCaption("SAD PERSONS scale", CSS.nowrap)
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
		.addFooter(TAG.TR(
			TAG.TD({ class: 'score', colspan: 2 }, '0 points').addStyles(CSS.font, CSS.center),
		))
		.addFooter(TAG.TR(
			TAG.TD({ class: 'risk', colspan: 2 }, 'low risk').addStyles(CSS.font, CSS.center),
		))
		.addToBody()
		.addCopyButton()