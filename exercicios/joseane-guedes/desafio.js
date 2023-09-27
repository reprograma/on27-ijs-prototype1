function Animal(nome, idade, cor) {
    this.nome = nome;
    this.idade = idade;
    this.cor = cor;
    this.historico = new HistoricoMedico();
}

function Gato(nome, idade, cor, castrado) {
    Animal.call(this, nome, idade, cor);
    this.castrado = castrado;
}

Gato.prototype.miar = function () {
    console.log("Meow!");
};

function Cachorro(nome, idade, cor, castrado, raca) {
    Animal.call(this, nome, idade, cor);
    this.castrado = castrado;
    this.raca = raca;
}

Cachorro.prototype.latir = function () {
    console.log("Au Au Au!");
};

function AnimalExotico(nome, idade, cor, especie) {
    Animal.call(this, nome, idade, cor);
    this.especie = especie;
}

AnimalExotico.prototype.ehAdulto = function () {
    const idadeLimitePorEspecie = {
        hamster: 2,
        papagaio: 36, // 3 anos
        calopsita: 18,
    };

    return this.idade >= idadeLimitePorEspecie[this.especie] || false;
};

function HistoricoMedico() {
    this.consultas = [];
    this.vacinas = [];
    this.procedimentos = [];
}

HistoricoMedico.prototype.vacinar = function (novaVacina) {
    this.vacinas.push(novaVacina);
};

HistoricoMedico.prototype.consultar = function (dataConsulta) {
    this.consultas.unshift(dataConsulta);
};

HistoricoMedico.prototype.realizarProcedimento = function (tipoProcedimento, motivoProcedimento) {
    this.procedimentos.push({ tipo: tipoProcedimento, motivo: motivoProcedimento });
};

module.exports = { AnimalExotico, Cachorro, Gato };
