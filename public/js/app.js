import Home from '/js/pages/home.js'
import Program from '/js/pages/program.js'
import Student from '/js/pages/student.js'
import ErrPage from '/js/pages/errpage.js'

// Store a few references
const $routes = document.querySelectorAll('.router a')
const $main =   document.querySelector('.main')

// Create our page routes
const routes = {
	home: new Home(),
	program: new Program(),
	student: new Student(),
	errpage: new ErrPage()	
}

// Load new page content
const gotoPage = (name) => {
	if (!routes[name]) {
		name = 'home'  // Redirection to '404' page
	}
	$main.innerHTML = routes[name].getHTML() // Injecting HTML
}

// If someone uses the browser back/forward functionality, redirect
window.addEventListener('popstate', event => {
	const route = event.state.path
	gotoPage(route);
})

// When the page loads...
window.addEventListener('load', event => {

	// Get the page url and load the Page based on the pathname
	const route = window.location.pathname.slice(1).split('/')[0]
	gotoPage(route)

	// For all `.router a`...
	$routes.forEach($link => {
		// When an anchor is clicked
		$link.addEventListener('click', event => {

			event.preventDefault() // Stop the browser from redirecting

			// Go to the page specified in the href
			const route = $link.getAttribute('href').slice(1).split('/')[0]
			gotoPage(route)

			// Add browser history so we can go back/forward
			window.history.pushState({path:`${route}`}, '', `/${route}`)
		})
	})
})
