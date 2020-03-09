export default class Page {
	constructor() {
		
	}

	getStudents(){

	let students= [{name:"Chandler Bing",
    program:"Web Design and Development",
    term:"Winter 2020",
    level:'Post Secondary',
    school:'Faculty and Media Creative Arts',
    graduation_yr:2020}
    ,
    {
        name:"Tim Berners Lee",
        program:"Web Design and Development",
        term: "Winter 2019",
        level:"Post Secondary",
        school:'Faculty and Media Creative Arts',
        graduation_yr: 2019
	}]

	return students
}
	getHTML() {
		
		return this.html
	}
}