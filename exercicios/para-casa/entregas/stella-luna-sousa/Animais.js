const {Vacinar, Consultar, RealizarProcedimento, HistoricoMedico} = require('./Procedimentos');

function Gato(nome, idade, cor, castrado) {
    this.nome = nome;
    this.idade = idade; //em meses
    this.cor = cor;
    this.castrado = castrado;
    this.historicoMedico = new HistoricoMedico();

    this.vacinar = Vacinar;
    this.consultar = Consultar;
    this.realizarProcedimento = RealizarProcedimento;

    this.miar = () => { console.log(`${this.nome} diz: Miau miau! ^•ﻌ•^ฅ♡`)}



}

function Cachorro(nome, idade, cor, castrado, raca) {
    this.nome = nome;
    this.idade = idade; //em meses
    this.cor = cor;
    this.castrado = castrado;
    this.raca = raca;
    this.historicoMedico = new HistoricoMedico();

    this.vacinar = Vacinar;
    this.consultar = Consultar;
    this.realizarProcedimento = RealizarProcedimento;

    this.latir = () => { console.log(`${this.nome} diz: Au Au! ฅ՞•ﻌ•՞♡`)}



}

function AnimalExotico(nome, idade, cor, especie) {
    this.nome = nome;
    this.idade = idade; //em meses
    this.cor = cor;
    this.especie = especie;
    this.historicoMedico = new HistoricoMedico();
    
    this.adulto = IsAdulto(this.especie, this.idade);
    this.vacinar = Vacinar;
    this.consultar = Consultar;
    this.realizarProcedimento = RealizarProcedimento;

}

function IsAdulto(especie, idade) {
    if(typeof especie === "string") especie = especie.toLowerCase();

    switch(especie) {
        case 'hamster': return idade >= 2;
        case 'papagaio': return idade >= 36;
        case 'calopsita': return idade >= 18;
        default: return false;
    }
}

module.exports = {Gato, Cachorro, AnimalExotico};