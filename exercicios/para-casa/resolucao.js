function HistoricoMedico(){
  this.consultas = [];
  this.vacinas = [];
  this.procedimentos = [];

this.vacinar = function vacinar(novaVacina) {
  this.vacinas.push(novaVacina);
};

this.consultar = function(dataDaConsulta){
  this.consultas.unshift(dataDaConsulta);
}

this.realizarProcedimentos = function realizarProcedimentos(tipo, motivo){
  let procedimento = {tipo:tipo, motivo: motivo}
  this.procedimentos.push(procedimento);
}
}

function Gato(nome, idade, cor, castrado) {
  this.nome = nome;
  this.idade = idade;
  this.cor = cor;
  this.castrado = castrado;
  this.historico = new HistoricoMedico();

  this.miar = function miar() {
    console.log(`O gato ${this.nome} está miando`);
  };
}

function Cachorro(nome, idade, cor, castrado, raca) {
  this.nome = nome;
  this.idade = idade;
  this.cor = cor;
  this.castrado = castrado;
  this.raca = raca;
  this.historico = new HistoricoMedico();

  this.latir = function latir() {
    console.log(`O cachorro ${this.nome} está latindo`);
  };
}

function AnimalExotico(nome, idade, cor, especie) {
  this.nome = nome;
  this.idade = idade;
  this.cor = cor;
  this.especie = especie;
  this.historico = new HistoricoMedico();

  this.ehAdulto = function ehAdulto() {
    if (this.especie === "Hamster" && this.idade >= 2) {
      return true;
    } else if (this.especie === "Papagaio" && this.idade >= 36) {
      return true;
    } else if (this.especie === "Calopsita" && this.idade >= 18) {
      return true;
    } else {
      return false;
    }
  };
  this.adulto = this.ehAdulto();
}

module.exports = { Gato, Cachorro, AnimalExotico };
