// // Função construtora para criar objetos employee
// function Employee(id, firstname, lastName, salary) {
//   this.id = id;
//   this.firstname = firstname;
//   this.lastName = lastName;
//   this.salary = salary;
// }

// // Método para aumentar o salário em uma determinada porcentagem
// Employee.prototype.raiseSalary = function(percent) {
//   this.salary += this.salary * (percent / 100);
// };

// // Criando objetos employee
// let employee1 = new Employee(1, "Josie", "Silva", 50000);
// let employee2 = new Employee(2, "Maria", "Santos", 60000);

// // Testando os métodos criados
// console.log("Salário atual do employee1:", employee1.salary);
// employee1.raiseSalary(10); // Aumentando o salário de employee1 em 10%
// console.log("Novo salário do employee1:", employee1.salary);

// console.log("Salário atual do employee2:", employee2.salary);
// employee2.raiseSalary(15); // Aumentando o salário de employee2 em 15%
// console.log("Novo salário do employee2:", employee2.salary);

// Resolução da professora
// O código cria dois objetos representando funcionários, atribui uma função de aumento de salário a cada um deles e, em seguida, usa essa função para aumentar os salários dos funcionários e exibir os novos salários.

function raiseSalary(percent) {
  this.salary += (this.salary * percent);
  console.log(`O novo salário é R$ ${this.salary}`)
}

let employee1 = {}
employee1.id = 1
employee1.firstName = 'Luara'
employee1.lastName = 'Kerlen'
employee1.salary = 20000
employee1.raiseSalary = raiseSalary

let employee2 = {}
employee2.id = 2
employee2.firstName = 'Maria'
employee2.lastName = 'Santos'
employee2.salary = 15000
employee2.raiseSalary = raiseSalary

employee1.raiseSalary(0.1)
employee2.raiseSalary(0.1)