// Importa o módulo 'crypto' para geração de um identificador único
const crypto = require('crypto');

// Define uma função chamada 'generateId' para gerar um identificador único
function generateId() {
  // Usa a biblioteca 'crypto' para gerar um identificador único
  const id = crypto.randomUUID();

  // Retorna o identificador gerado
  return id;
}

// Define uma função chamada 'raiseSalary' que aumenta o salário do funcionário em uma determinada porcentagem
function raiseSalary(percent) {
  // Aumenta o salário atual do funcionário com base na porcentagem fornecida
  this.salary += (this.salary * percent);

  // Imprime o novo salário no console
  console.log(`O novo salário é R$ ${this.salary}`)
}

// Define uma função chamada 'Employee' que cria um objeto de funcionário
function Employee(firstName, lastName, salary) {
  // Cria um objeto vazio chamado 'employee'
  let employee = {}

  // Gera um identificador único usando a função 'generateId' e atribui ao objeto 'employee'
  employee.id = generateId();

  // Atribui o primeiro nome ao objeto 'employee'
  employee.firstName = firstName;

  // Atribui o sobrenome ao objeto 'employee'
  employee.lastName = lastName;

  // Atribui o salário ao objeto 'employee'
  employee.salary = salary;

  // Atribui a função 'raiseSalary' ao objeto 'employee', para que cada funcionário possa aumentar seu salário
  employee.raiseSalary = raiseSalary;

  // Retorna o objeto 'employee' criado
  return employee;
}

// Exporta a função 'Employee' para que ela possa ser usada em outros arquivos
module.exports = { Employee }

