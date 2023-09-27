function HistoricoMedico() {
  this.consultas = [];
  this.vacinas = [];
  this.procedimentos = [];
  this.vacinar = (novaVacina) => this.vacinas.push(novaVacina);
  this.consultar = (novaConsulta) => this.consultas.unshift(novaConsulta);
  this.realizarProcedimento = (tipo, motivo) => this.procedimentos.push({ tipo, motivo });
}

function Gato(nome, idade, cor, castrado) {
  this.nome = nome;
  this.idade = idade;
  this.cor = cor;
  this.castrado = castrado;
  this.historico = new HistoricoMedico();
  this.miar = () => console.log(`${this.nome} está miando!`);
}

function Cachorro(nome, idade, cor, castrado, raca) {
  this.nome = nome;
  this.idade = idade;
  this.cor = cor;
  this.castrado = castrado;
  this.raca = raca;
  this.historico = new HistoricoMedico();
  this.latir = () => console.log(`${this.nome} está latindo!`);
}

function AnimalExotico(nome, idade, cor, especie) {
  this.nome = nome;
  this.idade = idade;
  this.cor = cor;
  this.especie = especie;
  this.historico = new HistoricoMedico();
  this.ehAdulto = () => (this.especie === 'hamster' && this.idade >= 2) || (this.especie === 'papagaio' && this.idade >= 36) || (this.especie === 'calopsita' && this.idade >= 18);
  this.adulto = this.ehAdulto();
}

module.exports = { Gato, Cachorro, AnimalExotico };
