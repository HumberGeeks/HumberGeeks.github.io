import Page from '../page.js'		

export default class Edge extends Page {
    constructor() {
        super()    
        let students = this.getStudents();
        this.html = ` <div class="tagline">
        <h2>OUR BEST FROM THE NORTH CAMPUS</h2>
    </div>
    <section class="student_info">
        <div class="student_img">
            <img src="img/edge.jpg" alt="" class="img" style="width: 22.5em;
            height: 18em;">
        </div>
        <div class="student_details">
         <ul>
            <li><p> <span class="bold2"> Name: </span> ${students[1].name}</p></li>
            <li><p> <span class="bold2"> Program: </span>${students[1].program}</p></li>
            <li><p><span class="bold2"> Term:</span>${students[1].term}</p></li>
            <li><p> <span class="bold2"> Level: ${students[1].level}</span> </p></li>
            <li><p> <span class="bold2"> School:</span>${students[1].school}</p></li>
            <li><p> <span class="bold2"> Graduation Year :</span> ${students[1].graduation_yr} </p></li>
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
            <li><p> <span class="bold2">Class :</span> ${students[1].class} </p></li>
        </div>
        <div class="crclm">
           
            <li><p> <span class="bold2">Level : </span> Post Secondary</p></li>
            <li><p> <span class="bold2">Type : </span> Institution</p></li>
            <li><p> <span class="bold2">Earned Hours : </span> 30 </p></li>
            <li><p><span class="bold2">GPA :</span> ${students[1].gpa} </p></li>
            <li><p> <span class="bold2">Overall hours : </span>15 </p></li>
            <li><p> <span class="bold2">Standing : </span>${students[1].overall_standing} </p></li>
        </div>
    </article>
    <h2 class="tagline_2">NOTABLE ALUMNI THAT MAKES US PROUD</h2>
    <article class="notable_alumni_section">
        
        <div class="alumni">
            <a href="/student"><img src="img/student.jpg" alt="" class="alm_img"></a>
            <h3>Prabhjot Singh</h3>
        </div>
        
        <div class="alumni">
            <a href="/nicole"><img src="img/Nicole Arbour.png" alt="" class="alm_img"></a>
            <h3>Nicole Arbour</h3>
        </div>
        <div class="alumni">
            <a href="/dina"><img src="img/dina.jpg" alt="" class="alm_img"></a>
            <h3>Dina Pugliese</h3>
        </div>
      
    </article>`

	}
}