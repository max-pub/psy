
import { Table } from "./table.js";
import { TAG } from "./tag.js";
import { CSS } from "./css.js";

// console.log("CSS", CSS.td)
class Drugs extends Table {
	addRow(code, text, title) {
		return super.addRow(TAG.TR(
			// TAG.TD(score + '').addStyles(CSS2.td),
			TAG.TD(code).addStyles(CSS.td, CSS.center, CSS.width(40)),
			TAG.TD(text).addStyles(CSS.td, CSS.width(100), CSS.padding(1, 2)),
			TAG.TD({contenteditable:true}).addStyles(CSS.td, CSS.width(200)),
		)
			// .addEvents({click:`this.classList.toggle('selected')`})
			// .addEvents({ click: `this.style.fontWeight = this.style.fontWeight=='bold'?'normal':'bold'` })
		)

	}
}
export const drugs = () =>
	new Drugs('Drugs')
		.addCaption(TAG.CAPTION("Störungen durch psychotrope Substanzen").addStyles(CSS.nowrap, CSS.font, CSS.padding(10,0)))
		.addRow('F10', 'Alkohol')
		.addRow('F11', 'Opioide')
		.addRow('F12', 'Cannabinoide')
		.addRow('F13', 'Sedativa', 'Benzodiazepine &#010;Pregabalin')
		.addRow('F14', 'Kokain', 'Crack')
		.addRow('F15', 'Stimulanzien', 'Amphetamine &#010;MDMA')
		.addRow('F16', 'Halluzinogene', 'LSD &#010;Psilocibin &#010;Atropin')
		.addRow('F17', 'Nikotin')
		.addRow('F18', 'Lösungsmittel', 'Klebstoff &#010;Lack')
		.addToBody()
		.addCopyButton()
