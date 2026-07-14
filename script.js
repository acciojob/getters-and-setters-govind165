class Person {
	constructor(Name, Age) {
		this._name = name;
		this._age = age;
	}

	get name() {
		return this._name;
	}

	set name(newName) {
		this._name = newName;
	}

	get age() {
		return this._age;
	}

	set age(newAge) {
		this._age = newAge;
	}
}

class Student extends Person {
	constructor(Name, Age) {
		super(Name, Age);
	}
}

class Teacher extends Person {
	constructor(Name, Age) {
		super(Name, Age);
	}
}

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;