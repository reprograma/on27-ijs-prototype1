function Gato(nome, idade, cor, castrado, historico) {
  let gato = Object.create(Gato.prototype);

  gato.nome = nome;
  gato.idade = idade;
  gato.cor = cor;
  gato.castrado = castrado;
  gato.historico = historico;

  return gato;
}

function Cachorro(nome, idade, cor, castrado, raca, historico) {
  let cachorro = Object.create(Cachorro.prototype);

  cachorro.nome = nome;
  cachorro.idade = idade;
  cachorro.cor = cor;
  cachorro.castrado = castrado;
  cachorro.raca = raca;
  cachorro.historico = historico;

  return cachorro;
}

function AnimalExotico(nome, idade, cor, especie, adulto, historico) {
  let animalExotico = Object.create(AnimalExotico.prototype);

  animalExotico.nome = nome;
  animalExotico.idade = idade;
  animalExotico.cor = cor;
  animalExotico.especie = especie;
  animalExotico.adulto = adulto;
  animalExotico.historico = historico;

  return animalExotico;
}

function HistoricoMedico() {
  let historicoMedico = Object.create(HistoricoMedico.prototype);

  historicoMedico.consultas = [];
  historicoMedico.vacinas = [];
  historicoMedico.procedimentos = [{}];

  return historicoMedico;
}

Gato.prototype.vacinar = function vacinar(vacina) {
  this.historico.vacinas.push(vacina);
  console.log(`Parabéns, ${this.nome} tomou a vacina ${vacina}`);
};

Cachorro.prototype.vacinar = function vacinar(vacina) {
  this.historico.vacinas.push(vacina);
  console.log(`Parabéns, ${this.nome} tomou a vacina ${vacina}`);
};

const gato = Gato("Nicolau", 96, "branco", true, HistoricoMedico());
gato.vacinar("V10");
console.log(gato.historico.vacinas);

const cachorro = Cachorro(
  "Pituco",
  120,
  "preto",
  true,
  "SRD",
  HistoricoMedico()
);
cachorro.vacinar("Gripe");
console.log(cachorro.historico.vacinas);
