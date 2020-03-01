import Page from '../page.js'

export default class ErrPage extends Page {
	constructor() {
		super()
        this.html = `<h1> Page not found </h1>`
    }
}

