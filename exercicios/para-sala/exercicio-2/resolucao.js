function generateID() {
	const crypto = require("crypto");
	const id = crypto.randomUUID();

	return id;
}

function raiseSalary(percent) {
	this.salary += this.salary * (percent / 100);

	return `O novo salário é R$ ${this.salary}`;
}

function Employee(firstname, lastname, salary) {
	let employee = {};

	employee.id = generateID();
	employee.firstname = firstname;
	employee.lastname = lastname;
	employee.salary = salary;
	employee.raiseSalary = raiseSalary;

	return employee;
}

module.exports = { Employee };
