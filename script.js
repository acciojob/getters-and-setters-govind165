//complete this code
class Person {
	constructor(Name,Age){
		this._Name = Name;
		this._Age = Age;
	}

	get Name(){
		return this._Name; 
	}

	set Name(newName){
		this._Name = newName;
	}

		get Age(){
		return this._Age; 
	}

	set Age(newAge){
		this._Age = newAge;
	}
}

class Student extends Person {
	constructor(Name,Age){
		super(Name,Age)
	}
}

class Teacher extends Person {	
	constructor(Name,Age){
		super(Name,Age)
	}
}

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
