// HISTORIO MÉDICO-----------------------------------------------------------
function HistoricoMedico() {
  this.consultas = [];
  this.vacinas = [];
  this.procedimentos = [];
}

HistoricoMedico.prototype.vacinar = function (novaVacina, nome) {
  this.vacinas.push(novaVacina, nome);
  console.log(
    `A vacina ${novaVacina} foi adicionada ao histórico do animal: ${nome}`
  );
};

HistoricoMedico.prototype.consultar = function (data, nome) {
  this.consultas.unshift(data);
  console.log(`O animal ${nome} tem uma nova consulta agendada para ${this.consultas}`);
};

//GATOS----------------------------------------------------------------------
function Gatos(nome, idade, cor, castrado) {
  this.nome = nome;
  this.idade = idade;
  this.cor = cor;
  this.castrado = castrado;
  this.historico = new HistoricoMedico();
}

Gatos.prototype.miar = function () {
  console.log(this.nome + " é um gato e está miando!");
};

const animal1 = new Gatos("Pipoca", 18, "branco", true);
animal1.historico.consultar("09/27/2023", animal1.nome);
animal1.historico.vacinar("v4", animal1.nome);
animal1.miar();


//CACHORROS--------------------------------------------------------------------
function Cachorro(nome, idade, cor, castrado, raca) {
  this.nome = nome;
  this.idade = idade;
  this.cor = cor;
  this.castrado = castrado;
  this.raca = raca;
  this.historico = new HistoricoMedico();
}

Cachorro.prototype.latir = function () {
  console.log(this.nome + "é um cachorro e está latindo!");
};

const animal2 = new Cachorro("Aslam", 42, "preto", false, "srd");
animal2.historico.consultar("10/01/2023", animal2.nome);
animal2.historico.vacinar("raiva", animal2.nome);
animal2.latir();

//ANIMAIS EXOTICOS---------------------------------------------------------------
function AnimalExotico(nome, idade, cor, especie) {
  this.nome = nome;
  this.idade = idade;
  this.cor = cor;
  this.especie = especie;
  this.historico = new HistoricoMedico();
}

AnimalExotico.prototype.ehAdulto = function () {
  if (this.especie === "hamster" && this.idade >= 2) {
    console.log(
      `${this.nome} é da espécie ${this.especie} e é um animal adulto, sua idade é ${this.idade} meses`
    );
  } else if (this.especie === "papagaio" && this.idade >= 36) {
    console.log(
      `${this.nome} é da espécie ${this.especie} e é um animal adulto, sua idade é ${this.idade} meses`
    );
  } else if (this.especie === "calopsita" && this.idade >= 18) {
    console.log(
      `${this.nome} é da espécie ${this.especie} e é um animal adulto, sua idade é ${this.idade} meses`
    );
  } else {
    console.log(
      `${this.nome} tem apenas ${this.idade} meses e ainda é um filhote!`
    );
  }
};

const animal3 = new AnimalExotico("Iogurte", 19, "branco e laranja", "hamster");
animal3.historico.consultar("10/02/2023", animal3.nome);
animal3.historico.vacinar("raiva", animal3.nome);
animal3.ehAdulto();

const animal4 = new AnimalExotico("Fusca", 36, "verde", "papagaio");
animal4.historico.consultar("10/03/2023", animal4.nome);
animal4.historico.vacinar("raiva", animal4.nome);
animal4.ehAdulto();

const animal5 = new AnimalExotico("Juju", 12, "azul", "calopsita");
animal5.historico.consultar("10/04/2023", animal5.nome);
animal5.historico.vacinar("raiva", animal5.nome);
animal5.ehAdulto();
