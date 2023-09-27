function HistoricoMedico() {
  this.consultas = [];
  this.vacinas = [];
  this.procedimentos = [];
}

HistoricoMedico.prototype.adicionarConsulta = function adicionarConsulta(data) {
  this.consultas.unshift(data);
  console.log(`A consulta realizada em ${data} foi adicionada ao histórico médico.`);
}

HistoricoMedico.prototype.adicionarVacina = function adicionarVacina(vacina) {
  this.vacinas.push(vacina);
  console.log(`A vacina ${vacina} foi adicionada ao histórico médico.`);
}

HistoricoMedico.prototype.adicionarProcedimento = function adicionarProcedimento(tipo, motivo) {
  this.procedimentos.push({tipo, motivo});
  console.log(`O procedimento ${tipo} foi adicionado ao histórico médico pelo motivo: ${motivo}`);
}

function Gato(nome, idade, cor, castrado) {
  this.nome = nome;
  this.idade = idade;
  this.cor = cor;
  this.castrado = castrado;
  this.historico = new HistoricoMedico();
}

Gato.prototype.miar = function miar() {
  console.log(`O gato ${this.nome} está miando!`);
}

function Cachorro(nome, idade, cor, castrado, raca) {
  this.nome = nome;
  this.idade = idade;
  this.cor = cor;
  this.castrado = castrado;
  this.raca = raca;
  this.historico = new HistoricoMedico();
}

Cachorro.prototype.latir = function latir() {
  console.log(`O cachorro ${this.nome} está latindo!`);
}

function AnimalExotico(nome, idade, cor, especie) {
  this.nome = nome;
  this.idade = idade;
  this.cor = cor;
  this.especie = especie;
  this.historico = new HistoricoMedico();
}

AnimalExotico.prototype.ehAdulto = function ehAdulto() {
  this.adulto = false;
  if(this.especie === "hamster" && this.idade >= 2) {
    this.adulto = true;
  }
  if(this.especie === "papagaio" && this.idade >= 36) {
    this.adulto = true;
  }
  if(this.especie === "calopsita" && this.idade >= 18) {
    this.adulto = true;
  }
  if(this.adulto === true) {
    console.log(`O animal ${this.especie} ${this.nome} é considerado adulto.`)
  } else {
    console.log(`O animal ${this.especie} ${this.nome} não é considerado adulto.`)
  }
}

const gato = new Gato("Bartolomeu", 96, "preto e branco", false);
console.log(gato);
gato.miar();
gato.historico.adicionarConsulta("20/09/2023");
gato.historico.adicionarVacina("v8");
gato.historico.adicionarVacina("v10");
gato.historico.adicionarProcedimento("coleta de sangue", "febre")
console.log(gato.historico);

const cachorro = new Cachorro("Pelúcia", 132, "cinza", true, "srd");
console.log(cachorro);
cachorro.latir();
cachorro.historico.adicionarConsulta("21/09/2023");
cachorro.historico.adicionarConsulta("27/09/2023");
cachorro.historico.adicionarVacina("raiva");
cachorro.historico.adicionarProcedimento("raio-x", "tosse");
console.log(cachorro.historico);

const hamster = new AnimalExotico("Tofu", 36, "branco", "hamster");
console.log(hamster);
hamster.ehAdulto();
hamster.historico.adicionarConsulta("23/09/2023");
hamster.historico.adicionarVacina("v10");
hamster.historico.adicionarProcedimento("ultrassom", "dores");
console.log(hamster.historico);

const papagaio = new AnimalExotico("Gengibre", 35, "amarelo", "papagaio");
console.log(papagaio);
papagaio.ehAdulto();
papagaio.historico.adicionarConsulta("24/09/2023");
papagaio.historico.adicionarVacina("v8");
console.log(papagaio.historico);

const calopsita = new AnimalExotico("Pepita", 21, "branco", "calopsita");
console.log(calopsita);
calopsita.ehAdulto();
calopsita.historico.adicionarConsulta("26/09/2023");
calopsita.historico.adicionarVacina("v10");
console.log(calopsita.historico);