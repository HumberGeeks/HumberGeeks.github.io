import Page from '../page.js'

export default class ErrPage extends Page {
	constructor() {
		super()
        this.html = ` <div class="err">
        <h1 style="font-size: 8em;  color: darkblue; margin: 0em;">404</h1>
        <h2>Something's Missing.</h2>
        <h3>The page is missing or you assembled the link incorrectly.</h3>
        <h3>Let's go back to home :)</h3>
        <a href="/home" style="text-decoration:underline">Click Here to go back</a>
    </div>`
    }
}

