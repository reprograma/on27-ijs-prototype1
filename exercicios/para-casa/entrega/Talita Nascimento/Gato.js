const { HistoricoMedico } = require('./HistoricoMedico');
const { consultar, vacinar, realizarProcedimento } = require('./Animais');

function miar() {
    console.log(`Miau! Miau! Miau!`)
}

function Gato(nome, idade, cor, ehCastrado) {
    this.nome = nome;
    this.idade = idade;
    this.cor = cor;
    this.ehCastrado = ehCastrado;
    this.historicoMedico = new HistoricoMedico();

}

Gato.prototype.miar = miar;
Gato.prototype.consultar = consultar;
Gato.prototype.vacinar = vacinar;
Gato.prototype.realizarProcedimento = realizarProcedimento;


module.exports = { Gato };