const { consultar, vacinar, realizarProcedimentos } = require("./consultas")
const { historicosMedicos } = require("./historicosMedicos")

function Gatos(nome, idade, cor, castrado) {
    this.nome = nome
    this.idade = idade
    this.cor = cor
    this.castrado = castrado
    this.historico = new historicosMedicos()
}

Gatos.prototype.consultar = consultar
Gatos.prototype.vacinar = vacinar
Gatos.prototype.realizarProcedimentos = realizarProcedimentos
Gatos.prototype.miar = miar

function miar() {
    console.log('Miau miauuuu.')
}

const gato = new Gatos('Pandora', 3, 'cinza', false);  
gato.miar();
console.log(gato);
gato.consultar('01/01/2023');
gato.vacinar('rinotraqueíte');
gato.realizarProcedimentos({tipo: 'ultrassom', motivo: 'gravida'});
gato.consultar('09/01/2023');
gato.vacinar('v5');
console.log(gato.historico);

module.exports = { Gatos }
