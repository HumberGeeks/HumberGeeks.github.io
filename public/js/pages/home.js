import Page from '../page.js'

export default class Home extends Page {
	constructor() {
		super()
		this.html = `
			<h2>Home</h2>
			<p>Added a Home Page initial content! Test Code</p>`
	}
}