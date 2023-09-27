function Gato(nome, idade, cor, castrado){
  this.nome = nome;
  this.idade = idade;
  this.cor = cor;
  this.castrado = castrado;
  this.historico = new HistoricoMedico
}

function Cachorro (nome, idade, cor, castrado, raça){
  this.nome = nome;
  this.idade = idade;
  this.cor = cor;
  this.castrado = castrado
  this.raça = raça
  this.historico = new HistoricoMedico
}

function AnimalExotico (nome, idade, cor, especie, adulto){
  this.nome = nome;
  this.idade = idade;
  this.cor = cor;
  this.especie = especie;
  this.adulto = adulto;
  this.historico = new HistoricoMedico;
}

function HistoricoMedico (consultas, vacinas, procedimentos){
  this.consultas = consultas || [];
  this.vacinas = vacinas || [];
  this.procedimentos = procedimentos || [];
}

HistoricoMedico.prototype.vacinar = function vacinar(nome) {
  this.vacinas.push(nome)
}

HistoricoMedico.prototype.consultar = function consultar(data) {
  // para comparar vou transformar a data recebida para date em js
  const novaData = new Date(data);
  // quero saber o tamanho da minha array para saber onde inserir
  let posicaoInsercao = this.consultas.length;
  // itero por cada data e faço um if para checar se é maior ou igual, encontro o index
  for (let i = 0; i < this.consultas.length; i++) {
    const consultaExistente = new Date(this.consultas[i]);
    if (novaData >= consultaExistente) {
      posicaoInsercao = i;
      break;
    }
  }
  // uso splice para inserir a data na array
  this.consultas.splice(posicaoInsercao, 0, data);
}

HistoricoMedico.prototype.procedimento = function procedimento(tipo, motivo) {
  this.procedimentos.push({ tipo, motivo });
}

Gato.prototype.miar = function miar() {
  console.log(`${this.nome} está miando: Meow!`);
}

Cachorro.prototype.latir = function latir() {
  console.log(`${this.nome} está latindo: Woof!`);
}

AnimalExotico.prototype.ehAdulto = function ehAdulto() {
  // vou deixar suas idades em meses (ficou melhor para que eu entenda)
  if (this.especie == "Hamster") {
    return this.idade >= 2; // Adulto com 2 meses
  } else if (this.especie === 'Papagaio') {
    return this.idade >= 36; // Adulto com 3 anos (36 meses)
  } else if (this.especie === 'Calopsita') {
    return this.idade >= 18; // Adulto com 18 meses
  } else {
    return false;
  }
}

module.exports = { Gato, Cachorro, AnimalExotico, HistoricoMedico };