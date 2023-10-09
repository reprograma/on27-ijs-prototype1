const { consultar, vacinar, realizarProcedimentos } = require("./consultas");
const { historicosMedicos } = require("./historicosMedicos");

function Cachorro(nome, idade, cor, castrado, raça) {
    this.nome = nome
    this.idade = idade
    this.cor = cor
    this.castrado = castrado
    this.raça = raça
    this.historico = new historicosMedicos()
}

Cachorro.prototype.consultar = consultar
Cachorro.prototype.vacinar = vacinar
Cachorro.prototype.realizarProcedimento = realizarProcedimentos
Cachorro.prototype.ladrar = ladrar

function ladrar() {
    console.log("Uau uau.")
}

const cachorro = new Cachorro('Quenobi', 4, 'preto', true, 'rottweiler')
console.log(cachorro);
cachorro.ladrar();
cachorro.consultar('19/09/2023');
cachorro.vacinar('gripe');
cachorro.realizarProcedimento({tipo: 'RX', motivo: 'perna traseira do lado direito quebrou'});
cachorro.consultar('03/11/2023');
cachorro.vacinar('raiva');
console.log(cachorro.historico);


module.exports = { Cachorro }