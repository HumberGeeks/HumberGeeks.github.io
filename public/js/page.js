export default class Page {
	constructor() {
		
	}

	getStudents(){

	let students= [
    {
    name:"Prabhjot Singh",
    program:"Web Design and Development",
    term:"Winter 2020",
    level:'Post Secondary',
    school:'Faculty and Media Creative Arts',
    graduation_yr:2020,
    class: 'Semester 1',
    gpa:76.4,
    overall_standing: 'Good Standing'
    }
    ,
    {
        name:"Edge",
        program:"Web Design and Development",
        term: "Winter 2019",
        level:"Post Secondary",
        school:'Faculty and Media Creative Arts',
        graduation_yr: 2019,
        class: 'Semester 2',
        gpa:89.3,
        overall_standing: 'Excellent Standing'
    },
    {
        name:"Nicole Arbour",
        program:"Web Design and Development",
        term: "Winter 2018",
        level:"Post Secondary",
        school:'Faculty and Media Creative Arts',
        graduation_yr: 2018,
        class: 'Semester 2',
        gpa:79.3,
        overall_standing: 'Good Standing'
    },
    {
        name:"Dina Pugliese",
        program:"Web Design and Development",
        term: "Fall 2017",
        level:"Post Secondary",
        school:'Faculty and Media Creative Arts',
        graduation_yr: 2018,
        class: 'Semester 2',
        gpa:80.3,
        overall_standing: 'Brilliant Standing'
    },
    ]

	return students
}
	getHTML() {
		
		return this.html
	}
}