import Page from '../page.js'

export default class Student extends Page {
	constructor() {
		super()
		this.html = ` <div class="tagline">
        <h2>OUR BEST FROM THE NORTH CAMPUS</h2>
    </div>
    <section class="student_info">
        <div class="student_img">
            <img src="img/student.jpg" alt="" class="img">
        </div>
        <div class="student_details">
         <ul>
            <li><p> <span class="bold2"> Name: </span> Chandler Bing</p></li>
            <li><p> <span class="bold2"> Program: </span>Web Design and Development</p></li>
            <li><p><span class="bold2"> Term:</span> Winter 2020 </p></li>
            <li><p> <span class="bold2"> Level: </span>Post Secondary </p></li>
            <li><p> <span class="bold2"> Term: </span>Winter 2020 </p></li>
            <li><p> <span class="bold2"> School:</span> Faculty and Media Creative Arts </p></li>
         </ul>
        </div>
    </section>
    
    <article class="bio_and_crclm">
        <div class="bio">
            <li><p> <span class="bold2">Degree : </span> Certificate Of Acheivement</p></li>
            <li><p> <span class="bold2">School : </span>Faculty Media and Creative Arts</p></li>
            <li><p> <span class="bold2">Admit Type : </span> Standard </p></li>
            <li><p><span class="bold2"> Awarded Degree:</span> College Graduate Certificate </p></li>
            <li><p> <span class="bold2">Campus : </span>North Campus </p></li>
            <li><p> <span class="bold2">Status : </span>Active </p></li>
            <li><p> <span class="bold2">Class :</span> Semester 2 </p></li>
        </div>
        <div class="crclm">
           
            <li><p> <span class="bold2">Level : </span> Post Secondary</p></li>
            <li><p> <span class="bold2">Type : </span> Institution</p></li>
            <li><p> <span class="bold2">Earned Hours : </span> 30 </p></li>
            <li><p><span class="bold2">GPA :</span> 76.4 </p></li>
            <li><p> <span class="bold2">Overall hours : </span>15 </p></li>
            <li><p> <span class="bold2">Standing : </span>Good Standing </p></li>
        </div>
    </article>
    <h2 class="tagline_2">NOTABLE ALUMNI THAT MAKES US PROUD</h2>
    <article class="notable_alumni_section">
        
        <div class="alumni">
            <a href="https://en.wikipedia.org/wiki/Edge_(wrestler)"><img src="img/edge.jpg" alt="" class="alm_img"></a>
            <h3>Edge</h3>
        </div>
        
        <div class="alumni">
            <a href="https://en.wikipedia.org/wiki/Nicole_Arbour"><img src="img/Nicole Arbour.png" alt="" class="alm_img"></a>
            <h3>Nicole Arbour</h3>
        </div>
        <div class="alumni">
            <a href="https://en.wikipedia.org/wiki/Dina_Pugliese"><img src="img/dina.jpg" alt="" class="alm_img"></a>
            <h3>Dina Pugliese</h3>
        </div>
      
    </article>`
	}
}