
function HistoricoMedico() {
    this.consultas = []
    this.vacinas = []
    this.procedimento = []

}

HistoricoMedico.prototype.vacinar = function vacinar(vacina) {
    this.vacinas.push(vacina);
  }

HistoricoMedico.prototype.consultar = function consultar(data) {
    this.consultas.push(data)
  }

HistoricoMedico.prototype.realizarProcedimento = function realizarProcedimento(tipo, motivo) {
    this.procedimento.push({ tipo, motivo })
}


function Gato(nome, idade, cor, castrado) {
    this.nome = nome;
    this.idade = idade;
    this.cor = cor;
    this.castrado = castrado;
    this.historico = new HistoricoMedico();
}

Gato.prototype.miar = function miar() {
    console.log("gato miou");
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
    console.log("cachorro latiu");
}


function AnimalExotico(nome, idade, cor, especie, adulto) {
    this.nome = nome;
    this.idade = idade;
    this.cor = cor;
    this.especie = especie;
    this.adulto = adulto
    this.historico = new HistoricoMedico();
}


AnimalExotico.prototype.ehAdulto = function ehAdulto () {
    const animalAdulto = {
        hamster: 2,
        papagaio: 36,
        calopsita: 18
    };

    const adulto = animalAdulto[this.especie];
    if (this.idade >= adulto) {

        console.log(`Seu bichinho chamado ${this.nome} da especie ${this.especie} tem ${this.idade} meses e  é adulto`)
        return this.adulto = true;

    } else {

        console.log(`Seu bichinho chamado ${this.nome} da especie ${this.especie} tem ${this.idade} meses e  não é adulto`)
        return this.adulto = false;
    }
};


module.exports = {HistoricoMedico, Gato,Cachorro,AnimalExotico};

