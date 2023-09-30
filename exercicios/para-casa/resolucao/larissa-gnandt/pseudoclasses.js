const {
  imprimeVacina,
  imprimeConsultas,
  imprimeProcedimento,
} = require("./utils");

function Gato(nome, idade, cor, castrado, historico) {
  this.nome = nome;
  this.idade = idade;
  this.cor = cor;
  this.castrado = castrado;
  this.historico = historico;

  this.vacinar = function (vacina) {
    this.historico.vacinas.push(vacina);
    imprimeVacina(this.nome, vacina);
  };

  this.consultar = function (consulta) {
    this.historico.consultas.push(consulta);
    this.historico.consultas.sort((a, b) => b - a);
    imprimeConsultas(this.nome, this.historico.consultas);
  };

  this.realizarProcedimento = function (tipo, motivo) {
    this.historico.procedimentos.push({ tipo, motivo });
    imprimeProcedimento(this.nome, tipo, motivo);
  };

  this.miar = function () {
    console.log(`${this.nome} está miando.`);
  };
}

function Cachorro(nome, idade, cor, castrado, raca, historico) {
  this.nome = nome;
  this.idade = idade;
  this.cor = cor;
  this.castrado = castrado;
  this.raca = raca;
  this.historico = historico;

  this.vacinar = function (vacina) {
    this.historico.vacinas.push(vacina);
    imprimeVacina(this.nome, vacina);
  };

  this.consultar = function (consulta) {
    this.historico.consultas.push(consulta);
    this.historico.consultas.sort((a, b) => b - a);
    imprimeConsultas(this.nome, this.historico.consultas);
  };

  this.realizarProcedimento = function (tipo, motivo) {
    this.historico.procedimentos.push({ tipo, motivo });
    imprimeProcedimento(this.nome, tipo, motivo);
  };

  this.latir = function latir() {
    console.log(`${this.nome} está latindo.`);
  };
}

function AnimalExotico(nome, idade, cor, especie, adulto, historico) {
  this.nome = nome;
  this.idade = idade;
  this.cor = cor;
  this.especie = especie;
  this.adulto = adulto;
  this.historico = historico;

  this.vacinar = function (vacina) {
    this.historico.vacinas.push(vacina);
    imprimeVacina(this.nome, vacina);
  };

  this.consultar = function (consulta) {
    this.historico.consultas.push(consulta);
    this.historico.consultas.sort((a, b) => b - a);
    imprimeConsultas(this.nome, this.historico.consultas);
  };

  this.realizarProcedimento = function (tipo, motivo) {
    this.historico.procedimentos.push({ tipo, motivo });
    imprimeProcedimento(this.nome, tipo, motivo);
  };

  this.ehAdulto = function () {
    switch (this.especie) {
      case "hamster":
        return this.idade >= 2;
      case "papagaio":
        return this.idade >= 36;
      case "calopsita":
        return this.idade >= 18;
      default:
        return false;
    }
  };
}

function HistoricoMedico() {
  this.consultas = [];
  this.vacinas = [];
  this.procedimentos = [];
}

module.exports = { Gato, Cachorro, AnimalExotico, HistoricoMedico };
