function HistoricoMedico(consultas, vacinas, procedimentos) {
  this.consultas = [];
  this.vacinas = [];
  this.procedimentos = [];
}

HistoricoMedico.prototype.consultar = function consultar(data) {
  this.consultas.unshift(data);
  console.log(`A consulta realizada em ${data} foi adicionada ao histórico médico.`);
}

HistoricoMedico.prototype.vacinar = function vacinar(vacina) {
  this.vacinas.push(vacina);
  console.log(`A vacina ${vacina} foi adicionada ao histórico médico.`);
}

function Gato(nome, idade, cor, castrado, historico) {
  this.nome = nome;
  this.idade = idade;
  this.cor = cor;
  this.castrado = false;
  this.historico = [];
}

Gato.prototype.miar = function miar() {
  console.log("Miau!");
}

function Cachorro(nome, idade, cor, castrado, raca, historico) {
  this.nome = nome;
  this.idade = idade;
  this.cor = cor;
  this.castrado = false;
  this.raca = raca;
  this.historico = [];
}

Cachorro.prototype.latir = function latir() {
  console.log("Au!");
}

function AnimalExotico(nome, idade, cor, especie, adulto, historico) {
  this.nome = nome;
  this.idade = idade;
  this.cor = cor;
  this.especie = especie;
  this.adulto = false;
  this.historico = [];
}



