export const CSS = new class {
	font = { fontFamily: `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol` }
	fontSize = { fontSize: '14px' }
	nowrap = { whiteSpace: 'nowrap' }
	border = { border: '1px solid silver' }
	pad = { padding: '3px' }
	center = { textAlign: 'center' }
	gray = { color: 'gray' }
	margin(v, h) { return { margin: `${v} ${h}` } }
	padding(v, h) { return { padding: `${v} ${h}` } }
	width(x) { return { width: x + 'px' } }
	td = { ...this.font, ...this.fontSize, ...this.border, ...this.padding(1, 2) }
	th = { ...this.font, fontSize: 10, color: 'gray', fontWeight:'normal', ...this.padding(1, 2) }
	// th = this.font + this.nowrap + this.thinPad + "font-weight:normal; color:gray; font-size: 10px;  "
	pointer = { cursor: 'pointer' }
}