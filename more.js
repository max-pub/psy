export function richCopy(path) {
	const content = document.querySelector(path).outerHTML
	// const style = document.querySelector("style").outerHTML
	const frame = content
	// const frame = `<div>${content}</div>`
	//const frame = `<div>${style}${content}</div>`
	console.log(frame)
	const blob = new Blob([frame], { type: 'text/html' });
	const clipboardItem = new window.ClipboardItem({ 'text/html': blob });
	navigator.clipboard.write([clipboardItem]);
}

export function repeat(x, f) {
	return Array(x).fill(0).map(f)
}
export function selectAll() {
	setTimeout(() => document.execCommand('selectAll', false, null), 100)
}
export function today() {
	return new Date().toLocaleDateString('de-DE', {
		weekday: 'long',
		year: 'numeric',
		month: 'long',
		day: 'numeric',
	})
}