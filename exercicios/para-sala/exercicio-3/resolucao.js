function generateID() {
	const crypto = require("crypto");
	const id = crypto.randomUUID();

	return id;
}

function raiseSalary(percent) {
	this.salary += this.salary * (percent / 100);

	return `O novo salário é R$ ${this.salary}`;
}

function addBenefit(benefit) {
	this.benefits.push(benefit);
	console.log(
		`O benefício ${benefit} foi adicionado ao funcionário ${this.firstname} ${this.lastname}. Os benefícios disponíveis para o funcionário agora são ${this.benefits}.`
	);
}

function removeBenefit(benefit) {
	let index = this.benefits.indexOf(benefit);
	if (index === -1) {
		console.log("Benefício inválido"); //o if filtra se o benefício existe no array, no js caso não esteja no array retorna como -1, caso esteja retorna o index em que está no array, como 0, 1, 2, ...
	} else {
		this.benefits = this.benefits.filter(
			(currentBenefit) => currentBenefit !== benefit
		); //filtra o beneficio que foi enviado e cria uma nova array com tudo que obedece a condição, nesse caso vai sobrescrever o array this.benefits
		console.log(
			`O benefício ${benefit} foi removido do funcionário ${this.firstname} ${this.lastname}. Os benefícios disponíveis para o funcionário agora são ${this.benefits}.`
		);
	}
}

function listBenefits() {
	console.log(
		`Os benefícios do funcionário ${this.firstname} ${this.lastname} são: ${this.benefits}`
	);
}

function Employee(firstname, lastname, salary) {
	let employee = {};

	employee.id = generateID();
	employee.firstname = firstname;
	employee.lastname = lastname;
	employee.salary = salary;
	employee.benefits = []; //como o array está vazio, benefits não está como parametro da função

	employee.raiseSalary = raiseSalary;
	employee.addBenefits = addBenefit;
	employee.removeBenefits = removeBenefit;
	employee.listBenefits = listBenefits;

	return employee;
}

module.exports = { Employee };
