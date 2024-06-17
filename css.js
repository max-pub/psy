export const CSS = new class {
	font = { fontFamily: `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol` }
	fontSize = { fontSize: '14px' }
	nowrap = { whiteSpace: 'nowrap' }
	border = { border: '1px solid silver' }
	pad = { padding: '3px' }
	center = { textAlign: 'center' }
	gray = { color: 'gray' }
	width(x) { return { width: x + 'px' } }
	td = { ...this.font, ...this.fontSize ,...this.border, ...this.padding, }
}