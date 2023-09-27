function Gato(nome, idade, cor, castrado, historico) {
  this.nome = nome;
  this.idade = idade;
  this.cor = cor;
  this.castrado = castrado;
  this.historico = historico;
}

Gato.prototype.miar = function miar(nome) {
  console.log(`O gato de ${nome} miou!`);
};

function Cachorro(nome, idade, cor, castrado, raça, historico) {
  this.nome = nome;
  this.idade = idade;
  this.cor = cor;
  this.castrado = castrado;
  this.raça = raça;
  this.historico = historico;
}

Cachorro.prototype.latir = function latir(nome) {
  console.log(`O cachorro de ${nome} latiu!`);
};

function AnimalExotico(nome, idade, cor, especie, adulto, historico) {
  this.nome = nome;
  this.idade = idade;
  this.cor = cor;
  this.especie = especie;
  this.adulto = adulto;
  this.historico = historico;
}

AnimalExotico.prototype.ehAdulto = function ehAdulto(idade) {
  if (this.especie === "hamster" && idade >= 2) {
    this.adulto = true;
    this.idade = idade;
    console.log(`Seu bichinho é adulto!`);
  } else if (this.especie === "calopsita" && idade >= 18) {
    this.adulto = true;
    this.idade = idade;
    console.log(`Seu bichinho é adulto!`);
  } else if (this.especie === "papagaio" && idade >= 36) {
    this.adulto = true;
    this.idade = idade;
    console.log(`Seu bichinho é adulto!`);
  } else {
    this.adulto = false;
    this.idade = idade;
    console.log(`Seu bichinho ainda é uma criança.`);
  }
};

function HistoricoMedico(consultas, vacinas, procedimentos) {
  this.consultas = consultas;
  this.vacinas = vacinas;
  this.procedimentos = procedimentos;
}

HistoricoMedico.prototype.consultar = function consultar(consulta) {
  this.consultas.push(consulta);
  this.consultas.sort((a, b) => (a < b ? 1 : -1));
  console.log(
    `O seu bichinho foi a ${this.consultas.length} consultas: ${this.consultas}`
  );
};

HistoricoMedico.prototype.vacinar = function vacinar(vacina) {
  this.vacinas.push(vacina);
  console.log(`O seu bichinho tomou estas vacinas: ${this.vacinas}`);
}

const historicoMalu = new HistoricoMedico(
    ["2023-07-09", "2023-01-13", "2022-07-20"],
    ["raiva", "v8", "v10"],
    [{ tipo: "ultrassom", motivo: "dores"}]
)

historicoMalu.consultar("2023-09-27");
historicoMalu.vacinar("antirrábica");