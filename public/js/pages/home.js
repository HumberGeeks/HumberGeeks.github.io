import Page from '../page.js'

export default class Home extends Page {
	constructor() {
		super()
		this.html = `<header class="head">
  
		<div class="logo_container">
		  <img src="img/logo.png" class="logo">
		</div>
		
		<h1 class="heading">Humber School of Media & Technology</h1>
		<div class="banner-heading">
		<a href="#">Apply Now</a>
		</div>
	  </header>
	  <section class="promo">
		<section class="profileview">
			<img src="img/3.jpg" alt="Student" class="student">
			<h3 class="content_headings">Welcome To School of Humber</h3>
			<p class="content">The Humber Institute of Technology and Advanced Learning, commonly known as Humber College, was founded in 1967. Humber is a publicly funded college in Toronto, Ontario, Canada. Humber has three main campuses, Humber North campus, Lakeshore campus, and Humber Orangeville campus.Take theory, add practical learning, state-of-the-art labs and creative spaces and you will unleash innovative and entrepreneurial thinking. Integrate opportunities to move from a certificate to a diploma to a degree and beyond. Add in international partnerships to help you broaden your learning experience and develop intercultural skills – that’s the formula that makes Humber a global leader in polytechnic education.</p>
			<button type="button" class="programme">Read More</button>
		</section>
		<section>
		<div class="register">
			<h3 class="content_headings">Humber programme & Courses</h3>
			<p class="content">Find resources and information for Future Full-Time Students, Continuing Education Students and Internationally Educated Professionals.Your education is an important investment. Understand the costs associated with coming to Humber and let us help you plan your finances, from first year to your final year.</p>
			<button type="button" class="programme">Programme</button>
		</div>
		<div>
			<h3 class="content_headings">Humber Center of Innovation</h3>
			<p class="content">Humber’s network of Centres of Innovation (COIs) bring together interdisciplinary teams of faculty, students, and partners to solve complex, real-world problems.Humber's network of Centres of Innovation (COIs) bring together interdisciplinary teams of faculty, students, and community and industry partners to solve complex, real-world problems. COIs provide an experiential learning environment for Humber students and prepares them to become the innovative and strategic problem-solvers of tomorrow.</p>
			<button type="button" class="programme">Center of Innovation</button>
		</div>
		</section>
	</section>
	<h2 class="offd_prg"> Programs we offer in this school </h2>
	<section class="course">
		<div>
			<h5 class="content_headings2">User Experience (UX) Design</h5>
			<p class="content">Humber’s User Experience (UX) Design graduate certificate simulates the interdisciplinary approaches needed to achieve an innovation process with a focus on design desirability, technological feasibility and business viability.</p>
		</div>
		<div>
			<h5 class="content_headings2">Web Design and Interactive Media</h5>
			<p class="content">Interactive media is a constantly growing, multidisciplinary industry that combines creative and technical skills to build the tools we depend on every day. These on-demand skills include visual design, coding, the ability to imagine what does not yet exist.</p>
		</div>
		<div>
			<h5 class="content_headings2">Graphic Design for Print and Web</h5>
			<p class="content">Motivated. Creative. Innovative. If these words describe you, then our intensive Graphic Design for Print and Web certificate program is for you. You will learn industry-best practices and how to communicate effective design solutions using composition, and web design.</p>
		</div>
	</section>
	<section class="Info">
		<div class="road-trip">
			<h2 class="content_headings3">What We Do on a Road Trip</h2>
			<p class="detail">Not sure what to do next? Follow these steps to get into your dream program at Humber. Follow Steps 1 to 10 to navigate the admission process from finding your program to finding your way to Orientation, this road map will ensure that you get everything done on time.</p>
			<a href="#" class="linkinfo">Read more <i class="fas fa-arrow-circle-right"></i></a>
		</div>
		<div class="tour">
			<h2 class="content_headings3">Book a Tour</h2>
			<p class="detail">See where you'll be studying, learning and living.Taking a campus tour is the best way to see what it's really like to be a Humber student. Book now and discover everything you need to know about Humber. After you register, you will receive an email with a parking pass and campus map to help you get started.</p>
			<a href="#" class="linkinfo">Read more <i class="fas fa-arrow-circle-right"></i></a>
		</div>
		<div class="credit">
			<h2 class="content_headings3">Get Transfer Credit</h2>
			<p class="detail">TRANSFER IN FROM ANOTHER COLLEGE OR UNIVERSITY AND GET THE CREDIT YOU DESERVE.Whether you have completed a post-secondary program or are looking for a change, Humber has pathways available to you. Use our easy, online tools and step-by-step guides to determine your opportunities at Humber.</p>
			<a href="#" class="linkinfo">Read more <i class="fas fa-arrow-circle-right"></i></a>
		</div>
		<div class="involved">
			<h2 class="content_headings3">Get Involved</h2>
			<p class="detail">Humber has a reputation for being one of Canada’s most diverse education that offers something for everyone. More than 33,000 full-time students, including 6,500 international students pursuing bachelor’s degrees, diplomas, and postgraduate certificates in 180 programs on two main campuses in Toronto.</p>
			<a href="#" class="linkinfo">Read more <i class="fas fa-arrow-circle-right"></i></a>
		</div>
	</section>`
	}
}