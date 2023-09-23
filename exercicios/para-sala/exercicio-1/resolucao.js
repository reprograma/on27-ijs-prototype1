let employee1 = {};
let employee2 = {};

employee1.id = "1234";
employee1.firstname = "José";
employee1.lastname = "Silva";
employee1.salary = 1000;
employee1.raiseSalary = function raiseSalary(percent) {
	this.salary += this.salary * (percent / 100);

	return (`O novo salário é R$ ${this.salary}`);
};

employee2.id = "4321";
employee2.firstname = "Maria";
employee2.lastname = "Borges";
employee2.salary = 5000;
employee2.raiseSalary = function raiseSalary(percent) {
	this.salary += this.salary * (percent / 100);

	return (`O novo salário é R$ ${this.salary}`);
};

module.exports = { employee1, employee2 };
