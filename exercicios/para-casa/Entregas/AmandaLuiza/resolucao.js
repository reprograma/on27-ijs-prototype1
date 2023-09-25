// Função construtora para o objeto HistoricoMedico
function HistoricoMedico() {
  this.consultas = [];
  this.vacinas = [];
  this.procedimentos = [];
}

// Método para adicionar uma nova vacina ao histórico médico
HistoricoMedico.prototype.vacinar = function (novaVacina) {
  this.vacinas.push(novaVacina);
};

// Método para adicionar uma nova consulta ao histórico médico
HistoricoMedico.prototype.consultar = function (dataConsulta) {
  this.consultas.unshift(dataConsulta);
};

// Função construtora para o objeto Gato
function Gato(nome, idade, cor, castrado) {
  this.nome = nome;
  this.idade = idade;
  this.cor = cor;
  this.castrado = castrado;
  this.historico = new HistoricoMedico();
}

// Método para o gato miar
Gato.prototype.miar = function () {
  console.log(this.nome + " está miando!");
};

// Função construtora para o objeto Cachorro
function Cachorro(nome, idade, cor, castrado, raça) {
  this.nome = nome;
  this.idade = idade;
  this.cor = cor;
  this.castrado = castrado;
  this.raça = raça;
  this.historico = new HistoricoMedico();
}

// Método para o cachorro latir
Cachorro.prototype.latir = function () {
  console.log(this.nome + " está latindo!");
};

// Função construtora para o objeto AnimalExotico
function AnimalExotico(nome, idade, cor, especie, adulto) {
  this.nome = nome;
  this.idade = idade;
  this.cor = cor;
  this.especie = especie;
  this.adulto = adulto;
  this.historico = new HistoricoMedico();
}

// Método para verificar se o animal exótico é adulto
AnimalExotico.prototype.ehAdulto = function () {
  if (this.especie === "hamster" && this.idade >= 2) {
    return true;
  } else if (this.especie === "papagaio" && this.idade >= 36) {
    return true;
  } else if (this.especie === "calopsita" && this.idade >= 18) {
    return true;
  } else {
    return false;
  }
};

// Exemplo de uso
const pipoca = new Gato("Pipoca", 18, "branco", true);
pipoca.historico.vacinar("v8");
pipoca.historico.consultar("9/7/2023");
pipoca.miar();

const aslam = new Cachorro("Aslam", 42, "preto", false, "srd");
aslam.historico.vacinar("v10");
aslam.historico.consultar("13/1/2023");
aslam.latir();

const iogurte = new AnimalExotico("Iogurte", 19, "branco e laranja", "hamster", true);
iogurte.historico.vacinar("raiva");
iogurte.historico.consultar("20/7/2022");
console.log(iogurte.ehAdulto()); // Deverá retornar true
