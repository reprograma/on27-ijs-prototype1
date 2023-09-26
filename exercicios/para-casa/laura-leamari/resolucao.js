function HistoricoMedico(){
  this.vacinas = [];
  this.consultas = [];
  this.procedimentos = [];
}
function Gato(nome, idade, cor, castrado) {
  this.nome = nome;
  this.idade = idade;
  this.cor = cor;
  this.castrado = castrado;
  this.historico = new HistoricoMedico()
}
function Cachorro(nome, idade, cor, castrado, raca) {
  this.nome = nome;
  this.idade = idade;
  this.cor = cor;
  this.castrado = castrado;
  this.raca = raca;
  this.historico = new HistoricoMedico()
}
function AnimalExotico(nome, idade, cor, especie, adulto) {
  this.nome = nome;
  this.idade = idade;
  this.cor = cor;
  this.especie = especie;
  this.adulto = adulto;
  this.historico = new HistoricoMedico()
}
HistoricoMedico.prototype.vacinar = function vacinar(vacina) {
  this.vacinas.push(vacina);
};
HistoricoMedico.prototype.consultar = function consultar(data) {
  this.consultas.unshift(data);
};
HistoricoMedico.prototype.realizarProcedimento = function realizarProcedimento(procedimento) {
  this.procedimentos.push(procedimento);
};
Gato.prototype.miar = function miar() {
  console.log(`O ${this.nome} está miando`)
};
Cachorro.prototype.latir = function latir() {
  console.log(`O ${this.nome} está latindo`)
};
AnimalExotico.prototype.ehAdulto = function ehAdulto() {
  if (this.especie === "hamster" && this.idade >= 2) {
      return true;
  } else if (this.especie === "papagaio" && this.idade >= 36) { // 3 anos em meses
      return true;
  } else if (this.especie === "calopsita" && this.idade >= 18) { // 18 meses
      return true;
  }
  return false;
};

module.exports = { Gato, Cachorro, AnimalExotico }