function Gato(nome, idade, cor, castrado) {
  this.nome = nome;
  this.idade = idade;
  this.cor = cor;
  this.castrado = castrado;
  this.historico = new HistoricoMedico()

  this.miar = function() {
    console.log(`${this.nome} está miando`)
  };
}
function Cachorro(nome, idade, cor, castrado, raca) {
  this.nome = nome;
  this.idade = idade;
  this.cor = cor;
  this.castrado = castrado;
  this.raca = raca;
  this.historico = new HistoricoMedico()

  this.latir = function() {
    console.log(`${this.nome} está latindo`)
  };
}
function AnimalExotico(nome, idade, cor, especie, adulto) {
  this.nome = nome;
  this.idade = idade;
  this.cor = cor;
  this.especie = especie;
  this.adulto = adulto;
  this.historico = new HistoricoMedico()

  this.ehAdulto = function() {
    if (this.especie === "hamster" && this.idade >= 2) {
        return true;
    } else if (this.especie === "papagaio" && this.idade >= 36) { // 3 anos em meses
        return true;
    } else if (this.especie === "calopsita" && this.idade >= 18) { // 18 meses
        return true;
    }
    return false;
  };
}

function HistoricoMedico(){
  this.vacinas = [];
  this.consultas = [];
  this.procedimentos = [];

  this.vacinar = function(vacina) {
    this.vacinas.push(vacina);
  };
  this.consultar = function(data) {
    this.consultas.unshift(data);
  };
  this.realizarProcedimento = function(tipoProc, motivoProc) {
    let procedimento = { tipo: tipoProc, motivo: motivoProc }
    this.procedimentos.push(procedimento);
  };
}


module.exports = { Gato, Cachorro, AnimalExotico }