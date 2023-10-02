const { HistoricoMedico } = require('./HistoricoMedico');
const { consultar, vacinar, realizarProcedimento } = require ('./Animais');

function latir() {
    console.log(`Au! Au! Au!`)
}

function Cachorro(nome, idade, cor, ehCastrado, racaDoCachorro) {
    this.nome = nome;
    this.idade = idade;
    this.cor = cor;
    this.ehCastrado = ehCastrado;
    this.racaDoCachorro = racaDoCachorro;
    this.historicoMedico = new HistoricoMedico();
}

Cachorro.prototype.latir = latir;
Cachorro.prototype.consultar = consultar;
Cachorro.prototype.vacinar = vacinar;
Cachorro.prototype.realizarProcedimento = realizarProcedimento;

module.exports = { Cachorro };